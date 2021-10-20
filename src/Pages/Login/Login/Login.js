import logo from '../../../images/samarium-logo.png';
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

            <Container>
                <Row>
                    <Col></Col>
                    <Col sm={6}>
                        <form onSubmit={registerWithPassword} className="border text-center">
                            <h3 className="text-primary mt-2"> Please {isLogin ? 'Login' : 'register'}</h3>
                            <div className="row mb-3 m-auto">
                                <div className="col-sm-10 ">
                                <input onBlur={handleEmailChange} placeholder="Enter a valid Email" type="email" className="form-control" id="inputEmail3" required/>
                                </div>
                            </div>
                            <div className="row mb-3 m-auto">
                                <div className="col-sm-10">
                                <input onBlur={handlePasswordChange} placeholder="Enter Password" type="password" className="form-control" id="inputPassword3" required/>
                                </div>
                            </div>
                            <div className="row mb-3 text-start m-auto">
                                <div className="col-sm-10 ">
                                    <div className="form-check text-primary">
                                        <input onChange={toggleLogin} className="form-check-input " type="checkbox" id="gridCheck1"/>
                                        <label className="form-check-label text-start" htmlFor="gridCheck1">
                                        Already have an account?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="my-2 text-danger">{error} </div>
                            <button type="submit" className="btn btn-primary mb-3"> { isLogin ? 'Login' : 'Register'}</button>
                        </form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>


            

            <Container className="mt-3">
                <p>You can log in with Google</p>
                <Button onClick={handleGoogleLogin} variant="light"> <img src ={googleIcon} alt=""/>  </Button>
            </Container>

            
            
            

        </div>
    );
};

export default Login;