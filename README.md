<div align="center">
☁️ Weather Dashboard
Weather, wherever you are.
A beautiful, responsive weather experience for exploring
current conditions, hourly forecasts, and daily outlooks around the world.

<br/> <a href="https://my-app-3n2h.vercel.app/"> <img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Weather_Dashboard-0EA5E9?style=for-the-badge&labelColor=07111F" alt="Live Demo"/> </a> <a href="https://github.com/sohaehrari/my-app"> <img src="https://img.shields.io/badge/💻_Source_Code-GitHub-18181B?style=for-the-badge&logo=github" alt="GitHub"/> </a>
<br/><br/>

<img src="https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white"/> <img src="https://img.shields.io/badge/React-19-149eca?style=flat-square&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/> <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=flat-square&logo=vercel"/>
<br/><br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:07111F,50:0EA5E9,100:22D3EE&height=180&section=header&animation=twinkling" width="100%"/> </div>
🌤️ The Experience
Weather Dashboard is a modern weather application focused on making weather information simple, beautiful, and useful.

Search any city in the world and instantly explore its weather conditions, hourly forecast, and upcoming daily outlook.

<div align="center">
                     ☁️ WEATHER DASHBOARD

                         📍 Your City

                            ☀️
                           24°C
                       Partly Cloudy

             ┌──────────┬──────────┬──────────┐
             │    💧    │    💨    │    👁️    │
             │   48%    │  12 km/h │   10 km  │
             │ Humidity │   Wind   │Visibility│
             └──────────┴──────────┴──────────┘

                    HOURLY FORECAST

             ☀️        🌤️        ☀️        🌙
            24°       25°       26°       21°
            Now       2 PM      5 PM       8 PM

                     DAILY OUTLOOK

        ☀️        🌤️        🌧️        ☀️        🌙
       Mon       Tue       Wed       Thu       Fri
       24°       26°       21°       27°       19°

</div>
✨ Features
<table> <tr> <td width="50%" valign="top">
🔎 City Search
Search for weather anywhere in the world.

Search by city
Fast results
Clean search experience
Quick-access locations
</td> <td width="50%" valign="top">
🌡️ Current Conditions
Get the information that matters immediately.

Current temperature
Weather condition
Feels-like temperature
Weather details
</td> </tr> <tr> <td width="50%" valign="top">
⏱️ Hourly Forecast
Understand how weather changes throughout the day.

Hour-by-hour conditions
Temperature trends
Weather icons
Easy visual scanning
</td> <td width="50%" valign="top">
📅 Daily Forecast
Plan ahead with a clear daily outlook.

Upcoming days
Daily temperatures
Weather conditions
Forecast overview
</td> </tr> <tr> <td width="50%" valign="top">
📱 Responsive
Designed to work beautifully across devices.

Mobile
Tablet
Laptop
Desktop
Large displays
</td> <td width="50%" valign="top">
🎨 Modern Interface
A clean visual system designed around weather.

Dark interface
Cyan accents
Glass-style cards
Smooth transitions
Responsive layouts
</td> </tr> </table>
🖥️ Live Preview
<div align="center"> <a href="https://my-app-3n2h.vercel.app/">
🌐 Open Weather Dashboard
https://my-app-3n2h.vercel.app/

</a> <br/> <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=18&duration=2800&pause=900&color=22D3EE&center=true&vCenter=true&width=650&lines=Search+any+city.;Explore+hourly+weather.;Check+the+daily+forecast.;Plan+your+day+with+confidence." alt="Weather Dashboard animation"/> </div>
🖼️ Dashboard
<div align="center"> <img src="./public/screenshots/dashboard.png" width="900" alt="Weather Dashboard"/> </div>
Tip: Put a real screenshot of your deployed dashboard at:

public/screenshots/dashboard.png

A real screenshot of your own application will make this README look substantially more professional than a generic weather image.

📱 Responsive Experience
<div align="center">
Desktop
<img src="./public/screenshots/desktop.png" width="850" alt="Weather Dashboard Desktop"/>
<br/><br/>

Mobile
<img src="./public/screenshots/mobile.png" width="320" alt="Weather Dashboard Mobile"/> </div>
🌍 Explore Popular Cities
The application provides quick access to popular locations so users can explore weather without manually entering a city.

<div align="center">
🇬🇧 London	🇯🇵 Tokyo	🇦🇪 Dubai
🌦️	🌤️	☀️

🇺🇸 New York	🇦🇫 Kabul	🇦🇫 Herat
🌤️	☀️	🌤️

