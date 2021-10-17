import React from 'react';
import { Col, Container,  Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faMobileAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="bg-primary text-white my-5">
            <Container>
                <Row>
                    <Col className="my-5" md={4}>
                        <img className="mb-3" src= {logo} width="auto" height="60" alt=""/>
                    </Col>
                    <Col className="my-5 text-start"  md={4}>
                        <h4>Quick Links</h4>
                        <ul>
                            <Link className="text-white" style={{ textDecoration: 'none'}} to ="/about" ><li>About Us</li></Link>
                            <Link className="text-white" style={{ textDecoration: 'none'}} to ="/appoinments" ><li>Appoinments</li></Link>
                            <Link className="text-white" style={{ textDecoration: 'none'}} to ="/doctors" ><li>Doctors</li></Link>
                            <Link className="text-white" style={{ textDecoration: 'none'}} to ="/login" ><li>Login</li></Link>
                        </ul>
                    </Col>
                    <Col className="my-5 text-start" xs={6} md={4}>
                        <h4>Address</h4>
                        <p> <FontAwesomeIcon icon={faAddressBook} /> House#20, Road# 02, Sector# 11, Uttara, Dhaka-1230.</p>
                        <p><FontAwesomeIcon icon={faMobileAlt} /> +880 1715 0555 63</p>
                        <p><FontAwesomeIcon icon={faEnvelopeOpenText} /> info@samariumdental.com</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;