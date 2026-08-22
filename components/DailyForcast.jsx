"use client";

import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function formatDay(dateString, index) {
  if (index === 0) return "Today";

  return new Date(
    `${dateString}T12:00:00`
  ).toLocaleDateString("en-US", {
    weekday: "short",
  });
}

function formatDate(dateString) {
  return new Date(
    `${dateString}T12:00:00`
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function getWeatherIcon(icon) {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}

export default function DailyForecast() {
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadForecast() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/weather");

        if (!response.ok) {
          throw new Error(
            "Failed to load weather forecast"
          );
        }

        const data = await response.json();

        setForecast(data.forecast || []);
        setCity(data.city || "");
        setCountry(data.country || "");
      } catch (error) {
        console.error(error);
        setError(
          "Unable to load the weather forecast."
        );
      } finally {
        setLoading(false);
      }
    }

    loadForecast();
  }, []);

  /*
   * Loading
   */
  if (loading) {
    return (
      <section className="w-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-7">
        <div className="animate-pulse">
          <div className="h-6 w-40 rounded bg-slate-200" />

          <div className="mt-2 h-4 w-64 rounded bg-slate-100" />

          <div className="mt-7 flex gap-3 overflow-hidden">
            {Array.from({ length: 5 }).map(
              (_, index) => (
                <div
                  key={index}
                  className="h-40 min-w-[120px] rounded-2xl bg-slate-100"
                />
              )
            )}
          </div>

          <div className="mt-7 h-[250px] rounded-2xl bg-slate-100" />
        </div>
      </section>
    );
  }

  /*
   * Error
   */
  if (error) {
    return (
      <section className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
            ⚠️
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Forecast unavailable
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  /*
   * Chart data
   */
  const chartData = forecast.map((item, index) => ({
    day: formatDay(item.date, index),
    high: item.high,
    low: item.low,
  }));

  return (
    <section className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl">

      {/* Header */}
      <div className="flex items-start justify-between gap-4 p-5 sm:p-6 lg:p-7">

        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Daily Forecast
            </h2>

            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-600">
              Live
            </span>
          </div>

          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            {city}, {country}
          </p>
        </div>

        <div className="hidden rounded-xl bg-slate-50 px-3 py-2 text-xs font-medium text-slate-500 sm:block">
          Next {forecast.length} days
        </div>
      </div>

      {/* Forecast cards */}
      <div className="border-y border-slate-100 bg-slate-50/50 px-5 py-4 sm:px-6 lg:px-7">

        <div className="-mx-2 overflow-x-auto px-2 pb-2 scrollbar-thin">
          <div className="flex min-w-max gap-3 lg:grid lg:min-w-0 lg:grid-cols-5">

            {forecast.map((item, index) => (
              <div
                key={item.date}
                className={`
                  min-w-[120px] rounded-2xl border p-4
                  text-center transition-all duration-200
                  sm:min-w-[135px]
                  lg:min-w-0
                  ${
                    index === 0
                      ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                  }
                `}
              >
                <p className="text-sm font-bold">
                  {formatDay(item.date, index)}
                </p>

                <p
                  className={`mt-1 text-[11px] ${
                    index === 0
                      ? "text-blue-100"
                      : "text-slate-400"
                  }`}
                >
                  {formatDate(item.date)}
                </p>

                <img
                  src={getWeatherIcon(item.icon)}
                  alt={item.description}
                  className="mx-auto my-2 h-14 w-14 sm:h-16 sm:w-16"
                />

                <p
                  className={`truncate text-xs capitalize ${
                    index === 0
                      ? "text-blue-100"
                      : "text-slate-500"
                  }`}
                >
                  {item.description}
                </p>

                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="text-lg font-bold">
                    {item.high}°
                  </span>

                  <span
                    className={`text-sm ${
                      index === 0
                        ? "text-blue-200"
                        : "text-slate-400"
                    }`}
                  >
                    {item.low}°
                  </span>
                </div>

                {item.rainChance > 0 && (
                  <div
                    className={`mt-2 text-[10px] ${
                      index === 0
                        ? "text-blue-100"
                        : "text-sky-500"
                    }`}
                  >
                    💧 {item.rainChance}%
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="p-5 sm:p-6 lg:p-7">

        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
              Temperature Trend
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Daily high and low temperatures
            </p>
          </div>

          <span className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-500">
            °C
          </span>
        </div>

        <div className="h-[230px] w-full sm:h-[280px] lg:h-[300px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <LineChart
              data={chartData}
              margin={{
                top: 15,
                right: 5,
                left: -20,
                bottom: 5,
              }}
            >
              <CartesianGrid
                stroke="#f1f5f9"
                vertical={false}
              />

              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#64748b",
                  fontSize: 11,
                }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#94a3b8",
                  fontSize: 11,
                }}
                tickFormatter={(value) =>
                  `${value}°`
                }
              />

              <Tooltip
                cursor={{
                  stroke: "#cbd5e1",
                  strokeDasharray: "4 4",
                }}
                contentStyle={{
                  border: "none",
                  borderRadius: "14px",
                  boxShadow:
                    "0 10px 30px rgba(15,23,42,.12)",
                  fontSize: "12px",
                }}
                formatter={(value, name) => [
                  `${value}°C`,
                  name === "high"
                    ? "High"
                    : "Low",
                ]}
              />

              <Line
                type="monotone"
                dataKey="high"
                stroke="#f97316"
                strokeWidth={3}
                dot={{
                  r: 4,
                  fill: "#f97316",
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
                activeDot={{ r: 6 }}
              />

              <Line
                type="monotone"
                dataKey="low"
                stroke="#38bdf8"
                strokeWidth={3}
                dot={{
                  r: 4,
                  fill: "#38bdf8",
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="mt-4 flex justify-center gap-5 text-xs text-slate-500">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            High
          </span>

          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            Low
          </span>
        </div>
      </div>
    </section>
  );
}
