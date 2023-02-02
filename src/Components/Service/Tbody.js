import React from 'react';
import { Link } from 'react-router-dom';

const Tbody = ({service}) => {
    const {_id, img, price, title, 
        description} = service;
        console.log(service)
    return (
      <div className="rounded-md p-2 w-96 glass">
      <figure><img className='w-full' src={img} alt="car!"/></figure>
      <div className="p-2 min-h-16">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">Price: ${price}</h2>
        <p>{description.slice(0, 100) + '...'}</p>
        
      </div>
      <div className="card-actions justify-end mb-2">
        <Link to={`/services/${_id}`} className="btn btn-info btn-sm mr-2 mt-2 text-white font-semibold">View details</Link>
        </div>
    </div>
    );
};

export default Tbody;