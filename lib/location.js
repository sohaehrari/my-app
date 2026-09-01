"use client";

import { useEffect, useState } from "react";

export default function LocationWeather() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `/api/weather?lat=${latitude}&lon=${longitude}`
          );

          const data = await response.json();

          if (!response.ok) {
            throw new Error(
              data.message || "Unable to get weather."
            );
          }

          setLocation(data);
          setError("");
        } catch (err) {
          console.error("LOCATION WEATHER ERROR:", err);

          setError(
            err.message || "Unable to load your local weather."
          );
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        console.error("GEOLOCATION ERROR:", err);

        switch (err.code) {
          case err.PERMISSION_DENIED:
            setError(
              "Location permission was denied. Please allow location access."
            );
            break;

          case err.POSITION_UNAVAILABLE:
            setError("Your location could not be determined.");
            break;

          case err.TIMEOUT:
            setError("Getting your location timed out.");
            break;

          default:
            setError("Unable to get your location.");
        }

        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-center">
        <p>Getting your location and weather...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-100 p-4 text-red-700">
        <p>{error}</p>
      </div>
    );
  }

  if (!location) {
    return null;
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-bold">
        Local Weather
      </h2>

      <div className="space-y-2">
        <p>
          <strong>Location:</strong>{" "}
          {location.city || location.name || "Your location"}
        </p>

        {location.temperature !== undefined && (
          <p>
            <strong>Temperature:</strong>{" "}
            {location.temperature}°C
          </p>
        )}

        {location.description && (
          <p>
            <strong>Weather:</strong>{" "}
            {location.description}
          </p>
        )}

        {location.humidity !== undefined && (
          <p>
            <strong>Humidity:</strong>{" "}
            {location.humidity}%
          </p>
        )}

        {location.windSpeed !== undefined && (
          <p>
            <strong>Wind:</strong>{" "}
            {location.windSpeed} km/h
          </p>
        )}
      </div>
    </div>
  );
}
