"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    // Basic validation
    if (!cleanName || !cleanEmail || !password || !confirmPassword) {
      setError("Please complete all fields.");
      return;
    }

    if (cleanName.length < 2) {
      setError("Please enter a valid name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (loading) return;

    try {
      setLoading(true);

      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to create your account.");
      }

      setSuccess("Account created successfully. Redirecting...");

      setTimeout(() => {
        router.push("/signin");
      }, 1200);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111f] text-white">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute -bottom-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      {/* Main */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40 backdrop-blur-xl md:grid-cols-2">

          {/* Left section */}
          <div className="relative hidden min-h-[700px] overflow-hidden bg-gradient-to-br from-[#0b1d31] via-[#0a1728] to-[#07111f] p-12 md:flex md:flex-col md:justify-between">

            <div>
              {/* Logo */}
              <div className="mb-10 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                  <span className="text-xl">☁</span>
                </div>

                <span className="text-lg font-semibold tracking-wide">
                  Weather<span className="text-cyan-300">.</span>
                </span>
              </div>

              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300/70">
                Start your journey
              </p>

              <h2 className="max-w-md text-4xl font-light leading-tight">
                See the weather.
                <br />

                <span className="font-semibold">
                  Experience the world.
                </span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
                Create your personal weather account and keep everything
                you need for a better weather experience in one place.
              </p>
            </div>

            {/* Decorative cloud */}
            <div className="absolute bottom-20 right-12 opacity-20">
              <div className="text-[9rem]">☁</div>
            </div>

            <div className="relative">
              <div className="h-px w-full bg-gradient-to-r from-cyan-300/30 to-transparent" />

              <p className="mt-5 text-xs tracking-widest text-slate-500">
                PRECISION • SIMPLICITY • CLARITY
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="flex min-h-[700px] flex-col justify-center bg-[#091523]/80 p-7 sm:p-10 md:p-12">

            {/* Mobile logo */}
            <div className="mb-10 flex items-center gap-3 md:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                <span className="text-xl">☁</span>
              </div>

              <span className="text-lg font-semibold tracking-wide">
                Weather<span className="text-cyan-300">.</span>
              </span>
            </div>

            {/* Heading */}
            <div className="mb-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/70">
                Create your account
              </p>

              <h1 className="text-3xl font-semibold tracking-tight">
                Sign up
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Create your account and start exploring your weather.
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="mb-5 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400"
                >
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-cyan-300/5"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-cyan-300/5"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 8 characters"
                    autoComplete="new-password"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 pr-16 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-cyan-300/5"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500 transition hover:text-cyan-300"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repeat your password"
                    autoComplete="new-password"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 pr-16 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-cyan-300/5"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500 transition hover:text-cyan-300"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="mt-3 w-full rounded-xl bg-gradient-to-r from-cyan-300 to-blue-400 px-4 py-3.5 text-sm font-bold text-[#06111e] shadow-lg shadow-cyan-500/10 transition duration-300 hover:scale-[1.01] hover:shadow-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
              >
                {loading ? "Creating account..." : "Create account"}
              </button>
            </form>

            {/* Login */}
            <p className="mt-7 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <a
                href="/signin"
                className="font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                Sign in
              </a>
            </p>

            <p className="mt-6 text-center text-[11px] leading-5 text-slate-600">
              By creating an account, you agree to our Terms of Service
              and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
