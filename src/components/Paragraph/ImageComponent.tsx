import React from "react";
import {Props} from "./Props";

export default function ImageComponent({type, ...props}:Props) {
    return (
        <>
            <img src={props.link}/>
        </>
    )
}