import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageInventory = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div>
            <h2>This is manage inventory</h2>
        </div>
    );
};

export default ManageInventory;