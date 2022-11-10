import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Tbody from './Tbody';
import { HashLoader } from 'react-spinners';
import useTitle from '../../Hooks/useTitle';

const ServicesPage = () => {
  useTitle('Services')
  const { loading } = useContext(AuthContext);
  const [allServices, setService] = useState([])
  console.log(allServices)


  useEffect(() => {
    fetch('https://y-chi-neon.vercel.app/services')
      .then(res => res.json())
      .then(data => setService(data))
  }, [])









  return (
    <div >

<div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center'>
{
          loading ?
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

  
</div>

     

      <div className='flex justify-center m-5'>

        {/* The button to open modal */}
        <Link to='/addservices' htmlFor="my-modal-6" className="btn btn-outline  btn-success btn-wide font-bold">+ Add service</Link>

      </div>
    </div>
  );
};

export default ServicesPage;