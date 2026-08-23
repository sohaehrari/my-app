"use client";

import "./globals.css";
import { useState } from "react";

import SearchBar from "@/components/Searchbar";
import CurrentWeather from "@/components/CurrentWeather";
import HourlyForcast from "@/components/HourlyForcast";
import DailyForcast from "@/components/DailyForcast";
import WeatherDetails from "@/components/WeatherDetails"

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(city) {
    if (!city.trim()) return;

    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const encodedCity = encodeURIComponent(
        city.trim()
      );

      // ==========================================
      // 1. CURRENT WEATHER
      // ==========================================

      const currentResponse = await fetch(
        `/api/weather?city=${encodedCity}`
      );

      const currentData =
        await currentResponse.json();

      if (!currentResponse.ok) {
        throw new Error(
          currentData.error ||
            "Unable to get current weather"
        );
      }

      // ==========================================
      // 2. HOURLY + DAILY FORECAST
      // ==========================================

      const forecastResponse = await fetch(
        `/api/weather?city=${encodedCity}&type=forecast`
      );

      const forecastData =
        await forecastResponse.json();

      if (!forecastResponse.ok) {
        throw new Error(
          forecastData.error ||
            "Unable to get weather forecast"
        );
      }

      // ==========================================
      // 3. COMBINE THE DATA
      // ==========================================

      const completeWeather = {
        ...currentData,

        hourly: forecastData.hourly || [],

        daily: forecastData.daily || [],
      };

      console.log(
        "COMPLETE WEATHER:",
        completeWeather
      );

      console.log(
        "HOURLY:",
        completeWeather.hourly
      );

      console.log(
        "DAILY:",
        completeWeather.daily
      );

      setWeather(completeWeather);
    } catch (err) {
      console.error("WEATHER ERROR:", err);

      setWeather(null);

      setError(
        err.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#070b14] px-4 py-6 text-white sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-7xl">

        {/* ==========================================
            HEADER
        ========================================== */}

        <header className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">

          <div>
            {/* Logo / Label */}
            <div className="mb-4 flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/10 ring-1 ring-cyan-300/20">
                <span className="text-xl">
                  ◉
                </span>
              </div>

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Weather
              </span>
            </div>

            {/* Title */}
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Weather, wherever you are.
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Search any city in the world and get
              current weather conditions, hourly
              forecasts, and daily forecasts.
            </p>
          </div>

          {/* Desktop badge */}
          <div className="hidden rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 lg:block">

            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Live weather
            </p>

            <p className="mt-1 text-sm font-medium text-slate-300">
              Worldwide coverage
            </p>

          </div>
        </header>

        {/* ==========================================
            SEARCH
        ========================================== */}

        <section className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </section>

        {/* ==========================================
            LOADING
        ========================================== */}

        {loading && (
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center shadow-2xl shadow-black/20">

            <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-2 border-slate-700 border-t-cyan-400" />

            <h2 className="text-lg font-semibold text-white">
              Getting weather
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Checking the latest conditions and forecast...
            </p>

          </div>
        )}

        {/* ==========================================
            ERROR
        ========================================== */}

        {!loading && error && (
          <div className="rounded-[2rem] border border-red-400/20 bg-red-400/[0.06] p-8 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-400/10 text-2xl text-red-300">
              !
            </div>

            <h2 className="mt-5 text-xl font-semibold text-white">
              Weather unavailable
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
              {error}
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Try another city.
            </p>

          </div>
        )}

        {/* ==========================================
            EMPTY STATE
        ========================================== */}

        {!loading &&
          !error &&
          !weather && (
            <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 shadow-2xl shadow-black/20 sm:p-12 lg:p-16">

              <div className="mx-auto max-w-2xl text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-300/10 bg-cyan-300/[0.06] text-4xl">
                  🌍
                </div>

                <h2 className="mt-7 text-2xl font-bold sm:text-3xl">
                  Explore the weather
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                  Search for London, Tokyo, New York,
                  Dubai, Kabul or any other city around
                  the world.
                </p>

                {/* Quick cities */}
                <div className="mt-8 flex flex-wrap justify-center gap-2">

                  {[
                    "London",
                    "Tokyo",
                    "Dubai",
                    "New York",
                    "Kabul",
                    "Herat",
                  ].map((city) => (
                    <button
                      key={city}
                      onClick={() =>
                        handleSearch(city)
                      }
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-200"
                    >
                      {city}
                    </button>
                  ))}

                </div>
              </div>

            </section>
          )}

        {/* ==========================================
            WEATHER RESULTS
        ========================================== */}

        {!loading &&
          !error &&
          weather && (
            <div className="space-y-5">

              {/* Current weather */}
              <CurrentWeather
                weather={weather}
              />

              {/* Hourly forecast */}
              <HourlyForcast
                hourly={weather.hourly}
              />

              {/* Daily forecast */}
              <DailyForcast
                daily={weather.daily}
              />
              <WeatherDetails weather={weather}/>

            </div>
          )}

        {/* ==========================================
            FOOTER
        ========================================== */}

        <footer className="mt-10 border-t border-white/5 pt-6 text-center">

          <p className="text-xs text-slate-600">
            Weather Dashboard · Built with Next.js,
            React and Tailwind CSS
          </p>

        </footer>

      </div>
    </main>
  );
}
