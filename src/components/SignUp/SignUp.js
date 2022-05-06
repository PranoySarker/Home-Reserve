import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();

    const handleEmail = event => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
        console.log(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('password not matched');
        }
        createUserWithEmailAndPassword(email, password)
    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    return (
        <div>
            <div className='w-50 mx-auto mt-5 mb-5'>
                <h2 className='mb-3'>Please SignUp</h2>
                <Form onSubmit={handleCreateUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name='email' onBlur={handleEmail} placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword2">
                        <Form.Control type="password" name='password' onBlur={handlePassword} placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name='password' onBlur={handleConfirmPassword} placeholder="Confirm Password" required />
                    </Form.Group>
                    {errorElement}
                    <input type="submit" value="Submit" className='p-2' />


                    <p className=' mt-2'>Already have an account?<Link to='/login' className='text-primary px-2' style={{ textDecoration: 'none' }}>Log-In please</Link></p>
                </Form>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;