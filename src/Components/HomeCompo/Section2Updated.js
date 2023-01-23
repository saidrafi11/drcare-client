
import React from 'react';
import 'animate.css';

const Section2Updated = () => {
    return (
        <div >
        <div className='flex justify-center items-center p-5 text-center'>
        <div>
        <h1 className='text-blue-500 font-extrabold 
        sm:text-xl
        md:text-3xl
        lg:text-5xl
        animate__bounceIn
        '>Helping you to live better</h1>
        <h1 className='text-black  sm:font-normal
        lg:font-bold
        md:font-semibold
        mt-1
        sm:text-sm
        md:text-md
        lg:text-3xl
        
        '>We bring hope and smile to the patient we serve</h1>
        </div>
         <img className='w-1/2' src="https://img.freepik.com/free-photo/therapist-with-stethoscope-helps-man-crutches_1401-45.jpg?w=740&t=st=1674456043~exp=1674456643~hmac=426667aa1bb8f443bb6e4cd4ce7b59036be7bbb44891473f8a10a56669bed870" alt="" />
        </div>

        <div  className=' flex flex-col md:flex-row lg:flex-row mx-auto  p-10 items-center -mt-14 animate__animated animate__zoomIn '>
            <div className='bg-blue-500 w-full min-h-24 h-36 flex justify-center items-center '>
            <div>
            <div className='rounded-full bg-blue-300 w-16 h-16 p-2 mt-2 mx-auto'><img src="https://cdn-icons-png.flaticon.com/512/2869/2869649.png" alt="" />
            
            </div>
            <h1 className='text-white mt-2'>Emergency Care</h1>
            </div>
            
            </div>
            <div className='bg-blue-800 w-full min-h-24 h-36 flex justify-center items-center'>
            <div>
            <div className='rounded-full bg-blue-300 w-16 h-16 p-2 mt-2 mx-auto'><img src="https://cdn-icons-png.flaticon.com/512/3481/3481061.png" alt="" />
            
            </div>
            <h1 className='text-white mt-2'>Qualified Doctors</h1>
            </div>
            </div>
            <div className='bg-blue-500 w-full min-h-24 h-36 flex justify-center items-center'>
            <div>
            <div className='rounded-full bg-blue-300 w-16 h-16 p-2 mt-2 mx-auto'><img src="https://cdn-icons-png.flaticon.com/512/3056/3056512.png" alt="" />
            
            </div>
            <h1 className='text-white mt-2'>Outdoor Checkup</h1>
            </div>
            </div>
            <div className='bg-blue-800 w-full min-h-24 h-36 flex justify-center items-center'>
            <div>
            <div className='rounded-full bg-blue-300 w-16 h-16 p-2 mt-2 mx-auto'><img src="https://cdn-icons-png.flaticon.com/512/6715/6715756.png" alt="" />
            
            </div>
            <h1 className='text-white mt-2'>24 Hours Service</h1>
            </div>
            </div>
        </div>


      </div>
            
        
    );
};

export default Section2Updated;