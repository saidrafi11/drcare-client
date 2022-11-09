import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tbody from './Tbody';

const ServicesPage = () => {

    const [allServices, setService] = useState([])
console.log(allServices)
    





    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])



    





    return (
        <div className="overflow-x-auto w-full">
          
          

  <table className="table w-full">
  
    <thead>
      <tr>
        <th >
          <label >
            {/* <input type="checkbox" className="checkbox" /> */}
          </label>
        </th>
        <th className='ml-48'>Service Name</th>
        {/* <th>Job</th> */}
        <th>Price</th>
        <th>Details</th>
      </tr>
    </thead>
    {
                    allServices.map(service => <Tbody key={service._id} service={service}></Tbody>)
                }

    
  </table>
</div>
    );
};

export default ServicesPage;