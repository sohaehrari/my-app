export default function HourlyForecast({ hourly }) {
    if (!hourly || hourly.length === 0) {
      return null;
    }
  
    return (
      <section className="mt-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
        
        {/* Header */}
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Forecast
          </p>
  
          <h2 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
            Next Hours
          </h2>
  
          <p className="mt-1 text-sm text-slate-500">
            Real OpenWeather forecast
          </p>
        </div>
  
        {/* Hourly cards */}
        <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
          {hourly.map((item, index) => (
            <div
              key={`${item.timestamp}-${index}`}
              className={`
                min-w-[115px]
                flex-shrink-0
                rounded-2xl
                border
                p-4
                text-center
                transition
                ${
                  index === 0
                    ? "border-cyan-400/30 bg-cyan-400/10"
                    : "border-white/10 bg-black/10 hover:border-cyan-300/20 hover:bg-white/[0.05]"
                }
              `}
            >
              {/* Time */}
              <p
                className={`text-xs font-medium ${
                  index === 0
                    ? "text-cyan-300"
                    : "text-slate-500"
                }`}
              >
                {index === 0 ? "Now" : item.time}
              </p>
  
              {/* Weather icon */}
              <img
                src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                alt={item.description || item.condition}
                className="mx-auto my-2 h-14 w-14 object-contain"
              />
  
              {/* Temperature */}
              <p className="text-xl font-bold text-white">
                {item.temperature}°
              </p>
  
              {/* Condition */}
              <p className="mt-2 text-xs capitalize text-slate-400">
                {item.condition}
              </p>
  
              {/* Rain probability */}
              <div className="mt-3 border-t border-white/5 pt-3">
                <p className="text-xs text-cyan-300">
                  💧 {item.rainChance}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  