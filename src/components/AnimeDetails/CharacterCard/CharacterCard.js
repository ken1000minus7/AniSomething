import React from "react";
import './CharacterCard.css'

export const CharacterCard = ({character})=>{
    return(
        <div>
            {character.character.name}
        </div>
    )
} 