import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <h2 className="my-5">Samarium Dental Studio</h2>
            <Container>
                <Row className="text-start">
                    
                    <Col xs={12}>
                        <p>A person’s smile is their most authentic form of self-expression. Your smile is an expression of your inner beauty. It’s our goal to highlight and bring out that beauty through your smile. We are able to help our patients feel confident, excited and smile.</p>
                        <p>When our patients walk into our office we want them to feel like they’ve stepped into a spa or 5-star hotel. They are taken care of, so they feel comfortable and safe. We pay attention to every detail from customer service, to the quality of care each patient receives. We treat each patient with attention, kindness and professionalism. Because that’s how we would like to be treated.</p>
                        <p>We are grateful for the trust our patients give us when we are creating a signature smile for them. When we help people look good, they feel good. It gives them the confidence to go out and make positive real world changes in their lives. It gives them confidence to try new things that could have positive life-changing events. We love being a part of that journey, it makes us feel good.</p>
                            
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default About;