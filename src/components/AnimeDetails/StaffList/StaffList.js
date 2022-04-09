import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { StaffCard } from "../StaffCard/StaffCard";

export const StaffList = ({staffList})=>{
    return (
        <ScrollMenu>
            {staffList.map((staff)=>{
                return <StaffCard staff={staff} />
            })}
        </ScrollMenu>
    )
}