import React from "react";
import './AnimeDetails.css'
import { Genre } from "./Genre/Genre";

export const AnimeDetails = ({anime})=>{
    var backdrop = anime.trailer.images.maximum_image_url ? anime.trailer.images.maximum_image_url : anime.images.jpg.large_image_url
    let root = document.querySelector(":root");
    root.style.setProperty("--imgUrl",`url('${backdrop}')`)
    return(
        <div className="details_root">
            <div className="anime_details_header">
                <img src={anime.images.jpg.image_url} alt={anime.title} className="anime_details_img" />
                <div className="details_header_info">
                    <h1 className="anime_details_title">{anime.title}</h1>
                    <p className="details_score_header">Score</p>
                    <div className="details_score">
                        <img className='score_img' alt="" src='https://www.pinclipart.com/picdir/big/33-337440_stars-star-transparent-background-star-clipart-png.png'/>
                        <p className="anime_details_score">{anime.score}</p>
                    </div>
                    <div className="details_header_sections">
                        <div className="details_header_section">
                            <p className="details_header_section_title">Rank</p>
                            <p className="details_header_section_value">{`#${anime.rank}`}</p>
                        </div>
                        <div className="details_header_section">
                            <p className="details_header_section_title">Popularity</p>
                            <p className="details_header_section_value">{`#${anime.popularity}`}</p>
                        </div>
                        <div className="details_header_section">
                            <p className="details_header_section_title">Members</p>
                            <p className="details_header_section_value">{anime.members}</p>
                        </div>
                        <div className="details_header_section">
                            <p className="details_header_section_title">Favorites</p>
                            <p className="details_header_section_value">{anime.favorites}</p>
                        </div>
                        <div className="details_header_section">
                            <p className="details_header_section_title">Rating</p>
                            <p className="details_header_section_value">{anime.rating}</p>
                        </div>
                        <div className="details_header_section">
                            <p className="details_header_section_title">Duration</p>
                            <p className="details_header_section_value">{anime.duration}</p>
                        </div>
                    </div>
                    <p className="details_header_section_title">Genre</p>
                    <div className="details_genre">
                        {
                            anime.genres.map((genre,i)=>{
                                return <Genre genre={genre} id={i}/>
                            })
                        }
                    </div>
                </div>
            </div>
            <h3>Synopsis</h3>
            <p>{anime.synopsis}</p>
        </div>
    )
}