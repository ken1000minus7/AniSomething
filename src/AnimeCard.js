import React from 'react'
import './AnimeCard.css'

export const AnimeCard = ({anime,rank}) => {
    return (
        <div className='cardroot'>
            <h1 className='rank'>#{rank}</h1>
            <img src={anime.main_picture.medium} alt={anime.title} height={200}/>
            <div className='content'>
                <h1>{anime.title}</h1>
                {/* <p>{anime.num_episodes==1 ? "1 episode": `${anime.num_episodes} episodes`}</p> */}
            </div>
            <h1>{anime.mean}</h1>
        </div>
    )
}