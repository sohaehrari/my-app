"use client";

import { useCallback, useEffect, useState } from "react";
import {
  AlertCircle,
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Droplets,
  Gauge,
  Loader2,
  MapPin,
  RefreshCw,
  Sun,
  Wind,
} from "lucide-react";

/* =========================================================
   WEATHER ICON
========================================================= */

function WeatherIcon({ condition, size = 40 }) {
  const value = condition?.toLowerCase() || "";

  const props = {
    size,
    strokeWidth: 1.6,
  };

  if (value.includes("thunder")) {
    return (
      <CloudLightning
        {...props}
        className="text-violet-500"
      />
    );
  }

  if (value.includes("rain")) {
    return (
      <CloudRain
        {...props}
        className="text-blue-500"
      />
    );
  }

  if (value.includes("drizzle")) {
    return (
      <CloudDrizzle
        {...props}
        className="text-sky-500"
      />
    );
  }

  if (value.includes("snow")) {
    return (
      <CloudSnow
        {...props}
        className="text-cyan-500"
      />
    );
  }

  if (
    value.includes("mist") ||
    value.includes("fog") ||
    value.includes("haze")
  ) {
    return (
      <CloudFog
        {...props}
        className="text-slate-400"
      />
    );
  }

  if (value.includes("cloud")) {
    return (
      <Cloud
        {...props}
        className="text-slate-500"
      />
    );
  }

  return (
    <Sun
      {...props}
      className="text-amber-500"
    />
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function LocationWeather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  /* =======================================================
     LOAD WEATHER
  ======================================================= */

  const loadWeather = useCallback(() => {
    setError("");
    setRefreshing(true);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");

      setLoading(false);
      setRefreshing(false);

      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } =
          position.coords;

        try {
          const response = await fetch(
            `/api/weather?lat=${latitude}&lon=${longitude}`,
            {
              method: "GET",
              headers: {
                Accept: "application/json",
              },
              cache: "no-store",
            }
          );

          const data = await response.json();

          if (!response.ok) {
            throw new Error(
              data?.error ||
                data?.message ||
                "Unable to load weather."
            );
          }

          if (!data?.success) {
            throw new Error(
              data?.error ||
                "Weather data unavailable."
            );
          }

          setWeather({
            ...data,
            latitude,
            longitude,
          });

          setError("");
        } catch (err) {
          console.error(
            "LOCATION WEATHER ERROR:",
            err
          );

          setError(
            err instanceof Error
              ? err.message
              : "Unable to load weather."
          );
        } finally {
          setLoading(false);
          setRefreshing(false);
        }
      },

      (geoError) => {
        console.error(
          "GEOLOCATION ERROR:",
          geoError
        );

        switch (geoError.code) {
          case geoError.PERMISSION_DENIED:
            setError(
              "Location permission denied."
            );
            break;

          case geoError.POSITION_UNAVAILABLE:
            setError(
              "Your location is unavailable."
            );
            break;

          case geoError.TIMEOUT:
            setError(
              "Location request timed out."
            );
            break;

          default:
            setError(
              "Unable to determine your location."
            );
        }

        setLoading(false);
        setRefreshing(false);
      },

      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 300000,
      }
    );
  }, []);

  /* =======================================================
     INITIAL LOAD
  ======================================================= */

  useEffect(() => {
    loadWeather();
  }, [loadWeather]);

  /* =======================================================
     LOADING
  ======================================================= */

  if (loading) {
    return (
      <div className="weather-loading w-full max-w-[340px]">
        <div className="weather-card p-5">
          <div className="flex items-center gap-3">
            <div className="weather-location-icon flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
              <Loader2
                size={18}
                className="weather-loader text-amber-500"
              />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-amber-500">
                Weather
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Finding your location...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =======================================================
     ERROR
  ======================================================= */

  if (error) {
    return (
      <div className="weather-error w-full max-w-[340px]">
        <div className="weather-card p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50">
              <AlertCircle
                size={16}
                className="text-red-500"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-slate-800">
                Weather unavailable
              </p>

              <p className="mt-1 text-[10px] leading-4 text-slate-400">
                {error}
              </p>

              <button
                onClick={loadWeather}
                className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold text-amber-600 transition-colors duration-200 hover:text-amber-700"
              >
                <RefreshCw size={11} />
                Try again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!weather) {
    return null;
  }

  /* =======================================================
     WEATHER CARD
  ======================================================= */

  return (
    <div className="w-full max-w-[340px]">
      <div className="weather-card group">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="relative flex items-center justify-between px-5 pt-5">
          <div className="flex min-w-0 items-center gap-2.5">
            <div className="weather-location-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50">
              <MapPin
                size={14}
                className="weather-pin text-amber-500"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-slate-400">
                Current Location
              </p>

              <div className="mt-0.5 flex items-center gap-1.5">
                <p className="truncate text-xs font-semibold text-slate-800">
                  {weather.city}
                </p>

                {weather.country && (
                  <span className="shrink-0 rounded bg-slate-100 px-1 py-0.5 text-[7px] font-semibold uppercase tracking-wider text-slate-400">
                    {weather.country}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Refresh */}

          <button
            onClick={loadWeather}
            disabled={refreshing}
            aria-label="Refresh weather"
            className="weather-refresh flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 disabled:opacity-50"
          >
            <RefreshCw
              size={12}
              className={
                refreshing
                  ? "weather-loader"
                  : ""
              }
            />
          </button>
        </div>

        {/* =================================================
            MAIN WEATHER
        ================================================= */}

        <div className="relative flex items-center justify-between px-5 py-6">
          {/* Temperature */}

          <div className="weather-temperature">
            <div className="flex items-start">
              <span className="text-[68px] font-extralight leading-[0.8] tracking-[-0.08em] text-slate-900">
                {weather.temperature}
              </span>

              <span className="weather-degree ml-1 text-2xl font-light text-amber-500">
                °
              </span>
            </div>
          </div>

          {/* Condition */}

          <div className="weather-condition flex flex-col items-end">
            <div className="weather-icon-box flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50">
              <div className="weather-icon">
                <WeatherIcon
                  condition={weather.condition}
                  size={40}
                />
              </div>
            </div>

            <p className="mt-2 max-w-[120px] text-right text-[11px] font-medium capitalize text-slate-600">
              {weather.description}
            </p>

            <p className="mt-0.5 text-[9px] text-slate-400">
              Feels like{" "}
              <span className="font-semibold text-slate-600">
                {weather.feelsLike}°
              </span>
            </p>
          </div>
        </div>

        {/* =================================================
            QUICK STATS
        ================================================= */}

        <div className="grid grid-cols-3 border-t border-slate-100 bg-slate-50/60">
          {/* Humidity */}

          <div className="weather-stat flex flex-col items-center justify-center gap-1 border-r border-slate-100 py-3">
            <Droplets
              size={13}
              className="weather-stat-icon text-blue-500"
            />

            <p className="text-[8px] uppercase tracking-wider text-slate-400">
              Humidity
            </p>

            <p className="text-[11px] font-semibold text-slate-700">
              {weather.humidity}%
            </p>
          </div>

          {/* Wind */}

          <div className="weather-stat flex flex-col items-center justify-center gap-1 border-r border-slate-100 py-3">
            <Wind
              size={13}
              className="weather-stat-icon text-cyan-500"
            />

            <p className="text-[8px] uppercase tracking-wider text-slate-400">
              Wind
            </p>

            <p className="text-[11px] font-semibold text-slate-700">
              {weather.wind}
              <span className="ml-0.5 text-[8px] font-normal text-slate-400">
                km/h
              </span>
            </p>
          </div>

          {/* Pressure */}

          <div className="weather-stat flex flex-col items-center justify-center gap-1 py-3">
            <Gauge
              size={13}
              className="weather-stat-icon text-amber-500"
            />

            <p className="text-[8px] uppercase tracking-wider text-slate-400">
              Pressure
            </p>

            <p className="text-[11px] font-semibold text-slate-700">
              {weather.pressure}
            </p>
          </div>
        </div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="flex items-center justify-between px-5 py-3">
          <p className="text-[8px] text-slate-300">
            Live local weather
          </p>

          <div className="flex items-center gap-1.5">
            <span className="weather-live-dot" />

            <span className="text-[8px] font-semibold uppercase tracking-wider text-emerald-500">
              Live
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}