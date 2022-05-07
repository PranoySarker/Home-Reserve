import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
    const { name, picture, price, quantity, description, supplier } = props.inventory;
    const navigate = useNavigate();
    return (
        <div>
            <Card style={{ width: '25rem', height: '35rem' }}>
                <Card.Img variant="top" src={picture} className='p-3' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6>Price:{price}</h6>
                    <h6>Supplier Company:{supplier}</h6>
                    <h6>Quantity:{quantity}</h6>
                    <Card.Text>
                        {description.slice(0, 120) + '...'}
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate('/inventory')}>Manage Inventory</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;