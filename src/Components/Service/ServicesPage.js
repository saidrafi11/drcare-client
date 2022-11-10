import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Tbody from './Tbody';
import { HashLoader } from 'react-spinners';
import useTitle from '../../Hooks/useTitle';

const ServicesPage = () => {
  useTitle('Services')
  const {loading} =useContext(AuthContext);
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
     loading?
     <>
        
        <div className=' min-h-screen flex justify-around items-center m-12'>
            <HashLoader color="#36d7b7" />
        </div>
        
     </> 
     :
     <>
     {
      allServices.map(service => <Tbody key={service._id} service={service}></Tbody>)
     }
     </>               
                }

    
  </table>

  <div className='flex justify-center m-5'>

{/* The button to open modal */}
<Link to='/addservices' htmlFor="my-modal-6" className="btn btn-outline  btn-success btn-wide font-bold">+ Add service</Link>






</div>
</div>
    );
};

export default ServicesPage;