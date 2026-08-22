import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENWEATHER_API_KEY is not configured" },
        { status: 500 }
      );
    }

    const city = "Herat";

    const url =
      `https://api.openweathermap.org/data/2.5/forecast` +
      `?q=${encodeURIComponent(city)}` +
      `&appid=${apiKey}` +
      `&units=metric`;

    const response = await fetch(url, {
      next: {
        revalidate: 1800,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: data.message || "OpenWeather request failed",
        },
        { status: response.status }
      );
    }

    /*
     * Group 3-hour forecasts by calendar day.
     */
    const daily = {};

    data.list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];

      if (!daily[date]) {
        daily[date] = {
          date,
          temperatures: [],
          weather: [],
          precipitation: [],
        };
      }

      daily[date].temperatures.push(item.main.temp);

      daily[date].weather.push({
        id: item.weather[0].id,
        main: item.weather[0].main,
        description: item.weather[0].description,
        icon: item.weather[0].icon,
      });

      daily[date].precipitation.push(
        item.pop || 0
      );
    });

    /*
     * Convert grouped data into daily forecast.
     */
    const forecast = Object.values(daily).map((day) => {
      const maxTemp = Math.max(...day.temperatures);
      const minTemp = Math.min(...day.temperatures);

      /*
       * Choose the most common weather condition
       * during the day.
       */
      const weatherCount = {};

      day.weather.forEach((weather) => {
        const key = weather.id;

        weatherCount[key] =
          (weatherCount[key] || 0) + 1;
      });

      const mostCommonWeatherId = Object.keys(
        weatherCount
      ).reduce((a, b) =>
        weatherCount[a] > weatherCount[b] ? a : b
      );

      const weather = day.weather.find(
        (item) =>
          String(item.id) ===
          String(mostCommonWeatherId)
      );

      return {
        date: day.date,
        high: Math.round(maxTemp),
        low: Math.round(minTemp),
        condition: weather.main,
        description: weather.description,
        icon: weather.icon,
        rainChance: Math.round(
          Math.max(...day.precipitation) * 100
        ),
      };
    });

    return NextResponse.json({
      city: data.city.name,
      country: data.city.country,
      forecast,
    });
  } catch (error) {
    console.error("Weather API error:", error);

    return NextResponse.json(
      {
        error: "Unable to load weather forecast",
      },
      { status: 500 }
    );
  }
}
