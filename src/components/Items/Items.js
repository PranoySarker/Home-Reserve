import React from 'react';
import './Items.css';
import useInventory from '../hooks/useInventory';
import Item from '../Item/Item';

const Items = () => {
    const [inventories, setInventories] = useInventory([]);

    const sliced = inventories.slice(0, 6);

    return (
        <div className='px-5 mt-5'>
            <h2 className='text-center fw-bold pt-5'>Inventory Item</h2>
            <div className='items'>
                {
                    sliced.map(inventory =>
                        <Item key={inventory._id}
                            inventory={inventory}>

                        </Item>)
                }
            </div>
        </div>
    );
};

export default Items;