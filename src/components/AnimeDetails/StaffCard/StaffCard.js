import React from "react";
import './StaffCard.css'

export const StaffCard = ({staff})=>{
    return(
        <div className="staff_card_root">
            <img className="staff_card_image" src={staff.person.images.jpg.image_url} alt={staff.person.name} />
            <p className="staff_card_name">{staff.person.name}</p>
        </div>
    )
} 