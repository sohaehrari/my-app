"use client";

export default function CurrentWeather({ weather }) {
  const condition = weather?.condition?.toLowerCase() || "";

  const isRain =
    condition.includes("rain") ||
    condition.includes("drizzle");

  const isSnow = condition.includes("snow");

  const isClear = condition.includes("clear");

  const isCloudy =
    condition.includes("cloud") ||
    condition.includes("overcast");

  return (
    <section className="space-y-5">

      {/* ==========================================
          CURRENT WEATHER CARD
      ========================================== */}

      <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#101b30] via-[#0d1628] to-[#090f1c] p-6 shadow-2xl shadow-black/30 sm:p-8 lg:p-10">

        {/* ========================================
            WEATHER SCENE
        ======================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* ================= CLEAR SKY ================= */}

          {isClear && (
            <>
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-yellow-300/15 blur-3xl" />

              <div className="absolute right-10 top-10 flex h-36 w-36 items-center justify-center rounded-full bg-yellow-300/90 shadow-[0_0_100px_35px_rgba(253,224,71,0.25)] animate-[sunGlow_4s_ease-in-out_infinite]">

                <div className="h-24 w-24 rounded-full bg-yellow-200" />

              </div>

              <div className="absolute right-[70px] top-[70px] h-40 w-40 rounded-full border-2 border-yellow-200/20 animate-[sunRotate_15s_linear_infinite]" />
            </>
          )}

          {/* ================= CLOUDY ================= */}

          {isCloudy && (
            <>
              {/* Big atmospheric glow */}
              <div className="absolute -right-32 top-0 h-80 w-[520px] rounded-full bg-slate-300/[0.08] blur-3xl" />

              {/* LARGE BOLD CLOUD */}
              <div className="absolute -right-24 top-12 h-44 w-[430px] animate-[cloudFloat_8s_ease-in-out_infinite]">

                {/* Main cloud body */}
                <div className="absolute bottom-0 left-0 h-28 w-[390px] rounded-[999px] bg-gradient-to-b from-slate-200/50 via-slate-300/35 to-slate-500/25 shadow-[0_15px_50px_rgba(203,213,225,0.18)]" />

                {/* Large cloud bumps */}
                <div className="absolute bottom-10 left-14 h-32 w-32 rounded-full bg-slate-200/45 shadow-[0_0_35px_rgba(226,232,240,0.15)]" />

                <div className="absolute bottom-14 left-28 h-40 w-40 rounded-full bg-slate-100/50 shadow-[0_0_45px_rgba(226,232,240,0.18)]" />

                <div className="absolute bottom-8 left-56 h-32 w-32 rounded-full bg-slate-200/45" />

                <div className="absolute bottom-6 right-8 h-24 w-24 rounded-full bg-slate-300/40" />

                {/* Bright cloud top */}
                <div className="absolute bottom-28 left-32 h-5 w-28 rounded-full bg-white/25 blur-md" />

              </div>

              {/* SECOND CLOUD */}
              <div className="absolute -left-40 top-52 h-32 w-[360px] opacity-70 animate-[cloudFloatReverse_12s_ease-in-out_infinite]">

                <div className="absolute bottom-0 h-20 w-[330px] rounded-full bg-slate-300/25 shadow-[0_10px_35px_rgba(203,213,225,0.1)]" />

                <div className="absolute bottom-8 left-12 h-24 w-24 rounded-full bg-slate-300/30" />

                <div className="absolute bottom-10 left-28 h-28 w-28 rounded-full bg-slate-200/30" />

                <div className="absolute bottom-5 right-12 h-20 w-20 rounded-full bg-slate-300/25" />

              </div>

              {/* Cloudy atmosphere */}
              <div className="absolute inset-0 bg-slate-300/[0.025]" />
            </>
          )}

          {/* ================= RAIN ================= */}

          {isRain && (
            <>
              {/* Rain atmosphere */}
              <div className="absolute inset-0 bg-blue-500/[0.05]" />

              {/* ================= BIG DARK RAIN CLOUD ================= */}

              <div className="absolute -right-24 top-4 h-44 w-[450px]">

                {/* Cloud body */}
                <div className="absolute bottom-0 left-0 h-28 w-[410px] rounded-[999px] bg-gradient-to-b from-slate-500/45 via-slate-700/40 to-slate-900/35 shadow-[0_20px_60px_rgba(15,23,42,0.5)]" />

                {/* Cloud bumps */}
                <div className="absolute bottom-12 left-12 h-32 w-32 rounded-full bg-slate-500/40" />

                <div className="absolute bottom-16 left-28 h-40 w-40 rounded-full bg-slate-400/45" />

                <div className="absolute bottom-10 left-56 h-32 w-32 rounded-full bg-slate-500/40" />

                <div className="absolute bottom-8 right-8 h-28 w-28 rounded-full bg-slate-600/40" />

              </div>

              {/* ================= RAIN LEAK ================= */}

              <div className="absolute right-16 top-36 h-[300px] w-[360px] overflow-hidden">

                {Array.from({ length: 55 }).map((_, index) => (
                  <span
                    key={index}
                    className="absolute top-0 rounded-full bg-gradient-to-b from-cyan-100/0 via-cyan-200/60 to-blue-400/20 blur-[0.5px] animate-[rainLeak_1.2s_linear_infinite]"
                    style={{
                      left: `${(index * 43) % 100}%`,
                      width: `${2 + (index % 3)}px`,
                      height: `${18 + (index % 6) * 5}px`,
                      animationDelay: `${(index % 15) * 70}ms`,
                      opacity: 0.35 + (index % 4) * 0.12,
                    }}
                  />
                ))}

              </div>

              {/* ================= RAIN SPLASH / MIST ================= */}

              <div className="absolute bottom-0 right-10 h-24 w-[430px] rounded-full bg-cyan-300/[0.06] blur-2xl" />

              <div className="absolute bottom-8 right-20 h-1 w-[350px] rounded-full bg-cyan-200/10 blur-sm" />
            </>
          )}

          {/* ================= SNOW ================= */}

          {isSnow && (
            <>
              <div className="absolute inset-0 bg-blue-200/[0.025]" />

              {/* Snow cloud */}
              <div className="absolute -right-20 top-8 h-44 w-[450px]">

                <div className="absolute bottom-0 h-28 w-[410px] rounded-full bg-slate-300/35 shadow-[0_15px_50px_rgba(226,232,240,0.12)]" />

                <div className="absolute bottom-8 left-12 h-32 w-32 rounded-full bg-slate-200/35" />

                <div className="absolute bottom-12 left-28 h-40 w-40 rounded-full bg-slate-200/40" />

                <div className="absolute bottom-8 left-56 h-32 w-32 rounded-full bg-slate-300/35" />

                <div className="absolute bottom-5 right-8 h-24 w-24 rounded-full bg-slate-300/30" />

              </div>

              {/* Snow flakes */}
              {Array.from({ length: 45 }).map((_, index) => (
                <span
                  key={index}
                  className="absolute -top-5 rounded-full bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.5)] animate-[weatherSnow_6s_linear_infinite]"
                  style={{
                    left: `${(index * 29) % 100}%`,
                    width: `${4 + (index % 5)}px`,
                    height: `${4 + (index % 5)}px`,
                    animationDelay: `${(index % 12) * 350}ms`,
                  }}
                />
              ))}

              <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/[0.025] blur-2xl" />
            </>
          )}

        </div>

        {/* ==========================================
            WEATHER INFORMATION
        ========================================== */}

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">

          <div>

            <div className="flex flex-wrap items-center gap-3">

              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Current weather
              </span>

              <span className="text-sm text-slate-500">
                {weather.country}
              </span>

            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {weather.city}
            </h2>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-5">

              <div className="text-7xl font-bold tracking-tighter text-white sm:text-8xl">
                {weather.temperature}°
              </div>

              <div className="pb-2">

                <p className="text-lg font-semibold capitalize text-slate-200">
                  {weather.description}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Feels like {weather.feelsLike}°
                </p>

              </div>

            </div>

          </div>

          {/* ==========================================
              LARGE WEATHER INDICATOR
          ========================================== */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative flex h-52 w-52 items-center justify-center">

              {/* CLEAR */}
              {isClear && (
                <div className="h-36 w-36 rounded-full bg-yellow-300 shadow-[0_0_100px_35px_rgba(253,224,71,0.25)] animate-[sunGlow_4s_ease-in-out_infinite]" />
              )}

              {/* ================= BOLD CLOUD ================= */}

              {isCloudy && (
                <div className="relative h-28 w-48">

                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-slate-200/10 blur-2xl" />

                  {/* Main body */}
                  <div className="absolute bottom-0 left-0 h-16 w-48 rounded-full bg-gradient-to-b from-slate-100/80 via-slate-200/70 to-slate-400/60 shadow-[0_10px_35px_rgba(226,232,240,0.25)]" />

                  {/* Cloud bumps */}
                  <div className="absolute bottom-7 left-8 h-20 w-20 rounded-full bg-slate-100/85 shadow-[0_0_25px_rgba(226,232,240,0.2)]" />

                  <div className="absolute bottom-10 left-16 h-24 w-24 rounded-full bg-slate-50/90 shadow-[0_0_30px_rgba(255,255,255,0.2)]" />

                  <div className="absolute bottom-6 right-7 h-16 w-16 rounded-full bg-slate-200/80" />

                </div>
              )}

              {/* ================= RAIN CLOUD + LEAK ================= */}

              {isRain && (
  <>
    {/* Rainy background */}
    <div className="absolute inset-0 bg-blue-950/20" />

    {/* ================= CLOUD ================= */}

    <div className="absolute right-[-70px] top-5 h-44 w-[440px]">

      {/* Cloud shadow */}
      <div className="absolute bottom-0 left-0 h-28 w-[410px] rounded-full bg-black/50 blur-xl" />

      {/* Main cloud */}
      <div className="absolute bottom-6 left-0 h-28 w-[410px] rounded-full bg-gradient-to-b from-slate-300/90 via-slate-500/85 to-slate-800/90" />

      {/* Cloud bumps */}
      <div className="absolute bottom-14 left-8 h-32 w-32 rounded-full bg-slate-300/90" />

      <div className="absolute bottom-18 left-24 h-40 w-40 rounded-full bg-slate-200/95" />

      <div className="absolute bottom-12 left-52 h-32 w-32 rounded-full bg-slate-400/90" />

      <div className="absolute bottom-10 right-8 h-28 w-28 rounded-full bg-slate-500/85" />

      {/* Very dark wet underside */}
      <div className="absolute bottom-1 left-12 h-9 w-[350px] rounded-full bg-slate-950/80 blur-md" />

    </div>

    {/* ================= LEAKING WATER ================= */}

    <div className="absolute right-12 top-40 h-[320px] w-[420px]">

      {/* Large drops */}
      {[
        { left: "8%", height: 55, delay: "0s" },
        { left: "17%", height: 80, delay: "0.35s" },
        { left: "27%", height: 45, delay: "0.7s" },
        { left: "38%", height: 95, delay: "0.15s" },
        { left: "49%", height: 65, delay: "0.5s" },
        { left: "60%", height: 85, delay: "0.9s" },
        { left: "72%", height: 50, delay: "0.3s" },
        { left: "83%", height: 75, delay: "0.65s" },
        { left: "92%", height: 55, delay: "0.1s" },
      ].map((drop, index) => (
        <div
          key={index}
          className="absolute top-0 w-5 animate-[rainWaterV5_1.4s_ease-in_infinite]"
          style={{
            left: drop.left,
            height: `${drop.height}px`,
            animationDelay: drop.delay,
          }}
        >
          {/* Water stream */}
          <div className="absolute left-1/2 top-0 h-full w-[5px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-100/90 via-cyan-300/80 to-blue-500/10 shadow-[0_0_10px_rgba(34,211,238,0.45)]" />

          {/* Water drop head */}
          <div className="absolute bottom-0 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-gradient-to-br from-white via-cyan-200 to-cyan-400/30 shadow-[0_0_12px_rgba(103,232,249,0.5)]" />
        </div>
      ))}

      {/* Small droplets */}
      {Array.from({ length: 25 }).map((_, index) => (
        <span
          key={`small-${index}`}
          className="absolute top-0 rounded-full bg-cyan-200/70 shadow-[0_0_6px_rgba(103,232,249,0.35)] animate-[smallRainV5_1s_linear_infinite]"
          style={{
            left: `${(index * 41) % 100}%`,
            width: `${2 + (index % 3)}px`,
            height: `${6 + (index % 5) * 2}px`,
            animationDelay: `${(index % 10) * 120}ms`,
          }}
        />
      ))}

    </div>

    {/* ================= WATER MIST ================= */}

    <div className="absolute bottom-0 left-0 right-0 h-28 bg-cyan-300/[0.06] blur-3xl" />

  </>
)}

              {/* SNOW */}
              {isSnow && (
                <div className="text-8xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-[snowPulse_3s_ease-in-out_infinite]">
                  ❄
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* ==========================================
          WEATHER METRICS
      ========================================== */}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

        <WeatherMetric
          label="Humidity"
          value={`${weather.humidity}%`}
          icon="💧"
        />

        <WeatherMetric
          label="Wind"
          value={`${weather.wind} km/h`}
          icon="♧"
        />

        <WeatherMetric
          label="Pressure"
          value={`${weather.pressure} hPa`}
          icon="◌"
        />

        <WeatherMetric
          label="Visibility"
          value={`${weather.visibility} km`}
          icon="◉"
        />

      </div>

      {/* ==========================================
          OVERVIEW
      ========================================== */}

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">

        <div className="mb-5 flex items-center justify-between">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Overview
            </p>

            <h3 className="mt-1 text-xl font-semibold text-white">
              Today
            </h3>

          </div>

          <div className="rounded-full bg-white/[0.05] px-3 py-1.5 text-xs text-slate-400">
            Live data
          </div>

        </div>

        <div className="grid gap-4 sm:grid-cols-3">

          <InfoItem
            label="Condition"
            value={weather.condition}
          />

          <InfoItem
            label="Feels like"
            value={`${weather.feelsLike}°`}
          />

          <InfoItem
            label="Location"
            value={weather.country}
          />

        </div>

      </div>

    </section>
  );
}

function WeatherMetric({ label, value, icon }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition duration-200 hover:border-white/15 hover:bg-white/[0.06] sm:p-5">

      <div className="flex items-center justify-between">

        <span className="text-xl">
          {icon}
        </span>

        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-600">
          Detail
        </span>

      </div>

      <p className="mt-5 text-xs text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-base font-semibold text-white sm:text-lg">
        {value}
      </p>

    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-black/10 p-4">

      <p className="text-xs text-slate-500">
        {label}
      </p>

      <p className="mt-2 font-semibold capitalize text-slate-200">
        {value}
      </p>

    </div>
  );
}