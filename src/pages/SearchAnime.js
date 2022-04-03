import React, { useEffect, useState } from "react";
import { AnimeList } from "../components/AnimeList/AnimeList";
import { SearchBar } from "../components/SearchBar/SearchBar";

export const SearchAnime = ()=>{
    var localList = localStorage.getItem("searchList")
    if(localList==="undefined")
    {
        localStorage.clear()
        localList=null
    }
    var localQuery = localStorage.getItem("searchQuery")
    const [searchList,setSearchList] = useState(localList ? JSON.parse(localList) : null)
    const [query,setQuery] = useState(localQuery ? localQuery : null)

    useEffect(()=>{
        if(query==null) return;
        localStorage.setItem("searchQuery",query)
        fetch(`https://api.jikan.moe/v4/anime?q=${query}`)
        .then(response => response.json())
        .then(jsonResponse => {
            setSearchList(jsonResponse.data)
            localStorage.setItem("searchList",JSON.stringify(jsonResponse.data))
            console.log(localStorage.getItem("searchList"))
        })
        .catch(error => console.error(error))
    },[query])
    return (
        <div>
            <SearchBar setQuery={setQuery} />
            {
                query && query!=="" && searchList && searchList.length>0 ? <AnimeList animeList={searchList} />
                :( (!query || query==="") && (!searchList || searchList.length===0) ? (
                    <div>
                        <h1>Search Anime</h1>
                        <img alt={""} height="350" src="https://www.pinclipart.com/picdir/big/149-1490404_clipart-computer-magnifying-glass-anime-magnifying-glass-png.png" />
                    </div>
                ) : <h1>No Result</h1> )
            }
        </div>
    )
}