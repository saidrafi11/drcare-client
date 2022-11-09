import React from 'react';
import { Link } from 'react-router-dom';

const Tbody = ({service}) => {
    const {_id, img, price, title, 
        description} = service;
        console.log(service)
    return (
        <tbody>
     
      <tr>
        <th>
          <label>
            {/* <input type="checkbox" className="checkbox" /> */}
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask rounded w-48 h-24">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              
            </div>
          </div>
        </td>
    
        <td>${price}</td>
        <th>
          <Link to={`/services/${_id}`} className="btn btn-ghost btn-xs">details</Link>
        </th>
      </tr>
  
      
    
      
    
      
    
    </tbody>
    );
};

export default Tbody;