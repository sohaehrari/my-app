import { useMemo } from "react";

export default function WeatherBackground({ condition }) {
  const weather = condition?.toLowerCase() || "";

  const particles = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 0.5 + Math.random() * 0.8,
        size: 2 + Math.random() * 3,
      })),
    []
  );

  const isRain =
    weather.includes("rain") || weather.includes("drizzle");

  const isSnow = weather.includes("snow");

  const isClear =
    weather.includes("clear") || weather.includes("sunny");

  const isCloudy = weather.includes("cloud");

  const isStorm = weather.includes("thunderstorm");

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

      {/* =========================
          ☀️ CLEAR / SUNNY
      ========================= */}
      {isClear && (
        <>
          {/* Sun */}
          <div
            className="
              absolute -right-20 -top-20
              h-64 w-64 rounded-full
              bg-amber-300/20
              blur-2xl
              animate-pulse
            "
          />

          <div
            className="
              absolute right-4 top-4
              h-40 w-40 rounded-full
              bg-amber-300/20
              shadow-[0_0_80px_rgba(251,191,36,0.35)]
              animate-[pulse_4s_ease-in-out_infinite]
            "
          />

          {/* Soft light */}
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_90%_10%,rgba(251,191,36,0.12),transparent_35%)]
            "
          />
        </>
      )}

      {/* =========================
          ☁️ CLOUDY
      ========================= */}
      {isCloudy && (
        <>
          <div
            className="
              absolute -left-60 top-[12%]
              h-24 w-72
              rounded-full
              bg-slate-300/5
              blur-md
              animate-[cloudMove_35s_linear_infinite]
            "
          />

          <div
            className="
              absolute -left-80 top-[35%]
              h-28 w-80
              rounded-full
              bg-slate-300/5
              blur-md
              animate-[cloudMove_45s_linear_infinite]
            "
          />

          <div
            className="
              absolute -left-96 top-[65%]
              h-20 w-64
              rounded-full
              bg-slate-300/5
              blur-md
              animate-[cloudMove_55s_linear_infinite]
            "
          />

          <div
            className="
              absolute inset-0
              bg-[linear-gradient(180deg,rgba(100,116,139,0.08),transparent)]
            "
          />
        </>
      )}

      {/* =========================
          🌧️ RAIN
      ========================= */}
      {(isRain || isStorm) && (
        <>
          {particles.map((particle) => (
            <span
              key={particle.id}
              className="
                absolute -top-10
                w-[2px]
                rounded-full
                bg-gradient-to-b
                from-transparent
                to-cyan-300/50
                rotate-[15deg]
                animate-[rainFall_linear_infinite]
              "
              style={{
                left: `${particle.left}%`,
                height: `${particle.size * 8}px`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}

          {/* Rain atmosphere */}
          <div
            className="
              absolute inset-0
              bg-[linear-gradient(180deg,rgba(30,41,59,0.12),rgba(15,23,42,0.25))]
            "
          />
        </>
      )}

      {/* =========================
          ⛈️ THUNDERSTORM
      ========================= */}
      {isStorm && (
        <div
          className="
            absolute inset-0
            bg-white/0
            animate-[lightning_8s_ease-in-out_infinite]
          "
        />
      )}

      {/* =========================
          ❄️ SNOW
      ========================= */}
      {isSnow && (
        <>
          {particles.map((particle) => (
            <span
              key={particle.id}
              className="
                absolute -top-10
                text-white/70
                animate-[snowFall_linear_infinite]
              "
              style={{
                left: `${particle.left}%`,
                fontSize: `${particle.size + 8}px`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            >
              ❄
            </span>
          ))}

          <div
            className="
              absolute inset-0
              bg-[linear-gradient(180deg,rgba(147,197,253,0.08),transparent)]
            "
          />
        </>
      )}
    </div>
  );
}
