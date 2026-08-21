export default function CurrentWeather({ weather }) {
    const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@4x.png`;
  
    return (
      <section className="space-y-5">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#101b30] via-[#0d1628] to-[#090f1c] p-6 shadow-2xl shadow-black/30 sm:p-8 lg:p-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
  
          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
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
  
            <div className="flex justify-center lg:justify-end">
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-inner shadow-white/5 sm:h-56 sm:w-56">
                <div className="absolute inset-5 rounded-full bg-cyan-400/5 blur-2xl" />
  
                <img
                  src={iconUrl}
                  alt={weather.condition}
                  className="relative h-40 w-40 object-contain sm:h-48 sm:w-48"
                />
              </div>
            </div>
          </div>
        </div>
  
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
          <span className="text-xl">{icon}</span>
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
  