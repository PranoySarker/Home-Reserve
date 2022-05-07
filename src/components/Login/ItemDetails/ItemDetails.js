import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [isReload])

    const handleRestock = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        console.log(quantity);

        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                quantity: quantity
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
                setIsReload(!isReload);
            })
    }
    const handleDelivered = id => {

    }
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
                    <Button onClick={() => handleDelivered(inventory.id)}>Delivered</Button>
                </div>
            </div>
            <div >
                <Form className='w-25 d-block mx-auto mb-5' onSubmit={handleRestock}>
                    <h3>Restock Item:</h3>
                    <Form.Group className="mb-3 " >
                        <Form.Control type="text" name='quantity' placeholder='Number of product' />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Re-Stock
                    </Button>
                </Form>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ItemDetails;