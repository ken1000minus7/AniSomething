import React from "react";
import { AnimeList } from "../components/AnimeList/AnimeList";

export const TopMovie = ()=>{

  return (
      <div>
        <h1>Top Movies</h1>
        <AnimeList type="movie"/>
      </div>
  )
}