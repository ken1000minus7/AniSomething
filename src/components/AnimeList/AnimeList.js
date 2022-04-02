import React from "react";
import { AnimeCard } from '../AnimeCard/AnimeCard'

export const AnimeList = ({animeList})=>{

  return (
      <div>
        {
          animeList.map((anime,i)=>{
            return <AnimeCard anime={anime} rank={i+1}/>
          })
        }
      </div>
  )
}