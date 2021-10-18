import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import homeAboutSectionImg from '../../../../images/home-about-section.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col xs={12} md={6} >
                        <img src ={homeAboutSectionImg} width="100%" height="auto"  alt ="" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h2 style={{color: '#2e7fc2'}}>Welcome to Samarium Dental Studio</h2>
                        <p>Choosing the right dentist for your family is an important decision. Samarium Dental Studio is ready to give you the quality dental care you and your family deserve. Our doctors will make you feel comfortable and relaxed when you consult them. If you’ve any questions in your mind regarding your treatment, then you can ask us without any hesitation. We are here to assist you and help you get a wider smile not only for the moment but for the years to come.  </p>
                        <h3 className="text-start ms-2 mt-5">Why Visit us?</h3>
                        <h5 className="text-start ms-2" style={{color: '#2e7fc2'}}>
                        <FontAwesomeIcon icon={faCheckCircle} /> Our Doctors are friendly, expert and dedicated <br/>
                        <FontAwesomeIcon icon={faCheckCircle} /> We have latest facilities and dental equipment  <br/>
                        <FontAwesomeIcon icon={faCheckCircle} /> We provide quality dental materials to suit your needs<br/>
                        <FontAwesomeIcon icon={faCheckCircle} /> Nervous and aged patients are handled with care <br/> <br/>
                        <Link to = "/doctors"> <Button variant="secondary">Show Doctors</Button></Link>
                        </h5>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutSection;