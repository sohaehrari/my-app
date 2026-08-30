☁️ SKYORA
Modern Weather Dashboard
<p align="center"> <strong>Real-time weather. Clean interface. Anywhere in the world.</strong> </p> <p align="center"> A modern weather dashboard built with Next.js and React, designed to make weather information simple, visual, and enjoyable to explore. </p> <p align="center"> <a href="https://my-app-3n2h.vercel.app/"><strong>🌐 Live Demo</strong></a> &nbsp;&nbsp;•&nbsp;&nbsp; <a href="https://github.com/sohaehrari/my-app"><strong>💻 GitHub</strong></a> </p> <br /> <p align="center"> <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js" alt="Next.js" /> <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React" /> <img src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript" alt="JavaScript" /> <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" /> </p>
🌌 Preview
Skyora brings weather information together in a focused dashboard experience with current conditions, forecasts, weather details, and city search.

✦ About
Skyora is a weather dashboard created with a focus on modern frontend design, responsive layouts, and an intuitive user experience.

Search for a city anywhere in the world and explore its current weather conditions, hourly forecast, daily forecast, and additional weather information.

The interface is designed around a dark visual style with clear information hierarchy and reusable React components.

✨ Features
Feature	Description
🌡️	Current Weather	View the current temperature and weather condition for a selected city.
🌤️	Weather Conditions	Weather descriptions and corresponding weather icons.
🔎	City Search	Search for weather information by city.
🌍	Location Information	Display city and country information.
🕐	Hourly Forecast	Explore upcoming hourly temperatures and conditions.
📅	Daily Forecast	View upcoming daily weather and temperature information.
💧	Weather Details	View humidity, wind, pressure, and visibility data.
⚡	Dynamic Data	Weather information is retrieved dynamically through the weather API.
⏳	Loading Experience	Dedicated loading state while weather information is retrieved.
⚠️	Error Handling	User-friendly error state when weather data cannot be retrieved.
📱	Responsive Design	Designed for mobile, tablet, and desktop screens.
🏙️	Popular Cities	Quick access to London, Tokyo, Dubai, New York, Kabul, and Herat.
🔐	Authentication	Sign-in and sign-up interfaces with authentication API routes.

🎨 Design
Skyora follows a dark, modern, weather-inspired design language.

Visual Direction
┌──────────────────────────────────────────────────────────────┐
│                         SKYORA                               │
│                                                              │
│    Search a city...                              🔍          │
│                                                              │
│    ┌───────────────────────────────┐                         │
│    │                               │                         │
│    │          ☁️  18°              │     Weather Details     │
│    │          London               │                         │
│    │          Cloudy               │     💧 Humidity         │
│    │                               │     💨 Wind             │
│    └───────────────────────────────┘     ◉ Pressure          │
│                                                              │
│    HOURLY                                                     │
│    ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                │
│    │ 4PM │ │ 5PM │ │ 6PM │ │ 7PM │ │ 8PM │                │
│    │ ☀️  │ │ ☁️  │ │ ☁️  │ │ 🌧️ │ │ 🌧️ │                │
│    └─────┘ └─────┘ └─────┘ └─────┘ └─────┘                │
│                                                              │
│    7-DAY FORECAST                                            │
│    ────────────────────────────────────────────────────────  │
└──────────────────────────────────────────────────────────────┘

The visual system emphasizes:

Deep dark backgrounds
Cyan and blue accents
Strong contrast
Rounded weather cards
Clear typography
Responsive layouts
Focused information hierarchy
Smooth interface states
🧩 Tech Stack
Technology	Purpose
Next.js 16	Application framework and routing
React 19	UI development
JavaScript / JSX	Application source code
Tailwind CSS 4	Styling and responsive layouts
OpenWeatherMap API	Weather and forecast data
MongoDB	Database
Mongoose	MongoDB object modeling
Jose	JWT-related functionality
bcryptjs	Password hashing
Recharts	React charting
ESLint	Code quality
PostCSS	CSS processing

🏗️ Architecture
Skyora uses a component-based Next.js structure.

skyora/
│
├── app/
│   ├── api/
│   │   ├── auth/
│   │   ├── me/
│   │   └── weather/
│   │       └── route.js
│   │
│   ├── signin/
│   │   └── page.jsx
│   │
│   ├── signup/
│   │   └── page.jsx
│   │
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
│
├── components/
│   ├── CurrentWeather.jsx
│   ├── DailyForcast.jsx
│   ├── Footer.jsx
│   ├── HourlyForcast.jsx
│   ├── Navbar.jsx
│   ├── ProtectedRoute.jsx
│   ├── Searchbar.jsx
│   └── WeatherDetails.jsx
│
├── lib/
│   └── weather.js
│
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── tsconfig.json

🚀 Getting Started
Clone
git clone https://github.com/sohaehrari/my-app.git

Enter the project
cd my-app

Install dependencies
npm install

Configure environment variables
Create:

.env.local

Add your weather API key:

WEATHER_API_KEY=your_openweathermap_api_key

Run locally
npm run dev

Then open:

http://localhost:3000

🔐 Environment Variables
Skyora keeps API credentials outside the source code through environment variables.

WEATHER_API_KEY=your_api_key_here

Variable	Required	Purpose
WEATHER_API_KEY	✅	OpenWeatherMap API access

Security: Never commit .env.local or real API credentials to your repository.

📜 Scripts
Command	Description
npm run dev	Start the development server
npm run build	Build the application for production
npm run start	Start the production server
npm run lint	Run ESLint

📸 Screenshots
Dashboard
Search
Weather Details
Mobile
Add your screenshots to public/screenshots/ using the filenames above.

⚡ Performance & UX
Skyora currently includes several UX-focused behaviors:

Fresh weather requests using cache: "no-store"
Dedicated loading state during weather requests
Error handling for unsuccessful API requests
Empty-state content before a city is selected
Responsive Tailwind layouts
Separate current-weather and forecast requests
No artificial performance statistics are included because no benchmark results are currently documented.

🔮 Roadmap
Future improvements could include:

 ⭐ Favorite cities
 📍 Automatic location detection
 🌡️ Celsius / Fahrenheit switching
 📊 More detailed weather charts
 🌦️ Richer weather animations
 🌌 Dynamic weather backgrounds
 🔔 Weather alerts
 ♿ Accessibility improvements
 🧪 Automated testing
 ⚡ Further performance optimization
👨‍💻 Developer
[ADD YOUR NAME]
Frontend Developer

Platform	Profile
GitHub	[ADD YOUR GITHUB URL]
Portfolio	[ADD YOUR PORTFOLIO URL]
LinkedIn	[ADD YOUR LINKEDIN URL]

📄 License
No license file is currently included in the repository.

Add your preferred license before publishing the project as open source.

License: [ADD YOUR LICENSE]

☁️ Skyora
<p align="center"> <strong>Weather, wherever you are.</strong> </p> <p align="center"> Built with Next.js · React · Tailwind CSS · OpenWeatherMap </p> <p align="center"> <a href="https://my-app-3n2h.vercel.app/">🌐 Live Demo</a> · <a href="https://github.com/sohaehrari/my-app">⭐ GitHub Repository</a> </p>
