import React from 'react';
import './Footer.css';
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark text-white foo-ter'>
            <div className='left '>
                <h4>Stay Connected</h4>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <div className='right'>
                <h4>Stay updated</h4>
                <input type="email" name="" id="" placeholder='Your Email' className='p-1' />
                <Button variant='warning' className='mx-2'>Submit</Button>
            </div>
        </div>
    );
};

export default Footer;