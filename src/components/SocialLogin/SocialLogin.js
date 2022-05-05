import React from 'react';
import { Button } from 'react-bootstrap';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    return (
        <div>
            <div className='d-flex align-items-center w-50 mx-auto'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='pt-3 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div className='text-center'>
                <Button variant='outline-secondary' onClick={handleGoogleSignIn}>Google Sign In</Button>
            </div>
        </div>
    );
};

export default SocialLogin;