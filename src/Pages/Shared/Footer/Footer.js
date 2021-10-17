import React from 'react';
import { Col, Container,  Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <div className="bg-primary text-white my-5">
            <Container>
                <Row>
                    <Col className="my-5" md={4}>
                        <img src= {logo} width="auto" height="60" alt=""/>
                        <h5>Social Share</h5>
                    </Col>
                    <Col className="my-5 text-start"  md={4}>
                        <h4>Quick Links</h4>
                        <ul>
                            <Link className="text-white" to ="/about" ><li>About Us</li></Link>
                            <Link className="text-white" to ="/appoinments" ><li>Appoinments</li></Link>
                            <Link className="text-white" to ="/doctors" ><li>Doctors</li></Link>
                            <Link className="text-white" to ="/login" ><li>Login</li></Link>
                        </ul>
                    </Col>
                    <Col className="my-5 text-start" xs={6} md={4}>
                        <h4>Address</h4>
                        <p>House#20, Road# 02, Sector# 11, Uttara, Dhaka-1230.</p>
                        <p>Cell: +880 1715 0555 63</p>
                        <p>Email: info@samariumdental.com</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;