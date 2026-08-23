export default function Navbar(){
return(
    <nav className="sticky top-4 z-50 sm:px-6 lg:px-10">
                  <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 shadow-lg shadow-cyan-500/5">
            <span className="text-xl">
              ☁️
            </span>
          </div>
          <div>
            <h1 className="text-sm font-bold traking-right text-white">
Weather_Dashboard
            </h1>
            <p className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 sm:block">
              Weather Dashboard
            </p>
          </div>

</div>



<div className="flex items-center gap-2 sm:gap-3">

          {/* Sign In */}
          <button
            type="button"
            className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white sm:px-4"
          >
            Sign In
          </button>

          {/* Sign Up */}
          <button
            type="button"
            className="rounded-xl bg-cyan-400 px-3 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all duration-200 hover:bg-cyan-300 hover:shadow-cyan-400/20 active:scale-95 sm:px-4"
          >
            Sign Up
          </button>

        </div>

      </div>
    </nav>

)
}