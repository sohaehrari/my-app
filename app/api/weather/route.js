import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;

    console.log(
      "OpenWeather API key exists:",
      Boolean(apiKey)
    );

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "OPENWEATHER_API_KEY is missing",
        },
        { status: 500 }
      );
    }

    const city = "Herat";

    const url =
      `https://api.openweathermap.org/data/2.5/forecast` +
      `?q=${encodeURIComponent(city)}` +
      `&appid=${apiKey}` +
      `&units=metric`;

    console.log("Requesting OpenWeather...");

    const response = await fetch(url, {
      cache: "no-store",
    });

    const data = await response.json();

    console.log("OpenWeather status:", response.status);
    console.log("OpenWeather response:", data);

    if (!response.ok) {
      return NextResponse.json(
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

    return NextResponse.json(data);
  } catch (error) {
    console.error("Weather route error:", error);

    return NextResponse.json(
      {
        error: "Server error while fetching weather",
      },
      { status: 500 }
    );
  }
}
