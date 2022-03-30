import React from 'react'
import './AnimeCard.css'

export const AnimeCard = ({anime}) => {
    console.log(anime)
    return (
        <div className='cardroot'>
            <h1 className='rank'>#{anime.rank}</h1>
            <img src={anime.images.jpg.image_url} alt={anime.title} className="anime_img"/>
            <div className='content'>
                <a href={`https://myanimelist.net/anime/${anime.mal_id}/`} className='anime_title' target={"_blank"} rel="noreferrer">{anime.title}</a>
                <p>{anime.episodes===1 ? "Movie": anime.episodes===0 ? "? episodes" : `${anime.episodes} episodes`}</p>
            </div>
            <div className='score_content'>
                <img className='score_img' alt="" src='https://www.pinclipart.com/picdir/big/33-337440_stars-star-transparent-background-star-clipart-png.png'/>
                <h1 className="score">{anime.score}</h1>
            </div>
        </div>
    )
}