import React, { useState } from "react"
import { Link } from 'react-router-dom'
import './NavBar.css'

export const NavBar = ()=>{
    const [topPopupOpen,setTopPopupOpen] = useState(false)
    return (
        <ul role="navigation" className="navbar_list">
            {/* <li 
                className="navbar_item"
                onMouseEnter={()=>{
                    setTopPopupOpen(true)
                }}
                onMouseLeave={()=>{
                    setTopPopupOpen(false)
                }}>
                Top
                {topPopupOpen ? (()=>{
                    return (<ul>
                        <li>Top All</li>
                        <li>Top Anime</li>
                        <li>Top Movies</li>
                        <li>Top Airing</li>
                    </ul>)
                }) : null}
            </li> */}
            <li>
                <Link to="/TopAll" className="navbar_item">Top all</Link>
            </li>
            <li>
                <Link to="/TopAnime" className="navbar_item">Top Animes</Link>
            </li>
            <li>
                <Link to="/TopMovie" className="navbar_item">Top Movies</Link>
            </li>
            <li>
                <Link to="/TopAiring" className="navbar_item">Top Airing</Link>
            </li>
            <li>
                <Link to="/search/anime" className="navbar_item">Search Anime</Link>
            </li>
        </ul>
    )
}