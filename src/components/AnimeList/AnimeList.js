import React,{useState,useEffect} from "react";
import { AnimeCard } from '../AnimeCard/AnimeCard'

export const AnimeList = ({type="",limit=500,filter=""})=>{
  const [dataReceived,setDataReceived]= useState(false)
  const [animeList,setAnimeList] = useState([])

  useEffect(()=>{
    fetch(`https://api.jikan.moe/v4/top/anime?type=${type}&limit=${limit}&filter=${filter}`,
    {
      method:"GET"
    })
    .then(response => response.json())
    .then(jsonResponse => setAnimeList(jsonResponse.data))
    .catch(error=> console.error(error))
    .finally(()=> setDataReceived(true))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
      <div>
          {
        dataReceived ? animeList.map((anime,i)=>{
          return <AnimeCard anime={anime} rank={i+1}/>
        }) : <h1>Loading...</h1>
        }
      </div>
  )
}