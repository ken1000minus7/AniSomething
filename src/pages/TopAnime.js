import React,{useState,useEffect} from "react";
import { AnimeList } from "../components/AnimeList/AnimeList";
import { Loading } from "../components/Loading/Loading";

export const TopAnime = ()=>{
  const [dataReceived,setDataReceived]= useState(false)
  const [animeList,setAnimeList] = useState([])

  useEffect(()=>{
    fetch(`https://api.jikan.moe/v4/top/anime?type=tv`,
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
        <h1>Top Anime</h1>
        {
          dataReceived ? <AnimeList animeList={animeList} /> : <Loading />
        }
      </div>
  )
}