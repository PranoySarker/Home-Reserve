import React from 'react';
import { Button } from 'react-bootstrap';

const Room = () => {
    return (
        <div className='mt-5'
            style={{
                backgroundColor: '#FCF8F3',
                height: '250px'
            }}>
            <div className='text-center d-block my-auto pt-5'>
                <h1 className='fw-bold'>50+ beautiful rooms inspiration</h1>
                <h5>Our designers already made a beautiful prototype</h5>
                <h5>of rooms that may inspire you</h5>
                <Button variant='warning'>Explore Now</Button>
            </div>
        </div>
    );
};

export default Room;