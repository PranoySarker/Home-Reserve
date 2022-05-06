import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    return (
        <div>
            <div className='mt-5 d-flex justify-content-center '>
                <div className='' style={{ width: '600px', height: '600px' }}>
                    <img src={inventory.picture} alt="" />
                </div>
                <div className='mx-3 w-50'>
                    <h2>Product Name: {inventory.name}</h2>
                    <h4>Product Price: {inventory.price}</h4>
                    <h4>Company Name: {inventory.supplier}</h4>
                    <h4>Quantity: {inventory.quantity}</h4>
                    <p>{inventory.description}</p>
                    <Button>Delivered</Button>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ItemDetails;