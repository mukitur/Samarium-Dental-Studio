import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/Firebase.init';


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] =useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    //signin with email & Password

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }

      const signInWithPassword = e => {
        e.preventDefault()
        console.log(email, password)
       createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
        })
    }


    //signin with Google

    const signInWithGoogle =()=>{
        setIsLoading(true);
       return signInWithPopup(auth, googleProvider)     
    }


    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally( () => setIsLoading(false))
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false);
        })
    }, []);

    return (
        {
            user,
            error,
            signInWithGoogle,
            logout,
            isLoading,
            password, email, handleEmailChange, handlePasswordChange, signInWithPassword
        }
    );
};

export default useFirebase;