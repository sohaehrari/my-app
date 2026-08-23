"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#070b14]/70 px-4 py-3 backdrop-blur-xl sm:px-5">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10">
            <span className="text-xl">☁️</span>
          </div>

          <div>
            <h1 className="text-sm font-bold text-white sm:text-base">
            Weather Dashboard

            </h1>

            <p className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 sm:block">
                Weatherly
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="rounded-xl border border-white/10 bg-transparent px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white sm:px-4"
          >
            Sign In
          </button>

          <button
            type="button"
            className="rounded-xl bg-cyan-400 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 active:scale-95 sm:px-4"
          >
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}
