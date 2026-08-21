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
  
      console.log("API key exists:", !!apiKey);
      console.log("City:", city);
  
      if (!apiKey) {
        return Response.json(
          { error: "API key is missing" },
          { status: 500 }
        );
      }
  
      const url =
        `https://api.openweathermap.org/data/2.5/weather` +
        `?q=${encodeURIComponent(city)}` +
        `&appid=${apiKey}` +
        `&units=metric`;
  
      const response = await fetch(url);
  
      console.log("OpenWeather status:", response.status);
  
      const data = await response.json();
  
      console.log("OpenWeather response:", data);
  
      if (!response.ok) {
        return Response.json(
          {
            error: data.message || "OpenWeather request failed",
          },
          {
            status: response.status,
          }
        );
      }
  
      const weather = {
        city: data.name,
        country: data.sys.country,
        temperature: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        condition: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        humidity: data.main.humidity,
        wind: Math.round(data.wind.speed * 3.6),
        pressure: data.main.pressure,
        visibility: Math.round(data.visibility / 1000),
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
  