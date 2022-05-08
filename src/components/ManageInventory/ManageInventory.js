import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInventory from '../hooks/useInventory';

const ManageInventory = () => {
    const [inventories, setInventories] = useInventory([]);
    const navigate = useNavigate();

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure To Delete?');
        if (proceed) {
            const url = `https://protected-earth-63464.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = inventories.filter(inventory => inventory._id !== id)
                        setInventories(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h2 className='text-center mt-2 mb-3'>Manage Your Inventory</h2>
            {/* <Button className='mt-2 d-block mx-auto mb-5'>Add Items</Button> */}
            <Table striped bordered hover className='text-center'>
                <thead >
                    <tr>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventories.map(inventory =>
                            <tr>
                                <td>{inventory.name}</td>
                                <td>{inventory.price}</td>
                                <td>{inventory.quantity}</td>
                                <td>
                                    <Button variant='primary' onClick={() => navigate(
                                        `/inventory/${inventory._id}`)}>More details</Button>
                                    <Button className='ms-2' variant='danger' onClick={() => handleDelete(inventory._id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <div className="d-grid gap-2 col-6 mx-auto mt-5">
                <h4 className='text-center'>Add New Items </h4>
                <button className="btn btn-primary" type="button" onClick={() => navigate('/additem')}>Click Here...</button>
            </div>
        </div>
    );
};

export default ManageInventory;