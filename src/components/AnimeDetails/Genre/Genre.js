import React from "react";
import './Genre.css'

export const Genre = ({genre})=>{
    return(
        <span className="genre">
            {genre.name}
        </span>
    )
}