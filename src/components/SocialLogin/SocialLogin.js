import React from 'react';
import { Button } from 'react-bootstrap';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center w-50 mx-auto'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='pt-3 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div className='text-center'>
                <Button variant='outline-secondary'>Google Sign In</Button>
            </div>
        </div>
    );
};

export default SocialLogin;