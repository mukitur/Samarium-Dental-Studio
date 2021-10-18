import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as = {Link} to="/"><img src={logo} width="100%" height="60" alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as = {Link} to ="/home">Home</Nav.Link>
                        <Nav.Link as = {Link} to ="/about">About</Nav.Link>
                        <Nav.Link as = {Link} to ="/services">Services</Nav.Link>
                        <Nav.Link as = {Link} to ="/appoinments">Appointments</Nav.Link>
                        <Nav.Link as = {Link} to ="/doctors">Doctors</Nav.Link>
                        <Nav.Link as = {Link} to ="/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;