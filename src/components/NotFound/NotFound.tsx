import React from 'react';
import { Container } from 'react-bootstrap';
import Listview from "../ListView/Listview";
import {ReactCardContent} from "../../Content/react";

const NotFound: React.FC = () => {
    return (
        <Container className="mt-5">
            <Container style={{"minHeight": "40vh"}}>
                <h1 className="text-center">Page Not Found</h1>
                <p className="text-center">The requested page could not be found. you can read below blogs</p>
            </Container>
            <Listview content={ReactCardContent}/>
        </Container>
    );
};

export default NotFound;
