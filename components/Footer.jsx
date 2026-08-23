export default function Footer(){
    return(
        <footer className="mt-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-5xl px-4 py-12">
      
          {/* Main footer */}
          <div className="flex flex-col items-center text-center">
      
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] shadow-lg shadow-cyan-500/5">
                <svg
                  className="h-6 w-6 text-cyan-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.5 19H8a5 5 0 1 1 1.15-9.865A6 6 0 0 1 20 11a4 4 0 0 1-2.5 8Z"
                  />
                </svg>
              </div>
      
              <div className="text-left">
                <h3 className="text-base font-semibold text-white">
                  Weather
                </h3>
      
                <p className="text-xs text-slate-600">
                  Weather, wherever you are.
                </p>
              </div>
            </div>
      
            {/* Description */}
            <p className="mt-5 max-w-lg text-sm leading-6 text-slate-500">
              Simple, accurate weather information with current
              conditions, hourly forecasts, and daily outlooks
              for cities around the world.
            </p>
      
            {/* Navigation */}
            <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
      
              <button className="group flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-300">
                <svg
                  className="h-4 w-4 transition group-hover:text-cyan-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12h18M12 3v18"
                  />
                </svg>
                Current
              </button>
      
              <button className="group flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-300">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v18M3 12h18"
                  />
                </svg>
                Forecast
              </button>
      
              <button className="group flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-300">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path
                    strokeLinecap="round"
                    d="M12 8v4l2.5 2.5"
                  />
                </svg>
                Hourly
              </button>
      
              <button className="group flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-300">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="17"
                    rx="2"
                  />
                  <path
                    strokeLinecap="round"
                    d="M8 2v4M16 2v4M3 9h18"
                  />
                </svg>
                Daily
              </button>
      
            </nav>
      
            {/* Status */}
            <div className="mt-8 flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.025] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
      
              <span className="text-xs font-medium text-slate-500">
                Weather services operational
              </span>
            </div>
          </div>
      
          {/* Bottom */}
          <div className="mt-10 border-t border-white/[0.05] pt-6">
      
            <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5">
      
              <p className="text-xs text-slate-600">
                © {new Date().getFullYear()} Weather
              </p>
      
              <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />
      
              <p className="text-xs text-slate-600">
                Worldwide weather coverage
              </p>
      
              <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />
      
              <p className="text-xs text-slate-600">
                Built with Next.js
              </p>
      
            </div>
      
          </div>
        </div>
      </footer>
      

      
    )
}