import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {tab} from "@testing-library/user-event/dist/tab";

interface FooterProps {
    // Define any additional props for the footer component
}
function Link(props : {text: string, url: string}) {
    return (<a href={props.url} className="text-light text-decoration-none p-2">{props.text}</a>);
}

const Footer: React.FC<FooterProps> = () => {
    const references = [
        {
            text : 'Home',
            url : './home'
        },
        {
            text : 'About',
            url : './about'
        },
        {
            text : 'Projects',
            url : './projects'
        },
        {
            text : 'Contact',
            url : './contact'
        }
    ]
    const contactDetails = [
        {
            text : 'GitHub',
            url : 'https://github.com/HrushikeshPoola/',
        },
        {
            text : 'LinkedIn',
            url : 'https://www.linkedin.com/in/hrushikesh-poola/'
        },
        {
            text : 'Email',
            url : 'mailto:hrushipoola1518@gmail.com'
        }
    ]
    return (
        <footer className="bg-dark text-light">
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col xs={12} md={6} className="text-center text-md-start">
                        <ul className="list-unstyled d-inline-flex justify-content-center justify-content-md-start mb-0">
                            {references.map(info => <Link text={info.text} url={info.url}/>)}
                        </ul>
                    </Col>
                    <Col xs={12} md={6} className="text-center text-md-end">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Hrushikesh Poola</p>
                        <ul className="list-unstyled d-inline-flex justify-content-center justify-content-md-start mb-0">
                            {contactDetails.map(info => <Link text={info.text} url={info.url}/>)}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
