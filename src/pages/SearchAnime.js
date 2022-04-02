import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AnimeList } from "../components/AnimeList/AnimeList";
import { SearchBar } from "../components/SearchBar/SearchBar";

export const SearchAnime = ()=>{
    const [searchList,setSearchList] = useState("")
    const [query,setQuery] = useState(null)

    useEffect(()=>{
        fetch(`https://api.jikan.moe/v4/anime?q=${query}`)
        .then(response => response.json())
        .then(jsonResponse => setSearchList(jsonResponse.data))
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