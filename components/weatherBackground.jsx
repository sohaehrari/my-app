"use client";

export default function WeatherBackground({ condition, icon }) {
  const weather = condition?.toLowerCase() || "";

  const isRain =
    weather.includes("rain") ||
    weather.includes("drizzle");

  const isSnow = weather.includes("snow");

  const isClear = weather.includes("clear");

  const isClouds = weather.includes("cloud");

  const isStorm =
    weather.includes("thunderstorm") ||
    weather.includes("storm");

  const isNight = icon?.endsWith("n");

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

      {/* =====================================
          BASE WEATHER ATMOSPHERE
      ===================================== */}

      <div
        className={`
          absolute inset-0 transition-colors duration-1000

          ${
            isNight
              ? "bg-[#020617]"
              : isRain
              ? "bg-[#061525]"
              : isSnow
              ? "bg-[#0b1724]"
              : isStorm
              ? "bg-[#030712]"
              : isClouds
              ? "bg-[#0b1320]"
              : isClear
              ? "bg-[#101522]"
              : "bg-[#070b14]"
          }
        `}
      />

      {/* =====================================
          CLEAR DAY
      ===================================== */}

      {isClear && !isNight && (
        <>
          {/* Whole screen sunlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(250,204,21,0.16),transparent_35%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(251,191,36,0.06),transparent_40%)]" />

          {/* Sun */}
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-yellow-300/20 blur-3xl" />

          <div className="absolute right-10 top-10 h-32 w-32 animate-pulse rounded-full bg-yellow-300/30 shadow-[0_0_120px_40px_rgba(253,224,71,0.15)]" />
        </>
      )}

      {/* =====================================
          CLEAR NIGHT
      ===================================== */}

      {isClear && isNight && (
        <>
          {/* Whole night atmosphere */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(148,163,184,0.12),transparent_35%)]" />

          {/* Moon */}
          <div className="absolute right-16 top-16 h-28 w-28 rounded-full bg-slate-100/20 shadow-[0_0_100px_30px_rgba(226,232,240,0.12)]" />

          {/* Stars across whole screen */}
          {Array.from({ length: 80 }).map((_, index) => (
            <span
              key={index}
              className="absolute h-1 w-1 animate-pulse rounded-full bg-white/60"
              style={{
                left: `${(index * 37) % 100}%`,
                top: `${(index * 23) % 90}%`,
                animationDelay: `${(index % 10) * 300}ms`,
              }}
            />
          ))}
        </>
      )}

      {/* =====================================
          CLOUDY
      ===================================== */}

      {isClouds && (
        <>
          {/* Cloud atmosphere over whole page */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(148,163,184,0.08),transparent_50%)]" />

          {/* Moving clouds */}
          <div className="absolute left-[-300px] top-[10%] h-32 w-[450px] animate-[cloudMove_30s_linear_infinite] rounded-full bg-slate-300/[0.08] blur-2xl" />

          <div className="absolute left-[-400px] top-[35%] h-40 w-[550px] animate-[cloudMove_40s_linear_infinite] rounded-full bg-slate-300/[0.06] blur-3xl" />

          <div className="absolute left-[-300px] top-[65%] h-32 w-[450px] animate-[cloudMove_35s_linear_infinite] rounded-full bg-slate-400/[0.05] blur-2xl" />
        </>
      )}

      {/* =====================================
          RAIN
      ===================================== */}

      {isRain && (
        <>
          {/* Whole page rainy atmosphere */}
          <div className="absolute inset-0 bg-blue-950/20" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_50%)]" />

          {/* Rain across entire viewport */}
          {Array.from({ length: 140 }).map((_, index) => (
            <span
              key={index}
              className="absolute -top-20 h-12 w-[2px] rotate-[15deg] rounded-full bg-cyan-300/40 animate-[rainFall_0.65s_linear_infinite]"
              style={{
                left: `${(index * 47) % 100}%`,
                animationDelay: `${(index % 20) * 70}ms`,
              }}
            />
          ))}

          {/* Rain mist */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.03] to-blue-950/10" />
        </>
      )}

      {/* =====================================
          SNOW
      ===================================== */}

      {isSnow && (
        <>
          {/* Whole page snow atmosphere */}
          <div className="absolute inset-0 bg-sky-200/[0.03]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_50%)]" />

          {/* Snow across entire viewport */}
          {Array.from({ length: 100 }).map((_, index) => (
            <span
              key={index}
              className="absolute -top-10 text-white/60 animate-[snowFall_7s_linear_infinite]"
              style={{
                left: `${(index * 41) % 100}%`,
                fontSize: `${8 + (index % 12)}px`,
                animationDelay: `${(index % 20) * 300}ms`,
              }}
            >
              ❄
            </span>
          ))}
        </>
      )}

      {/* =====================================
          THUNDERSTORM
      ===================================== */}

      {isStorm && (
        <>
          {/* Dark whole page */}
          <div className="absolute inset-0 bg-slate-950/40" />

          {/* Lightning flash across entire page */}
          <div className="absolute inset-0 animate-[lightning_6s_ease-in-out_infinite] bg-white/[0.15]" />

          {/* Storm rain */}
          {Array.from({ length: 120 }).map((_, index) => (
            <span
              key={index}
              className="absolute -top-20 h-12 w-[2px] rotate-[15deg] bg-slate-300/35 animate-[rainFall_0.55s_linear_infinite]"
              style={{
                left: `${(index * 43) % 100}%`,
                animationDelay: `${(index % 15) * 70}ms`,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}
