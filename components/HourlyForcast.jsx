export default function HourlyForecast({ hourly }) {
    if (!hourly || hourly.length === 0) {
      return null;
    }
  
    return (
      <section className="mt-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Forecast
          </p>
  
          <h2 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
            Next 24 Hours
          </h2>
        </div>
  
        <div className="flex gap-3 overflow-x-auto pb-3">
          {hourly.map((item, index) => {
            const date = new Date(item.time);
  
            const time = date.toLocaleTimeString([], {
              hour: "numeric",
            });
  
            return (
              <div
                key={`${item.time}-${index}`}
                className="min-w-[115px] flex-shrink-0 rounded-2xl border border-white/10 bg-black/10 p-4 text-center transition hover:border-cyan-300/20 hover:bg-white/[0.05]"
              >
                <p className="text-xs font-medium text-slate-500">
                  {index === 0 ? "Now" : time}
                </p>
  
                <img
                  src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                  alt={item.condition}
                  className="mx-auto my-2 h-14 w-14 object-contain"
                />
  
                <p className="text-xl font-bold text-white">
                  {item.temperature}°
                </p>
  
                <p className="mt-2 text-xs capitalize text-slate-400">
                  {item.condition}
                </p>
  
                <div className="mt-3 border-t border-white/5 pt-3">
                  <p className="text-xs text-cyan-300">
                    💧 {item.precipitation}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
  