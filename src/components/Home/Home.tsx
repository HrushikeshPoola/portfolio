import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import react from "../../logos/frontend/react-logo.png";
import angular from "../../logos/frontend/angular-logo.png";
import solidity from "../../logos/frontend/solidity-logo.svg";
import golang from "../../logos/frontend/Go-logo.png";

import Banner from "./Banner";
import Card from "../Card/Card";
import {SiConan} from "react-icons/all";
export default function Home() {
    const content = [
        {
            url : "/react/",
            image : react,
            title : "React Development",
            description : "Roadmap about features of React Library",
            order : [0,1]
        },
        {
            url : "/angular/",
            image : angular,
            title : "Angular Development",
            description : "Roadmap about features of Angular",
            order : [1,0]
        },
        {
            url : "/solidity/",
            image : solidity,
            title : "Solidity Development",
            description : "Roadmap about features of Solidity",
            order : [0,1]
        },
        {
            url : "/golang/",
            image : golang,
            title : "golang Development",
            description : "Roadmap about features of golang",
            order : [1,0]
        }
    ];
    return (
        <>
            <Container fluid className="flex-column" style={{height:"100vh", backgroundColor:"#eee"}}>
                <Container fluid className="flex-row" style={{height:"80vh", width:"100vw"}}>
                    <Row className="h-100">
                        <Col className="col col-lg-6 p-4 h-100 d-flex flex-column justify-content-center">
                            <h2 className="text-sm-center text-md-center text-lg-center">
                                Welcome to Poola's portfolio website! I'm a full stack developer with expertise in front-end design, back-end development, and database management, passionate about building distributed software systems for seamless web applications
                            </h2>
                        </Col>
                        <Col className="col col-lg-6">

                        </Col>
                    </Row>

                </Container>
            </Container>
            <Container fluid style={{height:"100vh", width:"100vw", backgroundColor:"#eee"}}>
                {content.map(item => {
                    return (
                        <Row>
                            <Col className="col col-lg-12">
                                <a href={item.url} style={{textDecoration:"none", color : "black"}}>
                                    <Banner url={item.url} orders={item.order} image={item.image} title={item.title} description={item.description}/>
                                </a>
                            </Col>
                        </Row>
                    )
                })}
            </Container>
        </>

    );
}