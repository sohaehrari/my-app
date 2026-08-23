export async function GET(request) {
    try {
      // =====================================================
      // GET PARAMETERS
      // =====================================================
  
      const { searchParams } = new URL(request.url);
  
      const city = searchParams.get("city");
      const type = searchParams.get("type") || "current";
  
      // =====================================================
      // VALIDATE CITY
      // =====================================================
  
      if (!city) {
        return Response.json(
          {
            error: "City is required",
          },
          {
            status: 400,
          }
        );
      }
  
      // =====================================================
      // API KEY
      // =====================================================
  
      const apiKey = process.env.WEATHER_API_KEY;
  
      if (!apiKey) {
        return Response.json(
          {
            error: "WEATHER_API_KEY is missing",
          },
          {
            status: 500,
          }
        );
      }
  
      // =====================================================
      // FORECAST
      // =====================================================
  
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
  
        // ===================================================
        // FORECAST ERROR
        // ===================================================
  
        if (!response.ok) {
          console.error("OpenWeather forecast error:", data);
  
          return Response.json(
            {
              error:
                data.message ||
                "OpenWeather forecast failed",
            },
            {
              status: response.status,
            }
          );
        }
  
        // =====================================================
        // HOURLY FORECAST
        // =====================================================
  
        const hourly = data.list
          .slice(0, 12)
          .map((item) => {
            return {
              time: item.dt,
  
              temperature: Math.round(
                item.main.temp
              ),
  
              feelsLike: Math.round(
                item.main.feels_like
              ),
  
              condition:
                item.weather[0].main,
  
              description:
                item.weather[0].description,
  
              icon:
                item.weather[0].icon,
  
              humidity:
                item.main.humidity,
  
              wind: Math.round(
                item.wind.speed * 3.6
              ),
  
              rainChance: Math.round(
                (item.pop || 0) * 100
              ),
  
              timestamp: item.dt,
            };
          });
  
        // =====================================================
        // DAILY FORECAST
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
  
            // Try to use 12:00 forecast
            const midday =
              items.find((item) =>
                item.dt_txt.includes("12:00:00")
              ) ||
              items[
                Math.floor(items.length / 2)
              ];
  
            const rainChance = Math.max(
              ...items.map(
                (item) =>
                  (item.pop || 0) * 100
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
                midday.weather[0].main,
  
              description:
                midday.weather[0].description,
  
              icon:
                midday.weather[0].icon,
  
              rainChance:
                Math.round(rainChance),
            };
          });
  
        // =====================================================
        // FORECAST RESPONSE
        // =====================================================
  
        return Response.json({
          success: true,
  
          city: data.city.name,
  
          country: data.city.country,
  
          hourly,
  
          daily,
        });
      }
  
      // =====================================================
      // CURRENT WEATHER
      // =====================================================
  
      const currentUrl =
        `https://api.openweathermap.org/data/2.5/weather` +
        `?q=${encodeURIComponent(city)}` +
        `&appid=${apiKey}` +
        `&units=metric`;
  
      const response = await fetch(currentUrl, {
        cache: "no-store",
      });
  
      const data = await response.json();
  
      // =====================================================
      // CURRENT WEATHER ERROR
      // =====================================================
  
      if (!response.ok) {
        console.error(
          "OpenWeather current error:",
          data
        );
  
        return Response.json(
          {
            error:
              data.message ||
              "OpenWeather request failed",
          },
          {
            status: response.status,
          }
        );
      }
  
      // =====================================================
      // CURRENT WEATHER RESPONSE
      // =====================================================
  
      return Response.json({
        success: true,
  
        city: data.name,
  
        country: data.sys.country,
  
        temperature: Math.round(
          data.main.temp
        ),
  
        feelsLike: Math.round(
          data.main.feels_like
        ),
  
        condition:
          data.weather[0].main,
  
        description:
          data.weather[0].description,
  
        icon:
          data.weather[0].icon,
  
        // ===============================
        // WEATHER DETAILS
        // ===============================
  
        humidity:
          data.main.humidity,
  
        pressure:
          data.main.pressure,
  
        wind: Math.round(
          data.wind.speed * 3.6
        ),
  
        windDirection:
          data.wind.deg ?? null,
  
        clouds:
          data.clouds?.all ?? 0,
  
        visibility:
          data.visibility
            ? Math.round(
                data.visibility / 1000
              )
            : null,
  
        sunrise:
          data.sys.sunrise,
  
        sunset:
          data.sys.sunset,
      });
  
    } catch (error) {
      // =====================================================
      // CATCH ERROR
      // =====================================================
  
      console.error(
        "WEATHER API ERROR:",
        error
      );
  
      return Response.json(
        {
          error:
            error.message ||
            "Something went wrong",
        },
        {
          status: 500,
        }
      );
    }
  }
  