import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import ServiceCard from './ServiceCard';
import { HashLoader } from 'react-spinners';

const Service = () => {
    const [services, setService] = useState([])
    const {loading} =useContext(AuthContext);
    useEffect(()=>{
        fetch('https://y-chi-neon.vercel.app/services')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    
    return (
        <div className=' p-5 ' style={{ 
            backgroundImage: `url("https://img.freepik.com/free-vector/white-abstract-background-design_361591-1377.jpg?w=1380&t=st=1667908438~exp=1667909038~hmac=5d1ee17dcc9dbf746b4d435655dd484adcb2ea5ef5bbab0c093146f66404ee35")` 
          }}>
            <div className='text-center'>
                <p className='text-5xl font-semibold text-blue-400'>Featured Services</p>
                
                <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi consectetur laborum. Cupiditate magnam, voluptas ab iusto accusantium quibusdam quos?</p>
            </div>

            {
     loading?
     <>
        <div className=''>
        <div className=' min-h-screen flex justify-center items-center m-5'>
            <HashLoader color="#36d7b7" />
        </div>
        </div>
     </> 
     :
     <>
     {
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center'>
      {
              services.slice(0, 3).map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
          }

      </div>
     }
     </>               
                }

            
            <div className='flex justify-center mt-5'>
                <Link to='/services' className=" btn  btn-wide glass text-blue-600 text-2xl font-bold">see all</Link>
                
                </div>
        </div>
    );
};

export default Service;