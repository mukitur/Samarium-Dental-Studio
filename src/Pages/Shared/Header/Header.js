import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import logo from '../../../images/logo.png';

const Header = () => {
    const {user, logout} = useFirebase();
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
                        {
                            user?.email ?
                            <Button className="me-2" onClick={logout} variant="light">LogOut</Button> :
                            <Nav.Link as = {Link} eventKey={2} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>Signed in as: <a href="#login">{user?.displayName}</a></Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;