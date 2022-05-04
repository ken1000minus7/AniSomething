import React, { useState } from "react"
import { Link } from 'react-router-dom'
import './NavBar.css'

export const NavBar = ()=>{
    // const [topPopupOpen,setTopPopupOpen] = useState(false)
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
            <li className="navbar_item top_item">
                Top
                <ul className="top_dropdown">
                    <li>
                        <Link to="/TopAll" className="dropdown_item">Top all</Link>
                    </li>
                    <li>
                        <Link to="/TopAnime" className="dropdown_item">Top Animes</Link>
                    </li>
                    <li>
                        <Link to="/TopMovie" className="dropdown_item">Top Movies</Link>
                    </li>
                    <li>
                        <Link to="/TopAiring" className="dropdown_item">Top Airing</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/search/anime" className="navbar_item" onClick={()=> localStorage.clear()}>Search Anime</Link>
            </li>
        </ul>
    )
}