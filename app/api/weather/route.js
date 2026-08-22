export async function GET(request) {
    try {
      const { searchParams } = new URL(request.url);
      const city = searchParams.get("city");
  
      if (!city) {
        return Response.json(
          { error: "City is required" },
          { status: 400 }
        );
      }
  
      const apiKey = process.env.WEATHER_API_KEY;
  
      if (!apiKey) {
        return Response.json(
          { error: "API key is missing" },
          { status: 500 }
        );
      }
  
      const currentUrl =
        `https://api.openweathermap.org/data/2.5/weather` +
        `?q=${encodeURIComponent(city)}` +
        `&appid=${apiKey}` +
        `&units=metric`;
  
      const currentResponse = await fetch(currentUrl);
      const currentData = await currentResponse.json();
  
      if (!currentResponse.ok) {
        return Response.json(
          {
            error: currentData.message || "Unable to find city",
          },
          {
            status: currentResponse.status,
          }
        );
      }
  
      const { lat, lon } = currentData.coord;
  
      const forecastUrl =
        `https://api.openweathermap.org/data/2.5/forecast` +
        `?lat=${lat}` +
        `&lon=${lon}` +
        `&appid=${apiKey}` +
        `&units=metric`;
  
      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();
  
      if (!forecastResponse.ok) {
        return Response.json(
          {
            error: forecastData.message || "Unable to get forecast",
          },
          {
            status: forecastResponse.status,
          }
        );
      }
  
      const weather = {
        city: currentData.name,
        country: currentData.sys.country,
        temperature: Math.round(currentData.main.temp),
        feelsLike: Math.round(currentData.main.feels_like),
        condition: currentData.weather[0].main,
        description: currentData.weather[0].description,
        icon: currentData.weather[0].icon,
        humidity: currentData.main.humidity,
        wind: Math.round(currentData.wind.speed * 3.6),
        pressure: currentData.main.pressure,
        visibility: Math.round(currentData.visibility / 1000),
  
        hourly: forecastData.list.slice(0, 8).map((item) => ({
          time: item.dt * 1000,
          temperature: Math.round(item.main.temp),
          condition: item.weather[0].main,
          icon: item.weather[0].icon,
          precipitation: Math.round((item.pop || 0) * 100),
        })),
      };
  
      return Response.json(weather);
    } catch (error) {
      console.error("ERROR:", error);
  
      return Response.json(
        {
          error: error.message || "Something went wrong",
        },
        {
          status: 500,
        }
      );
    }
  }
  