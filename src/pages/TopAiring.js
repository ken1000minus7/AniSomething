import React from "react";
import { AnimeList } from "../components/AnimeList/AnimeList";

export const TopAiring = ()=>{

  return (
      <div>
        <h1>Top Airing</h1>
        <AnimeList filter="airing" limit={100}/>
      </div>
  )
}