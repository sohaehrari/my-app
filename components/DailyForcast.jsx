import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"




const forecast = [
    {
      day: "Today",
      date: "Aug 22",
      icon: "☀️",
      condition: "Sunny",
      high: 34,
      low: 24,
    },
    {
      day: "Sun",
      date: "Aug 23",
      icon: "☀️",
      condition: "Sunny",
      high: 35,
      low: 24,
    },
    {
      day: "Mon",
      date: "Aug 24",
      icon: "🌤️",
      condition: "Partly cloudy",
      high: 34,
      low: 23,
    },
    {
      day: "Tue",
      date: "Aug 25",
      icon: "☁️",
      condition: "Cloudy",
      high: 35,
      low: 23,
    },
    {
      day: "Wed",
      date: "Aug 26",
      icon: "☀️",
      condition: "Sunny",
      high: 34,
      low: 22,
    },
    {
      day: "Thu",
      date: "Aug 27",
      icon: "☀️",
      condition: "Sunny",
      high: 36,
      low: 23,
    },
    {
      day: "Fri",
      date: "Aug 28",
      icon: "🌤️",
      condition: "Partly cloudy",
      high: 37,
      low: 24,
    },
  ];

  export default function DailyForcast(){
    return(
        <section className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-6 lg:p-7">
        {/* Header */}
        <div className="mb-5 flex items-start justify-between gap-4 sm:mb-6">
          <div>
            <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl lg:text-2xl">
              Daily Forecast
            </h2>
  
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Weather conditions for the upcoming week
            </p>
          </div>
  
          <button
            type="button"
            className="shrink-0 rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-200 sm:px-4 sm:text-sm"
          >
            <span className="hidden sm:inline">7 Days </span>
            <span>→</span>
          </button>
        </div>
  
        {/* Forecast Cards */}
        <div className="-mx-1 overflow-x-auto px-1 pb-3 scrollbar-thin">
          <div className="flex min-w-max gap-2 sm:grid sm:min-w-0 sm:grid-cols-4 lg:grid-cols-7">
            {forecast.map((item, index) => (
              <div
                key={item.day}
                className={`
                  group min-w-[108px] rounded-xl border p-3 text-center
                  transition-all duration-200
                  sm:min-w-0 sm:p-4
                  ${
                    index === 0
                      ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "border-slate-100 bg-slate-50 text-slate-900 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md"
                  }
                `}
              >
                {/* Day */}
                <p className="text-xs font-bold sm:text-sm">
                  {item.day}
                </p>
  
                <p
                  className={`mt-0.5 text-[10px] sm:text-xs ${
                    index === 0 ? "text-blue-100" : "text-slate-400"
                  }`}
                >
                  {item.date}
                </p>
  
                {/* Icon */}
                <div className="my-3 text-3xl sm:my-4 sm:text-4xl">
                  {item.icon}
                </div>
  
                {/* Condition */}
                <p
                  className={`min-h-[28px] text-[10px] leading-4 sm:text-xs ${
                    index === 0 ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  {item.condition}
                </p>
  
                {/* Temperature */}
                <div className="mt-3 flex items-center justify-center gap-1.5 text-sm sm:text-base">
                  <span className="font-bold">
                    {item.high}°
                  </span>
  
                  <span
                    className={
                      index === 0
                        ? "text-blue-200"
                        : "text-slate-400"
                    }
                  >
                    {item.low}°
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Temperature Chart */}
        <div className="mt-5 border-t border-slate-100 pt-5 sm:mt-7 sm:pt-6">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                Temperature
              </h3>
  
              <p className="mt-0.5 text-[11px] text-slate-400 sm:text-xs">
                High and low temperature
              </p>
            </div>
  
            <span className="text-xs font-medium text-slate-400">
              °C
            </span>
          </div>
  
          <div className="h-[220px] w-full sm:h-[260px] lg:h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={forecast}
                margin={{
                  top: 20,
                  right: 8,
                  left: -20,
                  bottom: 0,
                }}
              >
                <CartesianGrid
                  stroke="#f1f5f9"
                  strokeDasharray="0"
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
                  domain={[20, 40]}
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "#94a3b8",
                    fontSize: 11,
                  }}
                  tickFormatter={(value) => `${value}°`}
                />
  
                <Tooltip
                  cursor={{
                    stroke: "#cbd5e1",
                    strokeDasharray: "4 4",
                  }}
                  contentStyle={{
                    border: "none",
                    borderRadius: "12px",
                    boxShadow:
                      "0 10px 30px rgba(15,23,42,0.12)",
                    fontSize: "12px",
                  }}
                  formatter={(value, name) => [
                    `${value}°C`,
                    name === "high" ? "High" : "Low",
                  ]}
                />
  
                {/* High */}
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
                  activeDot={{
                    r: 6,
                    strokeWidth: 0,
                  }}
                />
  
                {/* Low */}
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
                  activeDot={{
                    r: 6,
                    strokeWidth: 0,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
  
          {/* Legend */}
          <div className="mt-2 flex justify-center gap-5 text-[11px] text-slate-500 sm:text-xs">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              High
            </div>
  
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              Low
            </div>
          </div>
        </div>
      </section>
    )
  }