import React,{useState,useEffect} from "react";
import { AnimeCard } from '../AnimeCard/AnimeCard'
import key from '../../key.json'

export const AnimeList = ({type,limit=500})=>{
  const [dataReceived,setDataReceived]= useState(false)
  const [animeList,setAnimeList] = useState([])

  useEffect(()=>{
    fetch(`https://cors-anywhere.herokuapp.com/api.myanimelist.net:443/v1/anime/ranking?ranking_type=${type}&limit=${limit}&fields=id,name,main_picture,synopsis,num_episodes,mean&client_id=${key.id}&client_secret=${key.secret}`,
    {
      method:"GET",
      headers: { "X-MAL-CLIENT-ID": key.id,  "X-Requested-With": "XMLHttpRequest"}
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
          return <AnimeCard anime={anime.node} rank={anime.ranking.rank}/>
        }) : <h1>Loading...</h1>
        }
      </div>
  )
}