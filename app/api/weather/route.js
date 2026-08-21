export async function GET(){
    try{
        const { searchParams } = new URL(request.url);

        const city = searchParams.get("city")
    if(!city){
        return Response.json(
            {
      error:"city is required"
            },{
status:"400"
            }
        )
    };


    const apikey=process.env.WEATHER_API_KEY

    if(!apikey){
        return Response.json(
            {
                error:"apikey is missing"
            },
            {
            status:"500"
            }

        );
    }

        const url =
        `https://api.openweathermap.org/data/2.5/weather` +
        `?q=${encodeURIComponent(city)}` +
        `&appid=${apiKey}` +
        `&units=metric`;
        const response= await fetch(url)
  
        if (!response.ok) {
            if (response.status === 404) {
              return Response.json(
                {
                  error: "City not found",
                },
                {
                  status: 404,
                }
              );
            }
      
            return Response.json(
              {
                error: "Weather service failed",
              },
              {
                status: response.status,
              }
            );
          }
          const data=await response.json();
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
          console.error(error);
      
          return Response.json(
            {
              error: "Something went wrong",
            },
            {
              status: 500,
            }
          );
        }
    }
      