</div>
🧠 How It Works
                         USER
                           │
                           ▼
                  ┌────────────────┐
                  │   City Search  │
                  └───────┬────────┘
                          │
                          ▼
                  ┌────────────────┐
                  │ Weather Service│
                  └───────┬────────┘
                          │
             ┌────────────┼────────────┐
             ▼            ▼            ▼
        CURRENT        HOURLY        DAILY
        WEATHER        FORECAST      FORECAST
             │            │            │
             └────────────┼────────────┘
                          ▼
                  ┌────────────────┐
                  │  Weather UI    │
                  └────────────────┘

🛠️ Built With
<div align="center">
Frontend
Next.js · React · Tailwind CSS · JavaScript

Application
Next.js App Router · React Components

Deployment
Vercel

Development
Git · GitHub · npm

</div>
📁 Project Architecture
my-app/
│
├── app/
│   ├── api/
│   │   └── ...
│   │
│   ├── signin/
│   │   └── page.jsx
│   │
│   ├── signup/
│   │   └── page.jsx
│   │
│   ├── page.jsx
│   ├── layout.jsx
│   └── globals.css
│
├── components/
│   └── ...
│
├── lib/
│   └── ...
│
├── public/
│   ├── screenshots/
│   │   ├── dashboard.png
│   │   ├── desktop.png
│   │   └── mobile.png
│   │
│   └── ...
│
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md

🚀 Run Locally
Clone the project:

git clone https://github.com/sohaehrari/my-app.git

Enter the project:

cd my-app

Install dependencies:

npm install

Start the development server:

npm run dev

Then open:

http://localhost:3000

🔐 Environment Variables
Create a .env.local file in the root of the project.

WEATHER_API_KEY=your_api_key_here

Do not commit private API keys or credentials to GitHub.

📜 Available Scripts
Development
npm run dev

Production build
npm run build

Production server
npm start

Lint
npm run lint

🎯 Design Philosophy
Weather information can become overwhelming very quickly.

This project follows three simple principles:

01 — Clarity
Show the most important information first.

02 — Simplicity
Keep the interface easy to understand without removing useful information.

03 — Atmosphere
Use color, spacing, gradients, and subtle motion to make the interface feel connected to the weather.

🗺️ Roadmap
Current
 🌤️ Weather dashboard
 🔎 City search
 🌡️ Current weather
 ⏱️ Hourly forecast
 📅 Daily forecast
 📱 Responsive interface
 🌍 Worldwide city search
 🚀 Vercel deployment
Planned
 📍 Automatic location detection
 ⭐ Favorite cities
 💾 Saved locations
 🌡️ Celsius / Fahrenheit switch
 📊 Temperature charts
 🌧️ Precipitation visualization
 🌅 Sunrise & sunset
 🔔 Severe weather alerts
 🌙 Dynamic weather backgrounds
 📱 Progressive Web App
 🔐 Complete user accounts
⚡ Performance
The application is built with modern Next.js architecture and is deployed on Vercel.

The project focuses on:

Fast page loading
Responsive rendering
Component-based UI
Efficient weather requests
Clean client/server separation
Mobile-friendly interactions
🔗 Project Links
<div align="center">
🌐 Live Application
<a href="https://my-app-3n2h.vercel.app/">
my-app-3n2h.vercel.app

</a> <br/>
💻 GitHub Repository
<a href="https://github.com/sohaehrari/my-app">
github.com/sohaehrari/my-app

</a> </div>
👨‍💻 Author
<div align="center">
Sohae R.
Building modern web experiences with
Next.js · React · JavaScript · Tailwind CSS

<br/> <a href="https://github.com/sohaehrari"> <img src="https://img.shields.io/badge/GitHub-sohaehrari-18181B?style=for-the-badge&logo=github"/> </a> </div>
⭐ Support the Project
If you find this project interesting:

⭐ Star the repository

🍴 Fork the project

🐛 Report an issue

💡 Suggest an improvement

<div align="center"> <br/>
☁️ Weather Dashboard
Weather, wherever you are.
<br/> <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=500&size=16&duration=3000&pause=1000&color=64748B&center=true&vCenter=true&width=550&lines=Built+with+Next.js.;Designed+with+purpose.;Made+for+the+weather." alt="Footer animation"/>
<br/><br/>

<a href="https://my-app-3n2h.vercel.app/">
🌐 Live Demo

</a>
  •  

<a href="https://github.com/sohaehrari/my-app">
💻 Source Code

</a>
<br/><br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:22D3EE,50:0EA5E9,100:07111F&height=140&section=footer" width="100%"/> </div>
