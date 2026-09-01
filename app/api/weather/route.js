export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const city = searchParams.get("city");
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    const type = searchParams.get("type") || "current";

    // =====================================================
    // API KEY
    // =====================================================

    const apiKey = process.env.WEATHER_API_KEY;

    if (!apiKey) {
      return Response.json(
        {
          error: "WEATHER_API_KEY is missing",
        },
        { status: 500 }
      );
    }

    // =====================================================
    // VALIDATE LOCATION
    // =====================================================

    if (!city && (!lat || !lon)) {
      return Response.json(
        {
          error:
            "Please provide either city or latitude and longitude.",
        },
        { status: 400 }
      );
    }

    // =====================================================
    // BUILD LOCATION QUERY
    // =====================================================

    let locationQuery = "";

    if (lat && lon) {
      locationQuery =
        `lat=${encodeURIComponent(lat)}` +
        `&lon=${encodeURIComponent(lon)}`;
    } else {
      locationQuery = `q=${encodeURIComponent(city)}`;
    }

    // =====================================================
    // FORECAST
    // =====================================================

    if (type === "forecast") {
      const url =
        `https://api.openweathermap.org/data/2.5/forecast` +
        `?${locationQuery}` +
        `&appid=${apiKey}` +
        `&units=metric`;

      const response = await fetch(url, {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(
          "OpenWeather forecast error:",
          data
        );

        return Response.json(
          {
            error:
              data?.message ||
              "OpenWeather forecast failed",
          },
          { status: response.status }
        );
      }

      // =====================================================
      // HOURLY
      // =====================================================

      const hourly = data.list
        .slice(0, 12)
        .map((item) => ({
          time: item.dt,

          temperature: Math.round(
            item.main.temp
          ),

          feelsLike: Math.round(
            item.main.feels_like
          ),

          condition:
            item.weather?.[0]?.main || "",

          description:
            item.weather?.[0]?.description || "",

          icon:
            item.weather?.[0]?.icon || "",

          humidity:
            item.main.humidity,

          wind: Math.round(
            (item.wind?.speed || 0) * 3.6
          ),

          rainChance: Math.round(
            (item.pop || 0) * 100
          ),

          timestamp: item.dt,
        }));

      // =====================================================
      // DAILY
      // =====================================================

      const groupedDays = {};

      data.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0];

        if (!groupedDays[date]) {
          groupedDays[date] = [];
        }

        groupedDays[date].push(item);
      });

      const daily = Object.entries(groupedDays)
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
            ) ||
            items[Math.floor(items.length / 2)];

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
                  ).toLocaleDateString(
                    "en-US",
                    {
                      weekday: "short",
                    }
                  ),

            dateLabel: new Date(
              `${date}T12:00:00`
            ).toLocaleDateString(
              "en-US",
              {
                month: "short",
                day: "numeric",
              }
            ),

            high: Math.round(high),

            low: Math.round(low),

            condition:
              midday.weather?.[0]?.main || "",

            description:
              midday.weather?.[0]?.description || "",

            icon:
              midday.weather?.[0]?.icon || "",

            rainChance:
              Math.round(rainChance),
          };
        });

      return Response.json({
        success: true,

        city:
          data.city?.name ||
          city ||
          "Current Location",

        country:
          data.city?.country || "",

        hourly,

        daily,
      });
    }

    // =====================================================
    // CURRENT WEATHER
    // =====================================================

    const currentUrl =
      `https://api.openweathermap.org/data/2.5/weather` +
      `?${locationQuery}` +
      `&appid=${apiKey}` +
      `&units=metric`;

    const response = await fetch(currentUrl, {
      cache: "no-store",
    });

    const data = await response.json();

    // =====================================================
    // ERROR
    // =====================================================

    if (!response.ok) {
      console.error(
        "OpenWeather current error:",
        data
      );

      return Response.json(
        {
          error:
            data?.message ||
            "OpenWeather request failed",
        },
        { status: response.status }
      );
    }

    // =====================================================
    // CURRENT RESPONSE
    // =====================================================

    return Response.json({
      success: true,

      city: data.name,

      country: data.sys?.country || "",

      temperature: Math.round(
        data.main?.temp ?? 0
      ),

      feelsLike: Math.round(
        data.main?.feels_like ?? 0
      ),

      condition:
        data.weather?.[0]?.main || "",

      description:
        data.weather?.[0]?.description || "",

      icon:
        data.weather?.[0]?.icon || "",

      humidity:
        data.main?.humidity ?? 0,

      pressure:
        data.main?.pressure ?? 0,

      wind: Math.round(
        (data.wind?.speed || 0) * 3.6
      ),

      windDirection:
        data.wind?.deg ?? null,

      clouds:
        data.clouds?.all ?? 0,

      visibility:
        data.visibility
          ? Math.round(
              data.visibility / 1000
            )
          : null,

      sunrise:
        data.sys?.sunrise ?? null,

      sunset:
        data.sys?.sunset ?? null,

      latitude:
        data.coord?.lat ?? null,

      longitude:
        data.coord?.lon ?? null,
    });
  } catch (error) {
    console.error(
      "WEATHER API ERROR:",
      error
    );

    return Response.json(
      {
        error:
          error?.message ||
          "Something went wrong",
      },
      { status: 500 }
    );
  }
}