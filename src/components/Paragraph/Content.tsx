import React from "react";
import {Props} from "./Props";
import {contentTypes} from './types';
export default function Content({type,...props} : Props) {
    // @ts-ignore
    let Component: any = contentTypes[type];
    return (
        <Component {...props}/>
    );
}