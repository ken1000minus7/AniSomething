import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import key from './key.json'
import { AnimeCard } from './AnimeCard';

function App() {

  const [dataReceived,setDataReceived]= useState(false)
  const [animeList,setAnimeList] = useState([])

  useEffect(()=>{
    fetch(`https://cors-anywhere.herokuapp.com/api.myanimelist.net:443/v2/anime/ranking?ranking_type=all&client_id=${key.id}&client_secret=${key.secret}`,
    {
      method:"GET",
      headers: { "X-MAL-CLIENT-ID": key.id,  "X-Requested-With": "XMLHttpRequest"
}
    })
    .then(response => response.json())
    .then(jsonResponse => setAnimeList(jsonResponse.data))
    .catch(error=> console.error(error))
    .finally(()=> setDataReceived(true))
  },[])
  return (
    <div className="App">
      <font size={100} className="sadgers">AniSomething</font>
      {
        dataReceived ? animeList.map((anime,i)=>{
          return <AnimeCard anime={anime.node} rank={anime.ranking.rank}/>
        }) : <h1>Loading...</h1>
      }
    </div>
  );
}

export default App;
