

import "./globals.css"
import {demoWeather} from "@/lib/weather.js"



export default function Home(){
  return(
    <div>
      <div>
        <h1>Weclome to Weather_Dashboard</h1>
        <p>{demoWeather.country},{demoWeather.city}</p>
        <p>{demoWeather.current.temperature}</p>
        <p>{demoWeather.current.condition}</p>


      </div>
    </div>
  )
}