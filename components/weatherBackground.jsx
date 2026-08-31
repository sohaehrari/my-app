"use client";

export default function WeatherBackground({ condition }) {
  const weather = condition?.toLowerCase() || "";

  const rain =
    weather.includes("rain") ||
    weather.includes("drizzle");

  const snow = weather.includes("snow");

  const clear =
    weather.includes("clear") ||
    weather.includes("sun");

  const clouds = weather.includes("cloud");

  const storm = weather.includes("thunder");

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

      {/* DEBUG / DEFAULT BACKGROUND */}
      <div className="absolute inset-0 bg-[#070b14]" />

      {/* ☀️ SUN */}
      {clear && (
        <div
          className="
            absolute
            right-10
            top-10
            h-40
            w-40
            rounded-full
            bg-yellow-300/30
            shadow-[0_0_100px_40px_rgba(253,224,71,0.15)]
            animate-pulse
          "
        />
      )}

      {/* ☁️ CLOUD */}
      {clouds && (
        <>
          <div
            className="
              absolute
              left-[-200px]
              top-[20%]
              h-20
              w-72
              rounded-full
              bg-white/10
              blur-xl
              animate-[cloudMove_20s_linear_infinite]
            "
          />

          <div
            className="
              absolute
              left-[-300px]
              top-[50%]
              h-24
              w-80
              rounded-full
              bg-white/[0.07]
              blur-xl
              animate-[cloudMove_30s_linear_infinite]
            "
          />
        </>
      )}

      {/* 🌧️ RAIN */}
      {rain && (
        <>
          {Array.from({ length: 60 }).map((_, index) => (
            <span
              key={index}
              className="
                absolute
                top-[-30px]
                h-10
                w-[2px]
                rotate-[15deg]
                bg-cyan-300/50
                animate-[rainFall_0.7s_linear_infinite]
              "
              style={{
                left: `${(index * 17) % 100}%`,
                animationDelay: `${(index % 10) * 0.08}s`,
              }}
            />
          ))}
        </>
      )}

      {/* ❄️ SNOW */}
      {snow && (
        <>
          {Array.from({ length: 50 }).map((_, index) => (
            <span
              key={index}
              className="
                absolute
                top-[-20px]
                text-lg
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

      {/* ⛈️ STORM */}
      {storm && (
        <div
          className="
            absolute
            inset-0
            animate-[lightning_5s_ease-in-out_infinite]
          "
        />
      )}

    </div>
  );
}
