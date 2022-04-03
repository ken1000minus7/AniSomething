import { Input } from "@mui/material";
import React from "react";
import './SearchBar.css'

export const SearchBar = ({setQuery})=>{
    var time = new Date().getTime()
    let query = localStorage.getItem("searchQuery")
    return (
        <div className="search_bar">
            <Input
                defaultValue={query ? query : ""}
                className="search_input"
                onKeyDown={(e)=>{
                    if(e.key==='Enter')
                    {
                        setQuery(e.target.value.toLowerCase())
                    }
                }}
                onChange={(e)=>{
                    var currTime = new Date().getTime()
                    if(currTime-time>=100)
                    {
                        time=currTime
                        setQuery(e.target.value.toLowerCase())
                    }
                }} 
                placeholder="Search.."
                sx={{
                    input:{
                        color:'white'
                    }
                }}
                disableUnderline
                />
        </div>
    )
}