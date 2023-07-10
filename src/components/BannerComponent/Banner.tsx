import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {FaCode} from "react-icons/fa";
interface Props {
    image : any,
    title : string,
    description: string
    orders? : number[]
    url? : string
}

export default function Banner({image, title, description, orders, url}:Props){
    return (
        <div className="banner-container">
            <Container>
                <Row>
                    <Col className={(!(orders) || orders[0] == 0) ? "order-0" : "order-1"} xs={12} md={6}>
                        <Image src={image} fluid className="banner-image p-2"/>
                    </Col>
                    <Col xs={12} md={6} className={(!(orders) || orders[0] == 1) ? "order-0 summary-column" : "order-1 summary-column"}>
                        <h1 className="banner-heading">{title}</h1>
                        <p className="summary-text"> {description}</p>
                        <div className="p-1">
                            <a href={url ? url : "/"}><FaCode style={{ fontSize: '2rem' }}/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}