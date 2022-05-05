import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleLogIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>
    }

    return (
        <div>
            <div className='w-50 mx-auto mt-5 mb-5'>
                <h2 className='mb-3'>Please Login</h2>
                <Form onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" onBlur={handleEmailBlur} placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" onBlur={handlePasswordBlur} placeholder="Password" required />
                    </Form.Group>

                    <input type="submit" value="Submit" className='p-2' />

                    {errorMessage}

                    <p className=' mt-2'>Don't have an account?<Link to='/signup' className='text-primary px-2' style={{ textDecoration: 'none' }}>Sign-Up please</Link></p>
                </Form>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;