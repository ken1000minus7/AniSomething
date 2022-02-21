import React from "react"
import { Route, Switch, Link } from 'react-router-dom'

export const NavBar = ()=>{
    return (
        <ul role="navigation">
            <li>
                <Link to="/TopAll">Top all</Link>
            </li>
            <li>
                <Link to="/TopAnime">Top Animes</Link>
            </li>
            <li>
                <Link to="/TopMovie">Top Movies</Link>
            </li>
        </ul>
    )
}