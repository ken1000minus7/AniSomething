import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const AnimePage = () => {
    const { id } = useParams()
    const [anime, setAnime] = useState(null)
    const [dataReceived, setDataReceived] = useState(false)
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
                setDataReceived(true)
                console.log(anime)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>

            {anime ? <div><img src={anime.images.jpg.image_url} alt={anime.title} />
                <h1>{anime.title}</h1>
                <h2>{anime.synopsis}</h2></div> : <h1>Loading...</h1>}

        </div>
    )
}

