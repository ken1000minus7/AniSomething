import React, { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";
import './AnimeDetails.css'
import { CharacterList } from "./CharacterList/CharacterList";
import { Genre } from "./Genre/Genre";
import { StaffList } from "./StaffList/StaffList";

export const AnimeDetails = ({anime})=>{
    var backdrop = anime.trailer.images.maximum_image_url ? anime.trailer.images.maximum_image_url : anime.images.jpg.large_image_url
    let root = document.querySelector(":root");
    root.style.setProperty("--imgUrl",`url('${backdrop}')`)
    const [characterList , setCharacterList] = useState(null)
    const [staffList , setStaffList] = useState(null)

    useEffect(()=>{
        fetch(`https://api.jikan.moe/v4/anime/${anime.mal_id}/characters`,
        {
            method: "GET"
        })
        .then(response => response.json())
        .then(jsonResponse => setCharacterList(jsonResponse.data))
        .catch(error => console.error(error))
        .finally(() => {
            console.log("characterlist arrived")
        })

        fetch(`https://api.jikan.moe/v4/anime/${anime.mal_id}/staff`,
        {
            method: "GET"
        })
        .then(response => response.json())
        .then(jsonResponse => setStaffList(jsonResponse.data))
        .catch(error => console.error(error))
        .finally(() => {
            console.log("stafflist arrived")
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return(
        <div className="details_root">
            <div className="anime_details_header">
                <img src={anime.images.jpg.image_url} alt={anime.title} className="anime_details_img" />
                <div className="details_header_info">
                    <h1 className="anime_details_title">{anime.title}</h1>
                    <p className="anime_details_type">{anime.type}</p>
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
            <div className="details_synopsis details">
                <h3 className="details_synopsis_header">Synopsis</h3>
                <p className="anime_details_synopsis">{!anime.synopsis || anime.synopsis==="" ? "No synopsis information has been added to this title." : anime.synopsis}</p>
            </div>
            <div className="details_background details">
                <h3 className="details_background_header">Background</h3>
                <p className="anime_details_background">{!anime.background || anime.background==="" ? "No background information has been added to this title." : anime.background}</p>
            </div>
            <div className="details_characters details">
                <h3 className="details_characters_header">Characters</h3>
                {
                    characterList ? <CharacterList characterList={characterList} />
                    : <Loading />
                }
            </div>
            {
                anime.trailer.embed_url ? 
                <div className="details_trailer details">
                    <h3 className="details_trailer_header">Trailer</h3>
                    <iframe className="anime_details_trailer" src={anime.trailer.embed_url} title="trailer" />
                </div>
                : <></>
            }
            <div className="details_staff details">
                <h3 className="details_staff_header">Staff</h3>
                {
                    staffList ? <StaffList staffList={staffList} />
                    : <Loading />
                }
            </div>
        </div>
    )
}