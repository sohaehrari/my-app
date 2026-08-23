export default function WeatherDetails({weather}){
    if(!weather){
        return null
    }
    function formatTime(Timestemp){
        if(!Timestemp) {
            return null;
        }
        return new Date(timestamp * 1000).toLocaleTimeString(
            [],
            {
              hour: "numeric",
              minute: "2-digit",
            }
          );
        }
    function getWindDirection(degree){
        if(!degree){
            return null;
        }
        const directions = [
            "N",
            "NE",
            "E",
            "SE",
            "S",
            "SW",
            "W",
            "NW",
          ];
      
          const index = Math.round(degree / 45) % 8;
      
          return directions[index];
        }
    
    return(
       
        <section className="mt-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-black/10 sm:p-6 lg:p-7">

      {/* Header */}
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Weather Information
        </p>

        <h2 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
          Weather Details
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Live weather conditions in {weather.city}
        </p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">

        {/* Feels Like */}
        <div className="rounded-2xl border border-white/10 bg-black/10 p-4 transition duration-200 hover:border-cyan-300/20 hover:bg-white/[0.05]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10 text-xl">
            🌡️
          </div>

          <p className="mt-4 text-xs font-medium text-slate-500">
            Feels Like
          </p>

          <p className="mt-1 text-xl font-bold text-white">
            {weather.feelsLike}°C
          </p>
        </div>

        {/* Humidity */}
        <div className="rounded-2xl border border-white/10 bg-black/10 p-4 transition duration-200 hover:border-cyan-300/20 hover:bg-white/[0.05]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
            💧
          </div>

          <p className="mt-4 text-xs font-medium text-slate-500">
            Humidity
          </p>

          <p className="mt-1 text-xl font-bold text-white">
            {weather.humidity}%
          </p>
        </div>

        {/* Wind Speed */}
        <div className="rounded-2xl border border-white/10 bg-black/10 p-4 transition duration-200 hover:border-cyan-300/20 hover:bg-white/[0.05]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10 text-xl">
            🌬️
          </div>

          <p className="mt-4 text-xs font-medium text-slate-500">
            Wind Speed
          </p>

          <p className="mt-1 text-xl font-bold text-white">
            {weather.wind} km/h
          </p>
        </div>

        {/* Wind Direction */}
        <div className="rounded-2xl border border-white/10 bg-black/10 p-4 transition duration-200 hover:border-cyan-300/20 hover:bg-white/[0.05]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-400/10 text-xl">
            🧭
          </div>

          <p className="mt-4 text-xs font-medium text-slate-500">
            Wind Direction
          </p>

          <p className="mt-1 text-xl font-bold text-white">
            {getWindDirection(weather.windDirection)}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            {weather.windDirection ?? "--"}°
          </p>
        </div>

        {/* Pressure */}
        <div className="rounded-2xl border border-white/10 bg-black/10 p-4 transition duration-200 hover:border-cyan-300/20 hover:bg-white/[0.05]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-xl">
            📊
          </div>

          <p className="mt-4 text-xs font-medium text-slate-500">
            Pressure
          </p>

          <p className="mt-1 text-xl font-bold text-white">
            {weather.pressure} hPa
          </p>
        </div>

        {/* Visibility */}
        <div className="rounded-2xl border border-white/10 bg-black/10 p-4 transition duration-200 hover:border-cyan-300/20 hover:bg-white/[0.05]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10 text-xl">
            👁️
          </div>

          <p className="mt-4 text-xs font-medium text-slate-500">
            Visibility
          </p>

          <p className="mt-1 text-xl font-bold text-white">
            {weather.visibility ?? "--"} km
          </p>
        </div>

        {/* Cloudiness */}
        <div className="rounded-2xl border border-white/10 bg-black/10 p-4 transition duration-200 hover:border-cyan-300/20 hover:bg-white/[0.05]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-400/10 text-xl">
            ☁️
          </div>

          <p className="mt-4 text-xs font-medium text-slate-500">
            Cloudiness
          </p>

          <p className="mt-1 text-xl font-bold text-white">
            {weather.clouds ?? 0}%
          </p>
        </div>

        {/* Sunrise */}
        <div className="rounded-2xl border border-white/10 bg-black/10 p-4 transition duration-200 hover:border-cyan-300/20 hover:bg-white/[0.05]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10 text-xl">
            🌅
          </div>

          <p className="mt-4 text-xs font-medium text-slate-500">
            Sunrise
          </p>

          <p className="mt-1 text-xl font-bold text-white">
            {formatTime(weather.sunrise)}
          </p>
        </div>

        {/* Sunset */}
        <div className="rounded-2xl border border-white/10 bg-black/10 p-4 transition duration-200 hover:border-cyan-300/20 hover:bg-white/[0.05]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-400/10 text-xl">
            🌇
          </div>

          <p className="mt-4 text-xs font-medium text-slate-500">
            Sunset
          </p>

          <p className="mt-1 text-xl font-bold text-white">
            {formatTime(weather.sunset)}
          </p>
        </div>

      </div>
    </section>
  );
}