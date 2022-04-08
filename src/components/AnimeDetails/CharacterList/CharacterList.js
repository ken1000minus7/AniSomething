import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import './CharacterList.css'

export const CharacterList = ({characterList})=>{
    return (
        <ScrollMenu>
            {characterList.map(({character,i})=>{
                return <CharacterCard character={character} />
            })}
        </ScrollMenu>
    )
}