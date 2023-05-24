import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Props from './Props'
function BlogCard({ topic, description } : Props) {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{topic}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}


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
