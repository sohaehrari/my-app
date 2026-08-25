"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch("/api/me");

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to get user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    getUser();
  }, []);

  return (
    <nav className="sticky top-4 z-50 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#070b14]/70 px-4 py-3 backdrop-blur-xl sm:px-5">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
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
        </Link>

        {/* Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">

          {loading ? (
            <div className="h-9 w-20 animate-pulse rounded-xl bg-white/10" />
          ) : user ? (
            /* Logged in */
            <div className="flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-3 py-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400 text-xs font-bold text-slate-950">
                {user.name?.charAt(0).toUpperCase()}
              </div>

              <span className="text-sm font-semibold text-white">
                {user.name}
              </span>
            </div>
          ) : (
            /* Logged out */
            <>
              <Link
                href="/signin"
                className="rounded-xl border border-white/10 bg-transparent px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white active:scale-95 sm:px-4"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                className="rounded-xl bg-cyan-400 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 active:scale-95 sm:px-4"
              >
                Sign Up
              </Link>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}
