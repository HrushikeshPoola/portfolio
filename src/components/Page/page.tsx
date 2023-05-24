import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Paragraph from '../Paragraph/Paragraph'
import Progressbar from "../Progressbar/Progressbar";
import Content from "../Paragraph/Content";
import logo from './logo.jpeg'
import {useParams} from "react-router-dom";

function Page() {
    const {params} = useParams()
    // Accessing specific query parameters
    console.log(params)
    return (
        <>
            {/*<Progressbar/>*/}
            <p>{params}</p>
            <Container>
                <h1 style={{padding : '10px'}}>{params}</h1>
                <div style={{overflow:"auto"}}>
                    <Content type={'Paragraph'}/>
                    <Content type={'ImageComponent'} link={logo}/>
                    <Content type={'Paragraph'}/>
                    <Content type={'Paragraph'}/>
                    <Content type={'ImageComponent'} link={logo}/>
                    <Content type={'Paragraph'}/>
                </div>
            </Container>
        </>

    );
}

export default Page;
