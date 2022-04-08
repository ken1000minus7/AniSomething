import React from "react";
import './CharacterCard.css'

export const CharacterCard = ({character})=>{
    return(
        <div className="character_card_root">
            <img className="character_card_image" src={character.images.jpg.image_url} alt={character.name} />
            <p className="character_card_name">{character.name}</p>
        </div>
    )
} 