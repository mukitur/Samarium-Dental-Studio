import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Services = () => {
    return (
        <div className="my-5">
            <Container>
            <Row>
                
                <Col xs={6} md={4}>
                    <h2 className="text-start">We provide all <br/>Dental Services</h2>
                </Col>
                <Col xs={12} md={8}>
                    <p className="text-start">We offer you a wide range of dental services Our team of dentists is highly qualified and experienced. They are well versed with the latest technique of treatment and are able to treat patients with any sort of dental issue.</p>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Services;