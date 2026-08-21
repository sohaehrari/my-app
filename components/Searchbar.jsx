"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const city = query.trim();

    if (!city) {
      return;
    }

    onSearch(city);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 sm:flex-row"
    >
      <div className="relative flex-1">
        {/* Search icon */}
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400">
          🔍
        </span>

        <label htmlFor="city-search" className="sr-only">
          Search for a city
        </label>

        <input
          id="city-search"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for a city..."
          autoComplete="off"
          className="
            h-14
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-white
            pl-12
            pr-5
            text-base
            text-slate-800
            shadow-sm
            outline-none
            transition
            placeholder:text-slate-400
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
          "
        />
      </div>

      <button
        type="submit"
        className="
          h-14
          rounded-2xl
          bg-blue-600
          px-7
          font-semibold
          text-white
          shadow-lg
          shadow-blue-600/20
          transition
          hover:bg-blue-700
          active:scale-[0.98]
          sm:min-w-32
        "
      >
        Search
      </button>
    </form>
  );
}
