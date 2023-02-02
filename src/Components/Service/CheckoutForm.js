import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const CheckoutForm = (total) => {
  const { title, price } = useLoaderData()
  console.log(title, price);
  const serviceTitile = title
  const initialState = {
    name: '',
    email: ''
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);




  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('')
  
  const [TID, setTID] = useState('')
  const [processing, setProcessing] = useState(false)
  console.log(error);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://y-chi-neon.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ total }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [total]);

  const handleSubmit = async (event) => {


    // Block native form submission.
    event.preventDefault();
    console.log(state);


    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: state.name,
            email: state.email

          },

        },

      },

    );
    
    if (confirmError) {
      setError(confirmError.message)
      return;
    }
    if (paymentIntent.status === 'succeeded') {
      setTID(paymentIntent.id)
      axios.post('https://y-chi-neon.vercel.app/payments', {
      subscriberName: state.name,
      subscriberEmail: state.email,
      transactionID: paymentIntent.id,
      date: Date(),
      serviceName: title

      })
        .then(function (response) {
    
        })
        .catch(function (error) {
          console.log(error);
        });
     
      toast.success('Payment succeeded.')


    }
    setProcessing(false)
  };



  return (
    <>
      <Toaster />
      <div >
        <table className="table table-compact mx-auto ">
          <tbody>
            <tr>
              <th>Service name:</th>
              <td>{serviceTitile}</td>

            </tr>
            <tr>
              <th>Price:</th>
              <td>$ {price}</td>

            </tr>
            <tr>
              <th>Vat: </th>
              <td>15%</td>

            </tr>
            <tr>
              <th>Total: </th>
              <td>${total?.total}</td>

            </tr>
            <tr>
              <th>Subscriber Name:</th>
              <td>{state.name}</td>

            </tr>
            <tr>
              <th>Subscriber email:</th>
              <td> {state.email}</td>

            </tr>
            {
              TID ?
                <tr>
                  <th>Transection ID:</th>
                  <td> {TID}</td>

                </tr>
                :
                <>
                </>
            }
          </tbody>
        </table>
      </div>
      {
        TID ?
          <>
            <div>
              <img className='w-32 mx-auto' src="https://openjournalsystems.com/wp-content/uploads/2017/07/payment-success.png" alt="" />
              <h1 className='font-bold text-3xl text-center text-green-600'>Payment succesfull</h1>
            </div>

          </>
          :
          <>

            <form className='' onSubmit={handleSubmit}>
              <div className="form-control mb-2 w-full">

                <label className="label">
                  <span className="label-text font-semibold">Patient Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="h-8 rounded-sm px-2" required
                  onChange={(e) => {
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value }
                    })
                  }} />
              </div>


              <div className="form-control mb-5">
                <label className="label">
                  <span className="label-text font-semibold">Patient email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="h-8 rounded-sm px-2" required onChange={(e) => {
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value }
                  })
                }} />
              </div>

              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#424770',
                      '::placeholder': {
                        color: '#aab7c4',
                      },
                    },
                    invalid: {
                      color: '#9e2146',
                    },
                  },
                }}
              />
              <button className='btn btn-info btn-sm square mt-2' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
              </button>
              <h1 className='text-red-700'>{error}</h1>


            </form>
          </>
      }

    </>
  );
};

export default CheckoutForm;