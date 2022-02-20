import React from 'react'
import './AnimeCard.css'

export const AnimeCard = ({anime,rank}) => {
    console.log(anime)
    return (
        <div className='cardroot'>
            <h1 className='rank'>#{rank}</h1>
            <img src={anime.main_picture.medium} alt={anime.title} height={200}/>
            <div className='content'>
                <a href={`https://myanimelist.net/anime/${anime.id}/`} className='anime_title' target={"_blank"}>{anime.title}</a>
                <p>{anime.num_episodes==1 ? "1 episode": anime.num_episodes==0 ? "? episodes" : `${anime.num_episodes} episodes`}</p>
            </div>
            <h1 className="score">{anime.mean}</h1>
        </div>
    )
}