import React from 'react'
import './AnimeCard.css'

export const AnimeCard = ({anime,rank}) => {
    return (
        <div className='cardroot'>
            <h1 className='rank'>#{rank}</h1>
            <img src={anime.main_picture.medium} alt={anime.title} height={200}/>
            <div className='content'>
                <h1>{anime.title}</h1>
            </div>
            <h1>{anime.rating}</h1>
        </div>
    )
}