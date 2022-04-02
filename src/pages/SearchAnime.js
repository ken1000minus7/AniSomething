import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AnimeList } from "../components/AnimeList/AnimeList";
import { SearchBar } from "../components/SearchBar/SearchBar";

export const SearchAnime = ()=>{
    var localList = localStorage.getItem("searchList")
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
            <h1>Search Anime</h1>
            <SearchBar setQuery={setQuery} />
            {
                searchList ? <AnimeList animeList={searchList} />
                : <h1>No result</h1>
            }
        </div>
    )
}