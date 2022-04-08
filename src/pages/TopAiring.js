import React,{useEffect,useState} from "react";
import { AnimeList } from "../components/AnimeList/AnimeList";
import { Loading } from "../components/Loading/Loading";

export const TopAiring = ()=>{

  const [dataReceived,setDataReceived]= useState(false)
  const [animeList,setAnimeList] = useState([])

  useEffect(()=>{
    fetch(`https://api.jikan.moe/v4/top/anime?filter=airing`,
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
        <h1>Top Airing</h1>
        {
          dataReceived ? <AnimeList animeList={animeList} /> : <Loading />
        }
      </div>
  )
}