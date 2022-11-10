import React from 'react';
import { useContext } from 'react';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../Context/AuthProvider';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    useTitle('My reviews')
    return (
        <div>
            <h1>reviews</h1>
        </div>
    );
};

export default MyReviews;