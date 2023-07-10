import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Props from './Props'
import {CardProps} from "../ListView/CardProps";
const BlogCard: React.FC<CardProps> = ({ date, title, subtitle, description, timeToRead, link }) => {
    return (
        <div className="card mb-4 custom-card"> {/* Add custom-card class */}
            <p className="card-text mt-1 pt-1 custom-date">{date}</p>
            <div className="card-body">
                <div className="d-flex flex-column justify-content-between mb-3 text-start">
                    <h3 className="card-title custom-title text-start">{title}</h3> {/* Add custom-title class */}
                    <small className="card-subtitle mb-2 text-muted custom-subtitle text-start custom-date">{subtitle}</small> {/* Add custom-subtitle class */}
                </div>
                <p className="card-text custom-description text-start">{description}</p> {/* Add custom-description class */}
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <a href={link} className="card-link custom-link">{/* Add custom-link class */}
                    Read more
                </a>
                <small className="text-muted">{`${timeToRead} min read`}</small>
            </div>
        </div>
    );
};


// function BlogCardList() {
//     const blogPosts = [
//         {
//             id: 1,
//             title: 'Blog Post 1',
//             content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         },
//         {
//             id: 2,
//             title: 'Blog Post 2',
//             content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         },
//         {
//             id: 3,
//             title: 'Blog Post 2',
//             content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         },
//     ];
//
//     return (
//         <Container>
//             <Row>
//                 <Col>
//                     <h1>My Blog</h1>
//                 </Col>
//             </Row>
//             <Row>
//                 {blogPosts.map((post) => (
//                     <Col key={post.id} md={6} mt={6}>
//                         <BlogPost pt={3} pb={3} title={post.title} content={post.content} />
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// }

export default BlogCard;
