import React, { useState } from 'react';
import logo from '../../../images/logo.png';
import { Button, Col, Container, Row } from 'react-bootstrap';
import googleIcon from '../../../images/google-icon.png';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const {signInWithGoogle, password, email, handleEmailChange, handlePasswordChange, signInWithPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    //Google Login Process
    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(result =>{
            history.push(redirect_uri)  
        })   
    }
    
    // email login process starts
    

    return (
        <div>
            <h2 className = "mt-5">Welcome to Samarium Dental Studio</h2>
            <img className = "mb-5" src = {logo} alt=""/>
            <h2>email/pass Login</h2>

            
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <form onSubmit={signInWithPassword}>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                <input onBlur={handlePasswordChange}  type="password" className="form-control" id="inputPassword3" required/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                    Example checkbox
                                    </label>
                                </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>


            




            <div className="my-5">---------or---------</div>

            <Button onClick={handleGoogleLogin} variant="light"> <img src ={googleIcon} alt=""/> LOGIN </Button>
            
            

        </div>
    );
};

export default Login;