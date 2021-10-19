import logo from '../../../images/logo.png';
import { Button, Col, Container, Row } from 'react-bootstrap';
import googleIcon from '../../../images/google-icon.png';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const {signInWithGoogle, handleEmailChange, handlePasswordChange, registerWithPassword, error,isLogin, toggleLogin } = useAuth();
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
            <img className = "mt-4" src = {logo} alt=""/>
            <h2 className = "mb-5">Please Login either Email/Password or Google</h2>

            
            <Container>
                <Row>
                    <Col></Col>
                    <Col sm={6}>
                        <form onSubmit={registerWithPassword}>
                            <h3 className="text-primary text-start"> Please {isLogin ? 'Login' : 'register'}</h3>
                            <div className="row mb-3">
                                <div className="col-sm-10">
                                <input onBlur={handleEmailChange} placeholder="Enter a valid Email" type="email" className="form-control" id="inputEmail3" required/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-10">
                                <input onBlur={handlePasswordChange} placeholder="Enter Password" type="password" className="form-control" id="inputPassword3" required/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-10 offset-sm-2">
                                <div className="form-check text-start text-primary">
                                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
                                    <label className="form-check-label text-start" htmlFor="gridCheck1">
                                        Already Registered?
                                    </label>
                                </div>
                                </div>
                            </div>
                            <div className="my-2 text-danger">{error} </div>
                            <button type="submit" className="btn btn-primary"> { isLogin ? 'Login' : 'Register'}</button>
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