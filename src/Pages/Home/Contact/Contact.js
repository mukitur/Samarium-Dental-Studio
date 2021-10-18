import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faMobileAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <h2 className="my-5">Samarium Dental Studio</h2>
            <Container>
                <Row className="text-start">
                    <Col></Col>
                    <Col xs={5}>
                        <p>Chamber Address:<br/>
                            <FontAwesomeIcon icon={faAddressBook} /> House#20, Road#20, Sector#11, Uttara, Dhaka-1230.</p>
                        <p><FontAwesomeIcon icon={faMobileAlt} /> +880 1518 444 000</p>
                        <p><FontAwesomeIcon icon={faMobileAlt} /> +880 1518 444 001</p>
                        <p><FontAwesomeIcon icon={faEnvelopeOpenText} /> info@samariumdemtal.com</p>
                        <h4 className="text-danger">HotLine/Emergency: +880 1765 000 000</h4>
                        For Appointments:<Link to ={'/appoinments'}> Click Here</Link>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;