"use client";

import { useEffect, useRef, useState } from "react";

const countries = [
  { name: "Afghanistan", code: "AF", flag: "🇦🇫" },
  { name: "Albania", code: "AL", flag: "🇦🇱" },
  { name: "Algeria", code: "DZ", flag: "🇩🇿" },
  { name: "Andorra", code: "AD", flag: "🇦🇩" },
  { name: "Angola", code: "AO", flag: "🇦🇴" },
  { name: "Antigua and Barbuda", code: "AG", flag: "🇦🇬" },
  { name: "Argentina", code: "AR", flag: "🇦🇷" },
  { name: "Armenia", code: "AM", flag: "🇦🇲" },
  { name: "Australia", code: "AU", flag: "🇦🇺" },
  { name: "Austria", code: "AT", flag: "🇦🇹" },
  { name: "Azerbaijan", code: "AZ", flag: "🇦🇿" },

  { name: "Bahamas", code: "BS", flag: "🇧🇸" },
  { name: "Bahrain", code: "BH", flag: "🇧🇭" },
  { name: "Bangladesh", code: "BD", flag: "🇧🇩" },
  { name: "Barbados", code: "BB", flag: "🇧🇧" },
  { name: "Belarus", code: "BY", flag: "🇧🇾" },
  { name: "Belgium", code: "BE", flag: "🇧🇪" },
  { name: "Belize", code: "BZ", flag: "🇧🇿" },
  { name: "Benin", code: "BJ", flag: "🇧🇯" },
  { name: "Bhutan", code: "BT", flag: "🇧🇹" },
  { name: "Bolivia", code: "BO", flag: "🇧🇴" },
  { name: "Brazil", code: "BR", flag: "🇧🇷" },
  { name: "Brunei", code: "BN", flag: "🇧🇳" },
  { name: "Bulgaria", code: "BG", flag: "🇧🇬" },

  { name: "Cambodia", code: "KH", flag: "🇰🇭" },
  { name: "Cameroon", code: "CM", flag: "🇨🇲" },
  { name: "Canada", code: "CA", flag: "🇨🇦" },
  { name: "Chad", code: "TD", flag: "🇹🇩" },
  { name: "Chile", code: "CL", flag: "🇨🇱" },
  { name: "China", code: "CN", flag: "🇨🇳" },
  { name: "Colombia", code: "CO", flag: "🇨🇴" },
  { name: "Costa Rica", code: "CR", flag: "🇨🇷" },
  { name: "Croatia", code: "HR", flag: "🇭🇷" },
  { name: "Cuba", code: "CU", flag: "🇨🇺" },
  { name: "Cyprus", code: "CY", flag: "🇨🇾" },
  { name: "Czechia", code: "CZ", flag: "🇨🇿" },

  { name: "Denmark", code: "DK", flag: "🇩🇰" },
  { name: "Djibouti", code: "DJ", flag: "🇩🇯" },
  { name: "Dominica", code: "DM", flag: "🇩🇲" },
  { name: "Dominican Republic", code: "DO", flag: "🇩🇴" },

  { name: "Ecuador", code: "EC", flag: "🇪🇨" },
  { name: "Egypt", code: "EG", flag: "🇪🇬" },
  { name: "Estonia", code: "EE", flag: "🇪🇪" },
  { name: "Ethiopia", code: "ET", flag: "🇪🇹" },

  { name: "Fiji", code: "FJ", flag: "🇫🇯" },
  { name: "Finland", code: "FI", flag: "🇫🇮" },
  { name: "France", code: "FR", flag: "🇫🇷" },

  { name: "Georgia", code: "GE", flag: "🇬🇪" },
  { name: "Germany", code: "DE", flag: "🇩🇪" },
  { name: "Ghana", code: "GH", flag: "🇬🇭" },
  { name: "Greece", code: "GR", flag: "🇬🇷" },
  { name: "Guatemala", code: "GT", flag: "🇬🇹" },
  { name: "Guinea", code: "GN", flag: "🇬🇳" },

  { name: "Haiti", code: "HT", flag: "🇭🇹" },
  { name: "Honduras", code: "HN", flag: "🇭🇳" },
  { name: "Hungary", code: "HU", flag: "🇭🇺" },

  { name: "Iceland", code: "IS", flag: "🇮🇸" },
  { name: "India", code: "IN", flag: "🇮🇳" },
  { name: "Indonesia", code: "ID", flag: "🇮🇩" },
  { name: "Iran", code: "IR", flag: "🇮🇷" },
  { name: "Iraq", code: "IQ", flag: "🇮🇶" },
  { name: "Ireland", code: "IE", flag: "🇮🇪" },
  { name: "Italy", code: "IT", flag: "🇮🇹" },

  { name: "Jamaica", code: "JM", flag: "🇯🇲" },
  { name: "Japan", code: "JP", flag: "🇯🇵" },
  { name: "Jordan", code: "JO", flag: "🇯🇴" },

  { name: "Kazakhstan", code: "KZ", flag: "🇰🇿" },
  { name: "Kenya", code: "KE", flag: "🇰🇪" },
  { name: "Kuwait", code: "KW", flag: "🇰🇼" },

  { name: "Lebanon", code: "LB", flag: "🇱🇧" },
  { name: "Liberia", code: "LR", flag: "🇱🇷" },
  { name: "Libya", code: "LY", flag: "🇱🇾" },
  { name: "Lithuania", code: "LT", flag: "🇱🇹" },
  { name: "Luxembourg", code: "LU", flag: "🇱🇺" },

  { name: "Malaysia", code: "MY", flag: "🇲🇾" },
  { name: "Maldives", code: "MV", flag: "🇲🇻" },
  { name: "Malta", code: "MT", flag: "🇲🇹" },
  { name: "Mexico", code: "MX", flag: "🇲🇽" },
  { name: "Moldova", code: "MD", flag: "🇲🇩" },
  { name: "Monaco", code: "MC", flag: "🇲🇨" },
  { name: "Mongolia", code: "MN", flag: "🇲🇳" },
  { name: "Montenegro", code: "ME", flag: "🇲🇪" },
  { name: "Morocco", code: "MA", flag: "🇲🇦" },
  { name: "Mozambique", code: "MZ", flag: "🇲🇿" },

  { name: "Nepal", code: "NP", flag: "🇳🇵" },
  { name: "Netherlands", code: "NL", flag: "🇳🇱" },
  { name: "New Zealand", code: "NZ", flag: "🇳🇿" },
  { name: "Nigeria", code: "NG", flag: "🇳🇬" },
  { name: "Norway", code: "NO", flag: "🇳🇴" },

  { name: "Oman", code: "OM", flag: "🇴🇲" },

  { name: "Pakistan", code: "PK", flag: "🇵🇰" },
  { name: "Panama", code: "PA", flag: "🇵🇦" },
  { name: "Peru", code: "PE", flag: "🇵🇪" },
  { name: "Philippines", code: "PH", flag: "🇵🇭" },
  { name: "Poland", code: "PL", flag: "🇵🇱" },
  { name: "Portugal", code: "PT", flag: "🇵🇹" },

  { name: "Qatar", code: "QA", flag: "🇶🇦" },

  { name: "Romania", code: "RO", flag: "🇷🇴" },
  { name: "Russia", code: "RU", flag: "🇷🇺" },
  { name: "Rwanda", code: "RW", flag: "🇷🇼" },

  { name: "Saudi Arabia", code: "SA", flag: "🇸🇦" },
  { name: "Senegal", code: "SN", flag: "🇸🇳" },
  { name: "Serbia", code: "RS", flag: "🇷🇸" },
  { name: "Singapore", code: "SG", flag: "🇸🇬" },
  { name: "Slovakia", code: "SK", flag: "🇸🇰" },
  { name: "Slovenia", code: "SI", flag: "🇸🇮" },
  { name: "Somalia", code: "SO", flag: "🇸🇴" },
  { name: "South Africa", code: "ZA", flag: "🇿🇦" },
  { name: "South Korea", code: "KR", flag: "🇰🇷" },
  { name: "Spain", code: "ES", flag: "🇪🇸" },
  { name: "Sri Lanka", code: "LK", flag: "🇱🇰" },
  { name: "Sudan", code: "SD", flag: "🇸🇩" },
  { name: "Sweden", code: "SE", flag: "🇸🇪" },
  { name: "Switzerland", code: "CH", flag: "🇨🇭" },
  { name: "Syria", code: "SY", flag: "🇸🇾" },

  { name: "Thailand", code: "TH", flag: "🇹🇭" },
  { name: "Tunisia", code: "TN", flag: "🇹🇳" },
  { name: "Turkey", code: "TR", flag: "🇹🇷" },

  { name: "Uganda", code: "UG", flag: "🇺🇬" },
  { name: "Ukraine", code: "UA", flag: "🇺🇦" },
  { name: "United Arab Emirates", code: "AE", flag: "🇦🇪" },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧" },
  { name: "United States", code: "US", flag: "🇺🇸" },
  { name: "Uruguay", code: "UY", flag: "🇺🇾" },
  { name: "Uzbekistan", code: "UZ", flag: "🇺🇿" },

  { name: "Venezuela", code: "VE", flag: "🇻🇪" },
  { name: "Vietnam", code: "VN", flag: "🇻🇳" },

  { name: "Yemen", code: "YE", flag: "🇾🇪" },
  { name: "Zambia", code: "ZM", flag: "🇿🇲" },
  { name: "Zimbabwe", code: "ZW", flag: "🇿🇼" },
];

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const searchRef = useRef(null);

  const filteredCountries =
    query.trim().length > 0
      ? countries
          .filter((country) =>
            country.name
              .toLowerCase()
              .startsWith(query.trim().toLowerCase())
          )
          .slice(0, 8)
      : [];

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setShowResults(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const value = query.trim();

    if (!value) return;

    setShowResults(false);

    onSearch(value);
  }

  function handleCountrySelect(country) {
    setQuery(country.name);
    setShowResults(false);

    onSearch(country.name);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 sm:flex-row"
    >
      <div
        ref={searchRef}
        className="relative flex-1"
      >
        {/* Search icon */}

        <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-xl text-slate-400">
          🔍
        </span>

        <input
          id="country-search"
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setShowResults(true);
          }}
          onFocus={() => {
            if (query.trim()) {
              setShowResults(true);
            }
          }}
          placeholder="Search for a country..."
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
            transition-all
            duration-200
            placeholder:text-slate-400
            focus:border-cyan-500
            focus:ring-4
            focus:ring-cyan-100
          "
        />

        {/* Country suggestions */}

        {showResults &&
          query.trim() &&
          filteredCountries.length > 0 && (
            <div
              className="
                absolute
                left-0
                right-0
                top-[calc(100%+8px)]
                z-50
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-1.5
                shadow-2xl
                shadow-slate-900/10
                animate-in
                fade-in
                slide-in-from-top-2
                duration-200
              "
            >
              {filteredCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() =>
                    handleCountrySelect(country)
                  }
                  className="
                    group
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    py-3
                    text-left
                    transition-all
                    duration-200
                    hover:bg-cyan-50
                    active:scale-[0.99]
                  "
                >
                  <span className="text-2xl">
                    {country.flag}
                  </span>

                  <span className="flex-1">
                    <span className="block text-sm font-semibold text-slate-800 group-hover:text-cyan-700">
                      {country.name}
                    </span>

                    <span className="text-xs text-slate-400">
                      {country.code}
                    </span>
                  </span>

                  <span className="text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-cyan-500">
                    →
                  </span>
                </button>
              ))}
            </div>
          )}

        {/* No results */}

        {showResults &&
          query.trim() &&
          filteredCountries.length === 0 && (
            <div
              className="
                absolute
                left-0
                right-0
                top-[calc(100%+8px)]
                z-50
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5
                py-6
                text-center
                shadow-2xl
              "
            >
              <div className="text-2xl">
                🌍
              </div>

              <p className="mt-2 text-sm font-semibold text-slate-700">
                Country not found
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Try another country name
              </p>
            </div>
          )}
      </div>

      {/* Search button */}

      <button
        type="submit"
        className="
          h-14
          rounded-2xl
          bg-cyan-600
          px-7
          font-semibold
          text-white
          shadow-lg
          shadow-cyan-600/20
          transition-all
          duration-200
          hover:bg-cyan-700
          hover:shadow-cyan-600/30
          active:scale-[0.98]
          sm:min-w-32
        "
      >
        Search
      </button>
    </form>
  );
}