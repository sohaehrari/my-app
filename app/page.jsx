"use client";

import { useState } from "react";

import SearchBar from "@/components/Searchbar";
import CurrentWeather from "@/components/CurrentWeather";
import HourlyForcast from "@/components/HourlyForcast";
import DailyForcast from "@/components/DailyForcast";
import WeatherDetails from "@/components/WeatherDetails";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(city) {
    if (!city?.trim()) return;

    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const encodedCity = encodeURIComponent(city.trim());

      // ==========================================
      // 1. CURRENT WEATHER
      // ==========================================

      const currentResponse = await fetch(
        `/api/weather?city=${encodedCity}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const currentData = await currentResponse.json();

      if (!currentResponse.ok) {
        throw new Error(
          currentData.error || "Unable to get current weather."
        );
      }

      // ==========================================
      // 2. HOURLY + DAILY FORECAST
      // ==========================================

      const forecastResponse = await fetch(
        `/api/weather?city=${encodedCity}&type=forecast`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const forecastData = await forecastResponse.json();

      if (!forecastResponse.ok) {
        throw new Error(
          forecastData.error || "Unable to get weather forecast."
        );
      }

      // ==========================================
      // 3. COMBINE WEATHER DATA
      // ==========================================

      const completeWeather = {
        ...currentData,
        hourly: Array.isArray(forecastData.hourly)
          ? forecastData.hourly
          : [],
        daily: Array.isArray(forecastData.daily)
          ? forecastData.daily
          : [],
      };

      console.log("COMPLETE WEATHER:", completeWeather);

      setWeather(completeWeather);
    } catch (err) {
      console.error("WEATHER ERROR:", err);

      setWeather(null);

      setError(
        err?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#070b14] px-4 pb-8 pt-24 text-white sm:px-6 lg:px-10 lg:pb-12 lg:pt-28">
      <div className="mx-auto max-w-7xl">

        {/* ==========================================
            HERO HEADER
        ========================================== */}

        <header className="mb-12 flex flex-col gap-8 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">

            {/* Small Label */}
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10">
                <span className="text-lg text-cyan-300">
                  ◉
                </span>
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Weather Dashboard
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Weather,
              <span className="text-cyan-300">
                {" "}wherever you are.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Search any city in the world and explore current
              weather conditions, hourly forecasts, and daily
              forecasts in one beautiful dashboard.
            </p>
          </div>

          {/* Desktop Status Card */}
          <div className="hidden min-w-[190px] rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 lg:block">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Live weather
              </p>
            </div>

            <p className="mt-2 text-sm font-medium text-slate-300">
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
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center shadow-2xl shadow-black/20 sm:p-14">
            <div className="mx-auto mb-5 h-11 w-11 animate-spin rounded-full border-2 border-slate-700 border-t-cyan-400" />

            <h2 className="text-lg font-semibold text-white">
              Getting your weather
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Checking the latest conditions and forecast...
            </p>
          </section>
        )}

        {/* ==========================================
            ERROR
        ========================================== */}

        {!loading && error && (
          <section className="rounded-[2rem] border border-red-400/20 bg-red-400/[0.06] p-8 text-center shadow-xl shadow-black/10 sm:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-red-300/10 bg-red-400/10 text-2xl font-bold text-red-300">
              !
            </div>

            <h2 className="mt-5 text-xl font-semibold text-white">
              Weather unavailable
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
              {error}
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Try searching for another city.
            </p>
          </section>
        )}

        {/* ==========================================
            EMPTY STATE
        ========================================== */}

        {!loading && !error && !weather && (
          <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.02] p-8 shadow-2xl shadow-black/20 sm:p-12 lg:p-16">
            <div className="mx-auto max-w-2xl text-center">

              {/* Globe */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-300/10 bg-cyan-300/[0.06] text-4xl shadow-xl shadow-cyan-950/10">
                🌍
              </div>

              <h2 className="mt-7 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Explore the weather
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                Search for London, Tokyo, New York, Dubai,
                Kabul, Herat, or any other city around the world.
              </p>

              {/* Quick Cities */}
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
                    type="button"
                    onClick={() => handleSearch(city)}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition duration-200 hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-200 active:scale-95"
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

        {!loading && !error && weather && (
          <section className="space-y-5">

            {/* Current Weather */}
            <CurrentWeather weather={weather} />

            {/* Hourly Forecast */}
            <HourlyForcast hourly={weather.hourly} />

            {/* Daily Forecast */}
            <DailyForcast daily={weather.daily} />

            {/* Weather Details */}
            <WeatherDetails weather={weather} />
          </section>
        )}

        {/* ==========================================
            FOOTER
        ========================================== */}

        <footer className="mt-12 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-slate-600">
            Weather Dashboard · Built with Next.js, React and
            Tailwind CSS
          </p>
        </footer>
      </div>
    </main>
  );
}
