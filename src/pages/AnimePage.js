import React from "react";

export const AnimePage=({anime})=>{
    return (
        <div>
            <img src={anime.main_picture ? anime.main_picture.medium : ""} alt={anime.title} />
            <div>
                <h1>{anime.title}</h1>
                <h2>{anime.synopsis}</h2>
            </div>
        </div>
    )
}