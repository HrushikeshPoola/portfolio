import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {FaCode, FaGithub, FaLinkedin} from "react-icons/fa";
export default function NavigationBar() {
    return (
        <div>
            {/*<nav className="navbar navbar-light bg-light" style={{boxShadow:'2px 2px 2px #ddd'}}>*/}
            {/*    <div className="container-fluid">*/}
            {/*        <a className="navbar-brand" href="#">*/}
            {/*            /!*<span><Avatar size={'40px'} style={{padding : '2px'}} name="Hrushikesh Poola" round /></span>*!/*/}
            {/*            Hrushikesh Poola*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</nav>*/}
            <nav className="navbar sticky-top navbar-light bg-light shadow">
                <div className="container-fluid">
                    <Container>
                        <Row>
                            <Col className="col col-lg-4 d-flex flex-row justify-content-lg-start">
                                <a className="navbar-brand p-2" href="#">Hrushikesh Poola</a>
                            </Col>
                            <Col className="col col-lg-8 d-flex flex-row justify-content-lg-end">
                                <a className="m-2 text-decoration-none" style={{"color":"black", cursor:"pointer"}} href="https://github.com/HrushikeshPoola/portfolio" target="_blank"><FaCode style={{ fontSize: '2rem' }}/></a>
                                <a className="m-2 text-decoration-none" style={{"color":"black",cursor:"pointer"}} href="https://www.linkedin.com/in/hrushikesh-poola/" target="_blank"><FaLinkedin style={{ fontSize: '2rem' }}/></a>
                                <a className="m-2 text-decoration-none" style={{"color":"black",cursor:"pointer"}} href="https://github.com/HrushikeshPoola/" target="_blank"><FaGithub style={{ fontSize: '2rem' }}/></a>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </nav>
        </div>

    );
}