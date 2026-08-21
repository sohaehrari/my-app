"use client"

import { useState } from "react"



export default function SearchBar({onSearch}){
    const[query,setQuery]=useState("")
    function handleSubmit(e){
        e.preventDefault();
if(!query.trim()){
    return;
}

onSearch=(query)


    }
    return(
        <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400">
              🔍
            </span>

            <input
              type="text"
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
              placeholder="Search for a city..."
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-white outline-none backdrop-blur-md transition placeholder:text-slate-500 focus:border-blue-500 focus:bg-white/10"
            />
          </div>

          <button type="submit" onClick={handleSubmit} className="h-14 rounded-2xl bg-blue-600 px-7 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 active:scale-[0.98] sm:w-auto">
            Search
          </button>
        </div>
      </form>
    )
}