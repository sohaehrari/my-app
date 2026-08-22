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

const getIcon = (icon) =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;

export default function DailyForecast({ city = "Herat" }) {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getForecast() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `/api/weather?city=${encodeURIComponent(
            city
          )}&type=forecast`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || "Failed to load forecast"
          );
        }

        setForecast(data.daily || []);
      } catch (error) {
        console.error("Daily forecast error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getForecast();
  }, [city]);

  if (loading) {
    return (
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="animate-pulse">
          <div className="h-6 w-44 rounded bg-slate-200" />

          <div className="mt-2 h-4 w-64 rounded bg-slate-100" />

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="h-40 rounded-2xl bg-slate-100"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="rounded-3xl border border-red-100 bg-white p-6">
        <p className="font-medium text-red-500">
          {error}
        </p>
      </section>
    );
  }

  const chartData = forecast.map((item) => ({
    day: item.day,
    high: item.high,
    low: item.low,
  }));

  return (
    <section className="w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between p-5 sm:p-6 lg:p-7">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Daily Forecast
            </h2>

            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-600">
              Live
            </span>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Real OpenWeather forecast
          </p>
        </div>

        <div className="hidden rounded-xl bg-slate-50 px-3 py-2 text-xs font-medium text-slate-500 sm:block">
          {forecast.length} days
        </div>
      </div>

      {/* Cards */}
      <div className="border-y border-slate-100 bg-slate-50/50 p-4 sm:p-6">

        <div className="overflow-x-auto pb-2">
          <div className="flex gap-3 lg:grid lg:grid-cols-5">

            {forecast.map((item, index) => (
              <div
                key={item.date}
                className={`
                  min-w-[130px] rounded-2xl border p-4 text-center
                  transition-all
                  sm:min-w-[145px]
                  lg:min-w-0
                  ${
                    index === 0
                      ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "border-slate-200 bg-white hover:-translate-y-1 hover:shadow-md"
                  }
                `}
              >
                <p className="text-sm font-bold">
                  {item.day}
                </p>

                <p
                  className={`mt-1 text-xs ${
                    index === 0
                      ? "text-blue-100"
                      : "text-slate-400"
                  }`}
                >
                  {item.dateLabel}
                </p>

                <img
                  src={getIcon(item.icon)}
                  alt={item.description}
                  className="mx-auto my-2 h-16 w-16"
                />

                <p
                  className={`text-xs capitalize ${
                    index === 0
                      ? "text-blue-100"
                      : "text-slate-500"
                  }`}
                >
                  {item.description}
                </p>

                <div className="mt-3 flex justify-center gap-2">
                  <span className="text-xl font-bold">
                    {item.high}°
                  </span>

                  <span
                    className={`pt-1 text-sm ${
                      index === 0
                        ? "text-blue-200"
                        : "text-slate-400"
                    }`}
                  >
                    {item.low}°
                  </span>
                </div>

                {item.rainChance > 0 && (
                  <p
                    className={`mt-2 text-xs ${
                      index === 0
                        ? "text-blue-100"
                        : "text-sky-500"
                    }`}
                  >
                    💧 {item.rainChance}%
                  </p>
                )}
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="p-5 sm:p-6 lg:p-7">

        <div className="mb-5">
          <h3 className="text-base font-semibold text-slate-900">
            Temperature Trend
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            Daily high and low temperatures
          </p>
        </div>

        <div className="h-[240px] w-full sm:h-[280px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <LineChart
              data={chartData}
              margin={{
                top: 10,
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
                contentStyle={{
                  border: "none",
                  borderRadius: "14px",
                  boxShadow:
                    "0 10px 30px rgba(15,23,42,.12)",
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
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="mt-4 flex justify-center gap-6 text-xs text-slate-500">
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
