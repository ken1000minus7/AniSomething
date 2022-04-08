import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AnimeDetails } from "../components/AnimeDetails/AnimeDetails";
import { Loading } from "../components/Loading/Loading";

export const AnimePage = () => {
    const { id } = useParams()
    const [anime, setAnime] = useState(null)
    useEffect(() => {
        console.log(`https://api.jikan.moe/v4/anime/${id}`)
        fetch(`https://api.jikan.moe/v4/anime/${id}`,
            {
                method: "GET"
            })
            .then(response => response.json())
            .then(jsonResponse => { setAnime(jsonResponse.data); console.log(jsonResponse.data); })
            .catch(error => console.error(error))
            .finally(() => {
                console.log(anime)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="page">
            {anime ? <AnimeDetails anime={anime} /> : <Loading />}
        </div>
    )
}

