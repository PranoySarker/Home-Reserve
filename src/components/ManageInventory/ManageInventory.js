import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useInventory from '../hooks/useInventory';

const ManageInventory = () => {
    const [inventories, setInventories] = useInventory([]);
    const navigate = useNavigate();

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
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageInventory;