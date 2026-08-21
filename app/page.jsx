

import './globals.css'
import { demoWeather } from "@/lib/weather";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">

        {/* Header */}
        <header className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-blue-400">
              WEATHER DASHBOARD
            </p>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Good morning 👋
            </h1>

            <p className="mt-1 text-sm text-slate-400 sm:text-base">
              Check the weather and plan your day.
            </p>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl">
            ☀️
          </div>
        </header>

        {/* Search */}
        <section className="mb-6">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400">
                🔍
              </span>

              <input
                type="text"
                placeholder="Search for a city..."
                className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-white outline-none backdrop-blur-md transition placeholder:text-slate-500 focus:border-blue-500 focus:bg-white/10"
              />
            </div>

            <button className="h-14 rounded-2xl bg-blue-600 px-7 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 active:scale-[0.98] sm:w-auto">
              Search
            </button>
          </div>
        </section>

        {/* Main Weather Card */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 p-6 shadow-2xl shadow-blue-950/30 sm:p-8 lg:p-10">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative">

            {/* Location */}
            <div className="flex items-center gap-2 text-blue-100">
              <span>📍</span>

              <p className="text-sm font-medium sm:text-base">
                {demoWeather.city}, {demoWeather.country}
              </p>
            </div>

            {/* Weather content */}
            <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-center">

              {/* Temperature */}
              <div>
                <p className="text-sm font-medium text-blue-100">
                  Current weather
                </p>

                <div className="mt-2 flex items-start">
                  <span className="text-7xl font-bold tracking-tighter sm:text-8xl">
                    {demoWeather.current.temperature}
                  </span>

                  <span className="mt-3 text-3xl font-medium text-blue-100 sm:text-4xl">
                    °C
                  </span>
                </div>

                <p className="mt-2 text-xl font-semibold sm:text-2xl">
                  {demoWeather.current.condition}
                </p>

                <p className="mt-1 text-sm text-blue-100">
                  {demoWeather.current.description}
                </p>
              </div>

              {/* Weather Icon */}
              <div className="flex items-center md:pr-8">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white/10 text-7xl shadow-inner backdrop-blur-sm sm:h-40 sm:w-40 sm:text-8xl">
                  {demoWeather.current.icon}
                </div>
              </div>
            </div>

            {/* Feels Like */}
            <div className="mt-8 border-t border-white/15 pt-5">
              <p className="text-sm text-blue-100">
                Feels like{" "}
                <span className="font-semibold text-white">
                  {demoWeather.current.feelsLike}°C
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Weather Details */}
        <section className="mt-6">
          <h2 className="mb-4 text-lg font-semibold">
            Weather Details
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">

            {/* Humidity */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:bg-white/10 sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xl">💧</span>
                <span className="text-xs text-slate-500">
                  HUMIDITY
                </span>
              </div>

              <p className="text-xl font-bold sm:text-2xl">
                {demoWeather.details.humidity}%
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Relative humidity
              </p>
            </div>

            {/* Wind */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:bg-white/10 sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xl">💨</span>
                <span className="text-xs text-slate-500">
                  WIND
                </span>
              </div>

              <p className="text-xl font-bold sm:text-2xl">
                {demoWeather.details.wind}
                <span className="ml-1 text-sm font-medium text-slate-400">
                  km/h
                </span>
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Wind speed
              </p>
            </div>

            {/* Pressure */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:bg-white/10 sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xl">🌡️</span>
                <span className="text-xs text-slate-500">
                  PRESSURE
                </span>
              </div>

              <p className="text-xl font-bold sm:text-2xl">
                {demoWeather.details.pressure}
                <span className="ml-1 text-sm font-medium text-slate-400">
                  hPa
                </span>
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Atmospheric pressure
              </p>
            </div>

            {/* Visibility */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:bg-white/10 sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xl">👁️</span>
                <span className="text-xs text-slate-500">
                  VISIBILITY
                </span>
              </div>

              <p className="text-xl font-bold sm:text-2xl">
                {demoWeather.details.visibility}
                <span className="ml-1 text-sm font-medium text-slate-400">
                  km
                </span>
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Visibility range
              </p>
            </div>

          </div>
        </section>

        {/* Hourly Forecast */}
        <section className="mt-8">

          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">
                Hourly Forecast
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Today's weather
              </p>
            </div>

            <button className="text-sm font-medium text-blue-400 hover:text-blue-300">
              View all
            </button>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
            {demoWeather.hourly.map((hour) => (
              <div
                key={hour.time}
                className="min-w-[110px] flex-1 rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm transition hover:border-blue-500/40 hover:bg-white/10"
              >
                <p className="text-xs font-medium text-slate-400">
                  {hour.time}
                </p>

                <div className="my-4 text-3xl">
                  {hour.icon}
                </div>

                <p className="text-lg font-bold">
                  {hour.temperature}°
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {hour.condition}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-xs text-slate-600">
          Weather Dashboard · Built with Next.js & Tailwind CSS
        </footer>

      </div>
    </main>
  );
}
