import React from "react";
import { AnimeList } from "../components/AnimeList/AnimeList";

export const TopAiring = ()=>{

  return (
      <div>
         <AnimeList type="airing" limit={100}/>
      </div>
  )
}