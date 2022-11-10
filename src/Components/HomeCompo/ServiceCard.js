import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const ServiceCard = ({service}) => {
  const {loading} =useContext(AuthContext);
    const {_id, img, price, title, 
        description} = service;
    return (
        <div className="card w-96 glass">
  <figure><img src={img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description.slice(0, 100) + '...'}</p>
    <div className="card-actions justify-end">
    <Link to={`/services/${_id}`} className="btn btn-info text-white font-semibold">View details</Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;