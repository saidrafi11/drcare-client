import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51MWj0cIiKLJstUJRNcyz5Ds9wLbDzhXSJSwYneceZYVNG85elLAhoHzeWHWTolyBmJ70ybhBNSK8JWIMSQIDBYGs00cHh8VUVJ');
const ConfirmOrder = () => {

const {  price} = useLoaderData();
    
    const priceINT = parseInt(price)
    const total = (priceINT * .15) + priceINT;
 
    
    
    return (
        <div  className='min-h-screen w-full p-5'>
            <h1 className='text-center text-2xl font-bold'>Confirm subscription</h1>
            <section>

                <div className=' max-w-lg mx-auto'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm total={total} />
                    </Elements>
                </div>
            </section>
        </div>
    );
};

export default ConfirmOrder;