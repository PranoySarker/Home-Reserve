import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div>
            <div className='w-50 mx-auto mt-5 mb-5'>
                <h2 className='mb-3'>Please Login</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>

                    <input type="submit" value="Submit" className='p-2' />

                    <p className=' mt-2'>Don't have an account?<Link to='/signup' className='text-primary px-2' style={{ textDecoration: 'none' }}>Sign-Up please</Link></p>
                </Form>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;