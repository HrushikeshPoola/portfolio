import React from 'react';
import {useParams} from 'react-router-dom';
import Listview from "../ListView/Listview";
import {ReactCardContent} from "../../Content/react"
import Codeblock from "../Card/Codeblock";
import {Container} from "react-bootstrap";
let dataMap : Map<string, any[]> = new Map();

dataMap.set("react", ReactCardContent)
dataMap.set("angular", ReactCardContent)
dataMap.set("solidity", ReactCardContent)
dataMap.set("golang", ReactCardContent)


function Page() {
    const { id } = useParams();
    let cardsData = []
    if (!id) {
    } else {
        const data = dataMap.get(id)
        if (data === undefined) cardsData = []
        else cardsData = data
    }
    console.log(cardsData)
    return (
        <>
            <Listview content ={cardsData} />
            <Container><Codeblock code={"<Hello World>"}/></Container>
        </>

    );
}

export default Page;
