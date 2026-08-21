"use client";
import "./globals.css"
import { useState } from "react";
import SearchBar from "@/components/Searchbar";
import CurrentWeather from "@/components/CurrentWeather";

const demoWeather = {
  city: "Kabul",
  country: "Afghanistan",
  date: "Friday, August 21, 2026",
  temperature: 27,
  feelsLike: 28,
  condition: "Sunny",
  icon: "☀️",
  description: "Clear skies with plenty of sunshine.",
  humidity: 32,
  wind: 8,
  pressure: 1015,
  visibility: 10,
};

export default function Home() {
  const [city, setCity] = useState("");

  function handleSearch(searchCity) {
    setCity(searchCity);
  }

  const weather = {
    ...demoWeather,
    city: city || demoWeather.city,
  };

  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-br
        from-blue-50
        via-white
        to-sky-100
        px-4
        py-8
        sm:px-6
        lg:px-8
      "
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Header */}
        <header className="mb-8">
          <p
            className="
              mb-2
              text-xs
              font-bold
              tracking-[0.2em]
              text-blue-600
            "
          >
            WEATHER DASHBOARD
          </p>

          <h1
            className="
              text-4xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            Weather Today
          </h1>

          <p className="mt-3 max-w-xl text-slate-500">
            Check the current weather in any city.
          </p>
        </header>

        {/* Search */}
        <section className="mb-5">
          <SearchBar onSearch={handleSearch} />
        </section>

        {/* Search message */}
        <div className="mb-5 text-sm text-slate-500">
          {city ? (
            <p>
              Showing weather for{" "}
              <span className="font-semibold text-slate-800">
                {city}
              </span>
            </p>
          ) : (
            <p>Search for a city to get started.</p>
          )}
        </div>

        {/* Current Weather */}
        <CurrentWeather weather={weather} />

        {/* Hourly Preview */}
        <section className="mt-8">

          <div className="mb-4">
            <p className="text-xs font-bold tracking-[0.2em] text-blue-600">
              TODAY
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Hourly Preview
            </h2>
          </div>

          {/* Horizontal scroll on mobile */}
          <div
            className="
              flex
              gap-3
              overflow-x-auto
              pb-3
              scrollbar-thin
            "
          >
            {/* Hour 1 */}
            <div
              className="
                min-w-[110px]
                flex-1
                rounded-2xl
                border
                border-slate-100
                bg-white
                p-4
                text-center
                shadow-sm
              "
            >
              <p className="text-sm text-slate-500">
                Now
              </p>

              <div className="my-3 text-3xl">
                ☀️
              </div>

              <p className="text-xl font-bold text-slate-900">
                27°
              </p>
            </div>

            {/* Hour 2 */}
            <div
              className="
                min-w-[110px]
                flex-1
                rounded-2xl
                border
                border-slate-100
                bg-white
                p-4
                text-center
                shadow-sm
              "
            >
              <p className="text-sm text-slate-500">
                12 PM
              </p>

              <div className="my-3 text-3xl">
                ☀️
              </div>

              <p className="text-xl font-bold text-slate-900">
                28°
              </p>
            </div>

            {/* Hour 3 */}
            <div
              className="
                min-w-[110px]
                flex-1
                rounded-2xl
                border
                border-slate-100
                bg-white
                p-4
                text-center
                shadow-sm
              "
            >
              <p className="text-sm text-slate-500">
                1 PM
              </p>

              <div className="my-3 text-3xl">
                ☀️
              </div>

              <p className="text-xl font-bold text-slate-900">
                29°
              </p>
            </div>

            {/* Hour 4 */}
            <div
              className="
                min-w-[110px]
                flex-1
                rounded-2xl
                border
                border-slate-100
                bg-white
                p-4
                text-center
                shadow-sm
              "
            >
              <p className="text-sm text-slate-500">
                2 PM
              </p>

              <div className="my-3 text-3xl">
                🌤️
              </div>

              <p className="text-xl font-bold text-slate-900">
                30°
              </p>
            </div>

            {/* Hour 5 */}
            <div
              className="
                min-w-[110px]
                flex-1
                rounded-2xl
                border
                border-slate-100
                bg-white
                p-4
                text-center
                shadow-sm
              "
            >
              <p className="text-sm text-slate-500">
                3 PM
              </p>

              <div className="my-3 text-3xl">
                🌤️
              </div>

              <p className="text-xl font-bold text-slate-900">
                30°
              </p>
            </div>

            {/* Hour 6 */}
            <div
              className="
                min-w-[110px]
                flex-1
                rounded-2xl
                border
                border-slate-100
                bg-white
                p-4
                text-center
                shadow-sm
              "
            >
              <p className="text-sm text-slate-500">
                4 PM
              </p>

              <div className="my-3 text-3xl">
                ☀️
              </div>

              <p className="text-xl font-bold text-slate-900">
                29°
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center">
          <p className="text-sm text-slate-400">
            Weather Dashboard • Next.js + React + Tailwind CSS
          </p>
        </footer>

      </div>
    </main>
  );
}
