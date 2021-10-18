import React from 'react';
import logo from '../../../images/logo.png';
import { Button } from 'react-bootstrap';
import googleIcon from '../../../images/google-icon.png'
import useFirebase from '../../../hooks/useFirebase';



const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <img className = "my-5" src = {logo} alt=""/>
            <h2>email/pass Login</h2>
            
            <div className="my-5">---------or---------</div>

            <Button onClick={signInWithGoogle} variant="light"> <img src ={googleIcon} alt=""/> LOGIN </Button>
            
            

        </div>
    );
};

export default Login;