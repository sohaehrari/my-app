<div align="center"> <img src="https://capsule-render.vercel.app/api?type=waving&color=0:050812,50:0EA5E9,100:22D3EE&height=230&section=header&text=Weatherly&fontSize=65&fontColor=FFFFFF&animation=twinkling&fontAlignY=40&desc=Modern%20Weather%20Dashboard&descAlignY=62&descSize=20" width="100%"/> <br/> <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=22&duration=3000&pause=1000&color=22D3EE&center=true&vCenter=true&width=750&lines=Real-time+weather+at+a+glance;Beautiful+forecasts+for+every+day;Responsive+weather+experience;Built+with+Next.js+%26+React" />
<br/><br/>

<img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" /> <img src="https://img.shields.io/badge/React-19-149eca?style=for-the-badge&logo=react" /> <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss" /> <img src="https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<br/><br/>

☁️ Weatherly — Know the weather. Plan with confidence.

</div>
🌦️ About Weatherly
Weatherly is a modern weather dashboard designed to make weather information beautiful, fast, and easy to understand.

It combines real-time weather data with a premium dark interface, responsive layouts, smooth animations, and an intuitive dashboard experience.

<div align="center">
       🌤️
    ┌───────────┐
    │    24°    │
    │  Clear    │
    └─────┬─────┘
          │
    ┌─────┼─────┐
    ▼     ▼     ▼
   💧     💨     ☀️
  48%   12km/h   UV 3
          │
          ▼
    ┌───────────┐
    │ Forecast  │
    │ ☀️ 🌤️ 🌧️ │
    └───────────┘

</div>
✨ Features
<div align="center">
🌡️ Current Weather	📅 Forecast
Temperature	Daily forecast
Feels like	Weather conditions
Humidity	Temperature trends
Wind	Precipitation

🔎 Location Search	🔐 Authentication
Search cities	Sign up
Location weather	Sign in
Switch locations	Account experience
Fast results	Secure API

</div>
🎨 Premium UI
Weatherly uses a modern visual language inspired by weather applications and premium SaaS products.

┌───────────────────────────────────────────────────────────┐
│ ☁️ Weatherly                    Search       👤 Account   │
├───────────────────────────────────────────────────────────┤
│                                                           │
│     📍 Your Location                                      │
│                                                           │
│              ☀️                                           │
│                                                           │
│             24°                                           │
│         Partly Cloudy                                     │
│                                                           │
│     💧 48%       💨 12 km/h       👁️ 10 km               │
│                                                           │
├───────────────────────────────────────────────────────────┤
│                                                           │
│                    7 DAY FORECAST                         │
│                                                           │
│   ☀️        🌤️        🌧️        ⛈️        ☀️        🌙    │
│  Mon       Tue       Wed       Thu       Fri       Sat   │
│  24°       26°       21°       20°       27°       19°   │
│                                                           │
└───────────────────────────────────────────────────────────┘

Design highlights
🌑 Premium dark theme
💎 Glassmorphism cards
🌈 Cyan and blue gradients
✨ Smooth hover transitions
🌤️ Weather-focused visuals
📱 Mobile-first responsiveness
🎯 Clear information hierarchy
🖼️ Screenshots
🌤️ Dashboard
<div align="center"> <img src="./public/screenshots/dashboard.png" width="900" alt="Weatherly Dashboard"/> </div>
📱 Mobile
<div align="center"> <img src="./public/screenshots/mobile.png" width="320" alt="Weatherly Mobile Dashboard"/> </div>
Add your screenshots to public/screenshots/.

⚡ Interactive Experience
<div align="center"> <img src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif" width="700" alt="Weather animation"/> <br/>
Search → Discover → Understand → Plan
</div>
Replace the GIF above with a screen recording of your actual Weatherly dashboard for the best GitHub presentation.

🧩 Tech Stack
<div align="center">
Technology	Usage
⚡ Next.js 16	Full-stack React framework
⚛️ React 19	UI components
🎨 Tailwind CSS 4	Responsive styling
🟨 JavaScript	Application logic
🌐 Weather API	Weather information
🔐 Next.js API Routes	Backend endpoints
📦 npm	Package management
🐙 Git	Version control

</div>
🏗️ Architecture
                         ┌──────────────────┐
                         │      USER        │
                         └────────┬─────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │       Next.js           │
                    │                         │
                    │  ┌───────────────────┐  │
                    │  │    React UI       │  │
                    │  └─────────┬─────────┘  │
                    │            │            │
                    │  ┌─────────▼─────────┐  │
                    │  │   API Routes      │  │
                    │  └─────────┬─────────┘  │
                    └────────────┼────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │       Weather API       │
                    └─────────────────────────┘

