import React from "react";
import { AnimeList } from "../components/AnimeList/AnimeList";

export const TopAiring = ()=>{

  return (
      <div>
         <AnimeList filter="airing" limit={100}/>
      </div>
  )
}