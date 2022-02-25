import React from "react"
import { Link } from 'react-router-dom'
import './NavBar.css'

export const NavBar = ()=>{
    return (
        <ul role="navigation" className="navbar_list">
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
        </ul>
    )
}