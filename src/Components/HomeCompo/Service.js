import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import ServiceCard from './ServiceCard';
import { HashLoader } from 'react-spinners';

const Service = () => {
    const [services, setService] = useState([])
    const { loading } = useContext(AuthContext);
    useEffect(() => {
        fetch('https://y-chi-neon.vercel.app/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className=' p-5 '  >
    <div className='text-center animate__animated animate__zoomIn'>
        <p className='text-3xl font-bold text-blue-900'>Featured Services</p>

        <p className='mb-5 font-medium'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
    </div>

{
    loading ?
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
    <Link style={{ backgroundImage: ' radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% )' }} to='/services' className=" btn  btn-wide glass text-white text-2xl font-bold">see all</Link>

</div>
        </div >
    );
};

export default Service;