import React from "react";
import { AnimeList } from "../components/AnimeList/AnimeList";

export const TopAnime = ()=>{

  return (
      <div>
        <h1>Top Anime</h1>
        <AnimeList type="tv"/>
      </div>
  )
}