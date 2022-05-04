import React from 'react';
import './NewArrival.css';
import one from '../../images/gallery/one.jpg';
import two from '../../images/gallery/two.jpg';
import three from '../../images/gallery/three.jpg';
import four from '../../images/gallery/four.jpg';
import five from '../../images/gallery/five.jpg';
import six from '../../images/gallery/six.jpg';
import seven from '../../images/gallery/seven.jpg';
import eight from '../../images/gallery/eight.jpg';

const NewArrival = () => {
    return (
        <div className='container mt-5 text-center'>
            <h2 className='fw-bold'>New Arrival</h2>
            <div className='gallery mt-5 '>
                <div>
                    <img src={one} alt="" />
                </div>
                <div className='wide'>
                    <img src={two} alt="" />
                </div>
                <div className='tall'>
                    <img src={three} alt="" />
                </div>
                <div className='tall'>
                    <img src={four} alt="" />
                </div>
                <div>
                    <img src={five} alt="" />
                </div>
                <div className='tall'>
                    <img src={six} alt="" />
                </div>
                <div className='tall'>
                    <img src={seven} alt="" />
                </div>
                <div className='wide'>
                    <img src={eight} alt="" />
                </div>

                {/* <img src={one} alt="" style={{ width: '381px', height: '323px', }} />
                <img src={three} alt="" style={{ width: '295px', height: '392px', }} />
                <img src={five} alt="" style={{ width: '258px', height: '196px', }} />
                <img src={seven} alt="" style={{ width: '381px', height: '323px', }} />
                <img src={eight} alt="" style={{ width: '451px', height: '312px', }} />
                <img src={two} alt="" style={{ width: '290px', height: '348px', }} />
                <img src={six} alt="" style={{ width: '178px', height: '242px', }} /> */}
            </div>
        </div>
    );
};

export default NewArrival;