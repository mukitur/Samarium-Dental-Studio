import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../../images/Doctor/dr1.jpeg';
import img2 from '../../../images/Doctor/dr2.jpeg';
import img3 from '../../../images/Doctor/dr3.jpeg';

const Doctors = () => {
    return (
        <div>
            <h2 className="my-5 text-warning">Our Awesome Doctors</h2>
            <Row className="mx-5">
                <Col>
                    <Card className="border-white">
                        <Card.Img variant="top" src={img3} />
                            <Card.Body>
                            <Card.Title> Prof. Dr. Frank Pascal (Chief Consultant) </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-white">
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                        <Card.Title>  Prof. Dr. Frank Pascal (Dental Surjon)  </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-white">
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                        <Card.Title>Prof. Dr. Frank Pascal (Dental Surjon)</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>      
            </Row>
        </div>
    );
};

export default Doctors;