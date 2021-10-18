import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Home/Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('./fakeData.json')
            .then(res=> res.json())
            .then(data=>setServices(data))
    },[])
    return (
        <div className="my-5">
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
            <div className ="mx-5">
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <Service
                            key= {service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;