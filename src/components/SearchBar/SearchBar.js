import { Input, TextField } from "@mui/material";
import React from "react";
import './SearchBar.css'

export const SearchBar = ({setQuery})=>{
    let query = localStorage.getItem("searchQuery")
    return (
        <div className="search_bar">
            <Input
                defaultValue={query ? query : ""}
                className="search_input"
                onChange={(e)=>{
                    setQuery(e.target.value.toLowerCase())
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