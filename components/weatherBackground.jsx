"use client";

export default function WeatherBackground({ condition, icon }) {
  const weather = condition?.toLowerCase() || "";

  const isRain =
    weather.includes("rain") ||
    weather.includes("drizzle");

  const isSnow = weather.includes("snow");

  const isClear = weather.includes("clear");

  const isClouds = weather.includes("cloud");

  const isStorm = weather.includes("thunderstorm");

  const isNight = icon?.endsWith("n");

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

      {/* CLEAR DAY ☀️ */}
      {isClear && !isNight && (
        <>
          <div
            className="
              absolute
              -right-20
              -top-20
              h-72
              w-72
              rounded-full
              bg-yellow-300/20
              blur-3xl
              animate-pulse
            "
          />

          <div
            className="
              absolute
              right-10
              top-10
              h-32
              w-32
              rounded-full
              bg-yellow-300/30
              shadow-[0_0_100px_30px_rgba(253,224,71,0.15)]
              animate-[sunPulse_4s_ease-in-out_infinite]
            "
          />
        </>
      )}

      {/* CLEAR NIGHT 🌙 */}
      {isClear && isNight && (
        <>
          <div
            className="
              absolute
              right-16
              top-16
              h-28
              w-28
              rounded-full
              bg-slate-100/20
              shadow-[0_0_80px_20px_rgba(226,232,240,0.15)]
            "
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(148,163,184,0.08),transparent_30%)]" />
        </>
      )}

      {/* CLOUDS ☁️ */}
      {isClouds && (
        <>
          <div
            className="
              absolute
              left-[-250px]
              top-[20%]
              h-24
              w-80
              rounded-full
              bg-slate-300/10
              blur-xl
              animate-[cloudMove_25s_linear_infinite]
            "
          />

          <div
            className="
              absolute
              left-[-350px]
              top-[45%]
              h-28
              w-96
              rounded-full
              bg-slate-300/[0.07]
              blur-xl
              animate-[cloudMove_35s_linear_infinite]
            "
          />
        </>
      )}

      {/* RAIN 🌧️ */}
      {isRain && (
        <>
          {Array.from({ length: 60 }).map((_, index) => (
            <span
              key={index}
              className="
                absolute
                -top-10
                h-10
                w-[2px]
                rotate-[15deg]
                rounded-full
                bg-cyan-300/50
                animate-[rainFall_0.7s_linear_infinite]
              "
              style={{
                left: `${(index * 17) % 100}%`,
                animationDelay: `${(index % 10) * 0.1}s`,
              }}
            />
          ))}

          <div className="absolute inset-0 bg-blue-950/10" />
        </>
      )}

      {/* SNOW ❄️ */}
      {isSnow && (
        <>
          {Array.from({ length: 50 }).map((_, index) => (
            <span
              key={index}
              className="
                absolute
                -top-10
                text-xl
                text-white/70
                animate-[snowFall_6s_linear_infinite]
              "
              style={{
                left: `${(index * 23) % 100}%`,
                animationDelay: `${(index % 10) * 0.3}s`,
              }}
            >
              ❄
            </span>
          ))}
        </>
      )}

      {/* THUNDERSTORM ⛈️ */}
      {isStorm && (
        <>
          <div className="absolute inset-0 bg-slate-950/20" />

          <div
            className="
              absolute
              inset-0
              animate-[lightning_6s_ease-in-out_infinite]
            "
          />
        </>
      )}
    </div>
  );
}
