export default function CurrentWeather({ weather }) {
    return (
      <section
        className="
          overflow-hidden
          rounded-3xl
          border
          border-white/60
          bg-white
          p-5
          shadow-xl
          shadow-slate-200/60
          sm:p-7
        "
      >
        {/* Top section */}
        <div
          className="
            flex
            flex-col
            gap-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* Location */}
          <div>
            <p className="mb-1 text-sm font-medium text-slate-500">
              {weather.country}
            </p>
  
            <h2
              className="
                text-4xl
                font-bold
                tracking-tight
                text-slate-900
                sm:text-5xl
              "
            >
              {weather.city}
            </h2>
  
            <p className="mt-3 text-sm text-slate-500">
              {weather.date}
            </p>
          </div>
  
          {/* Temperature */}
          <div className="text-left md:text-right">
            <div className="mb-2 text-6xl sm:text-7xl">
              {weather.icon}
            </div>
  
            <div className="flex items-start md:justify-end">
              <span
                className="
                  text-6xl
                  font-bold
                  tracking-tighter
                  text-slate-900
                  sm:text-7xl
                "
              >
                {weather.temperature}°
              </span>
  
              <span className="mt-2 text-xl font-semibold text-slate-500">
                C
              </span>
            </div>
  
            <p className="mt-3 text-lg font-semibold text-blue-600">
              {weather.condition}
            </p>
          </div>
        </div>
  
        {/* Divider */}
        <div className="my-7 h-px bg-slate-100" />
  
        {/* Description */}
        <div
          className="
            flex
            flex-col
            gap-2
            text-sm
            text-slate-500
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            Feels like{" "}
            <span className="font-semibold text-slate-800">
              {weather.feelsLike}°C
            </span>
          </p>
  
          <p>{weather.description}</p>
        </div>
  
        {/* Weather details */}
        <div
          className="
            mt-6
            grid
            grid-cols-2
            gap-3
            lg:grid-cols-4
          "
        >
          {/* Humidity */}
          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              bg-slate-50
              p-4
            "
          >
            <span className="text-2xl">💧</span>
  
            <div>
              <p className="text-xs text-slate-500">
                Humidity
              </p>
  
              <p className="mt-1 font-bold text-slate-800">
                {weather.humidity}%
              </p>
            </div>
          </div>
  
          {/* Wind */}
          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              bg-slate-50
              p-4
            "
          >
            <span className="text-2xl">💨</span>
  
            <div>
              <p className="text-xs text-slate-500">
                Wind
              </p>
  
              <p className="mt-1 font-bold text-slate-800">
                {weather.wind} km/h
              </p>
            </div>
          </div>
  
          {/* Pressure */}
          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              bg-slate-50
              p-4
            "
          >
            <span className="text-2xl">🌡️</span>
  
            <div>
              <p className="text-xs text-slate-500">
                Pressure
              </p>
  
              <p className="mt-1 font-bold text-slate-800">
                {weather.pressure} hPa
              </p>
            </div>
          </div>
  
          {/* Visibility */}
          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              bg-slate-50
              p-4
            "
          >
            <span className="text-2xl">👁️</span>
  
            <div>
              <p className="text-xs text-slate-500">
                Visibility
              </p>
  
              <p className="mt-1 font-bold text-slate-800">
                {weather.visibility} km
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  