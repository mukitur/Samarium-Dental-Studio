import React from 'react';
import logo from '../../../images/logo.png';
import { Button } from 'react-bootstrap';
import googleIcon from '../../../images/google-icon.png';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';



const Login = () => {
    const {signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(result =>{
            history.push(redirect_uri)  
        })   
    }

    
    return (
        <div>
            <h2 className = "mt-5">Welcome to Samarium Dental Studio</h2>
            <img className = "mb-5" src = {logo} alt=""/>
            <h2>email/pass Login</h2>

            <div className="my-5">---------or---------</div>

            <Button onClick={handleGoogleLogin} variant="light"> <img src ={googleIcon} alt=""/> LOGIN </Button>
            
            

        </div>
    );
};

export default Login;