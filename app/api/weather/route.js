export async function GET(request) {
    try {
      const { searchParams } = new URL(request.url);
  
      const city = searchParams.get("city");
      const type = searchParams.get("type") || "current";
  
      if (!city) {
        return Response.json(
          { error: "City is required" },
          { status: 400 }
        );
      }
  
      const apiKey = process.env.WEATHER_API_KEY;
  
      if (!apiKey) {
        return Response.json(
          { error: "WEATHER_API_KEY is missing" },
          { status: 500 }
        );
      }
  
      // -----------------------------
      // DAILY FORECAST
      // -----------------------------
  
      if (type === "forecast") {
        const url =
          `https://api.openweathermap.org/data/2.5/forecast` +
          `?q=${encodeURIComponent(city)}` +
          `&appid=${apiKey}` +
          `&units=metric`;
  
        const response = await fetch(url, {
          cache: "no-store",
        });
  
        const data = await response.json();
  
        console.log("FORECAST STATUS:", response.status);
  
        if (!response.ok) {
          return Response.json(
            {
              error:
                data.message ||
                "Forecast request failed",
            },
            { status: response.status }
          );
        }
  
        // Group forecasts by date
        const days = {};
  
        data.list.forEach((item) => {
          const date = item.dt_txt.split(" ")[0];
  
          if (!days[date]) {
            days[date] = [];
          }
  
          days[date].push(item);
        });
  
        const daily = Object.entries(days)
          .slice(0, 5)
          .map(([date, items], index) => {
            const temperatures = items.map(
              (item) => item.main.temp
            );
  
            const high = Math.max(
              ...temperatures
            );
  
            const low = Math.min(
              ...temperatures
            );
  
            const midday =
              items.find((item) =>
                item.dt_txt.includes("12:00:00")
              ) || items[Math.floor(items.length / 2)];
  
            const rainChance = Math.max(
              ...items.map(
                (item) => (item.pop || 0) * 100
              )
            );
  
            return {
              date,
  
              day:
                index === 0
                  ? "Today"
                  : new Date(
                      `${date}T12:00:00`
                    ).toLocaleDateString("en-US", {
                      weekday: "short",
                    }),
  
              dateLabel: new Date(
                `${date}T12:00:00`
              ).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              }),
  
              high: Math.round(high),
  
              low: Math.round(low),
  
              condition:
                midday.weather[0].main,
  
              description:
                midday.weather[0].description,
  
              icon:
                midday.weather[0].icon,
  
              rainChance:
                Math.round(rainChance),
            };
          });
  
        return Response.json({
          success: true,
  
          city: data.city.name,
  
          country: data.city.country,
  
          daily,
        });
      }
  
      // -----------------------------
      // CURRENT WEATHER
      // -----------------------------
  
      const url =
        `https://api.openweathermap.org/data/2.5/weather` +
        `?q=${encodeURIComponent(city)}` +
        `&appid=${apiKey}` +
        `&units=metric`;
  
      const response = await fetch(url);
  
      const data = await response.json();
  
      if (!response.ok) {
        return Response.json(
          {
            error:
              data.message ||
              "Weather request failed",
          },
          { status: response.status }
        );
      }
  
      return Response.json({
        city: data.name,
        country: data.sys.country,
        temperature: Math.round(
          data.main.temp
        ),
        feelsLike: Math.round(
          data.main.feels_like
        ),
        condition: data.weather[0].main,
        description:
          data.weather[0].description,
        icon: data.weather[0].icon,
        humidity: data.main.humidity,
        wind: Math.round(
          data.wind.speed * 3.6
        ),
        pressure: data.main.pressure,
        visibility: Math.round(
          data.visibility / 1000
        ),
      });
    } catch (error) {
      console.error("WEATHER ERROR:", error);
  
      return Response.json(
        {
          error:
            error.message ||
            "Something went wrong",
        },
        { status: 500 }
      );
    }
  }
  