📁 Project Structure
weatherly/
│
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── signup/
│   │           └── route.js
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
│   ├── WeatherCard.jsx
│   ├── Forecast.jsx
│   ├── SearchBar.jsx
│   └── ...
│
├── public/
│   ├── screenshots/
│   │   ├── dashboard.png
│   │   └── mobile.png
│   │
│   └── icons/
│
├── .env.local
├── package.json
├── next.config.js
└── README.md

🚀 Getting Started
1. Clone the repository
git clone https://github.com/YOUR_USERNAME/weatherly.git
cd weatherly

2. Install dependencies
npm install

3. Configure environment variables
Create a .env.local file:

WEATHER_API_KEY=your_api_key_here

Never expose private API keys in client-side code or commit .env.local to GitHub.

4. Run the development server
npm run dev

Open:

http://localhost:3000

🔐 Authentication
Weatherly includes a dedicated authentication experience.

Routes
/signin
/signup

Signup API
POST /api/auth/signup

Example request:

{
  "name": "Alex Morgan",
  "email": "alex@example.com",
  "password": "your-password"
}

Example response:

{
  "success": true,
  "message": "Account created successfully."
}

📱 Responsive Design
Weatherly is built to work across all modern screen sizes.

<div align="center">
        MOBILE                 TABLET                 DESKTOP

   ┌─────────────┐       ┌────────────────┐     ┌─────────────────────────┐
   │ ☁️ Weatherly│       │ ☁️ Weatherly   │     │ ☁️ Weatherly    👤     │
   ├─────────────┤       ├────────────────┤     ├─────────────────────────┤
   │             │       │                │     │                         │
   │   ☀️ 24°    │       │    ☀️ 24°      │     │       ☀️ 24°             │
   │             │       │                │     │                         │
   ├─────────────┤       ├────────────────┤     ├────────────┬────────────┤
   │  Forecast   │       │   Forecast     │     │  Details   │  Forecast  │
   ├─────────────┤       ├────────────────┤     └────────────┴────────────┘
   │    ☀️ 🌧️    │       │   ☀️ 🌤️ 🌧️     │
   └─────────────┘       └────────────────┘

</div>
📊 Weather Information
Weatherly is designed to present the most useful weather information without unnecessary complexity.

CURRENT
├── 🌡️ Temperature
├── 🌡️ Feels Like
├── 💧 Humidity
├── 💨 Wind Speed
├── 👁️ Visibility
└── ☀️ UV Index

FORECAST
├── 📅 Today
├── 📅 Tomorrow
├── 📅 Upcoming Days
├── 🌧️ Precipitation
└── 🌡️ Temperature Trends

🛣️ Roadmap
Completed
 🎨 Premium weather dashboard
 📱 Responsive layout
 🌤️ Weather interface
 🔎 Location search
 🔐 Signup page
 🔑 Sign-in page
 🔌 Authentication API
Coming Soon
 🌍 Automatic geolocation
 ⭐ Favorite locations
 📍 Saved cities
 🌡️ Celsius / Fahrenheit switch
 📊 Weather charts
 🌧️ Precipitation visualization
 🌅 Sunrise and sunset
 🔔 Severe weather alerts
 📱 PWA support
 👤 User profiles
 🗄️ Persistent weather preferences
🔒 Security
For production deployment:

🔐 Keep API keys in environment variables
🔒 Hash passwords before storing them
🛡️ Validate requests server-side
🚫 Never expose private credentials
🔑 Use secure authentication sessions
🌐 Use HTTPS in production
⚡ Add rate limiting to authentication endpoints
🧪 Error Handling
Weatherly handles:

Invalid locations
Failed API requests
Empty form fields
Password mismatch
Weak passwords
Authentication errors
Loading states
Server errors
Unexpected API responses
API endpoints should consistently return JSON:

{
  "success": false,
  "message": "Something went wrong."
}

🤝 Contributing
Contributions are welcome.

git checkout -b feature/new-feature

git add .

git commit -m "Add new feature"

git push origin feature/new-feature

Open a Pull Request once your changes are ready.

📄 License
This project is currently intended for personal and educational use.

Add an appropriate open-source license before distributing the project publicly.

🌟 Support
If you like Weatherly:

⭐ Star the repository
🍴 Fork the project
🐛 Report bugs
💡 Suggest features
🤝 Contribute improvements
<div align="center">
☁️ Weatherly
Know the weather. Plan with confidence.
<br/> <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=500&size=18&duration=3500&pause=1000&color=94A3B8&center=true&vCenter=true&width=600&lines=Built+for+better+weather+decisions.;Designed+with+clarity.;Powered+by+modern+web+technology." />
<br/><br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:22D3EE,50:0EA5E9,100:050812&height=130&section=footer" width="100%"/> </div>
