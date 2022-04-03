import React from 'react'
import { Link } from 'react-router-dom'
import './AnimeCard.css'

export const AnimeCard = ({anime,rank}) => {
    return (
        <Link to={`/anime/${anime.mal_id}`} className='cardroot'>
            <h1 className='rank'>#{rank}</h1>
            <img src={anime.images.jpg.image_url} alt={anime.title} className="anime_img"/>
            <div className='content'>
                <p className='anime_title'>{anime.title}</p>
                <p>{anime.episodes===1 ? "Movie": anime.episodes===0 || anime.episodes===null ? "? episodes" : `${anime.episodes} episodes`}</p>
            </div>
            <div className='score_content'>
                <img className='score_img' alt="" src='https://www.pinclipart.com/picdir/big/33-337440_stars-star-transparent-background-star-clipart-png.png'/>
                <h1 className="score">{anime.score}</h1>
            </div>
        </Link>
    )
}