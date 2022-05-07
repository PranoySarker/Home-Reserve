import React from 'react';
import { Form } from 'react-bootstrap';

const AddNew = () => {
    const handleAddItems = event => {
        event.preventDefault();
        const item = event.target.item.value;
        const price = event.target.price.value;
        const company = event.target.company.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        console.log(item, price, company, quantity, description);

        const addItem = {
            name: item,
            price: price,
            quantity: quantity,
            supplier: company,
            description: description
        }

        fetch('http://localhost:5000/inventory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
            })
    }
    return (
        <div>
            <h2 className='text-center mt-3 mb-3'>Add New Item</h2>
            <Form className='w-50 mx-auto' onSubmit={handleAddItems}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" name='item' placeholder="Item Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Control type="text" name='price' placeholder="Price" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCompany">
                    <Form.Control type="text" name='company' placeholder="Supplier Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Control type="text" name='quantity' placeholder="Quantity" />
                </Form.Group>

                <Form.Group className="mb-3" controlId='formBasicDescription'>
                    <textarea className="form-control" name='description' placeholder='Description' rows="3"></textarea>
                </Form.Group>

                <input type="submit" value="Add" className='d-block mx-auto bg-success text-white fw-bold mt-4' style={{ width: '25rem', height: '2rem' }} />
            </Form>
        </div>
    );
};

export default AddNew;