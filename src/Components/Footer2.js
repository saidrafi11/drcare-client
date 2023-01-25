import React from 'react';
import { Link } from 'react-router-dom';

const Footer2 = () => {
    return (
        <div className='w-full bg-black flex flex-col lg:flex-row lg:p-20 p-10'>
            <div className='text-white mx-auto lg:w-1/3 w-full p-2'>
                <h1 className='text-blue-400 text-4xl font-extrabold'>Dr Care</h1>
                <h1 className=' text-gray-300 text-md  font-medium mb-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h1>
                <h1 className='text-white text-3xl font-bold'>Have  Questions?</h1>
                <div className=' text-gray-300 text-md  font-medium mt-3 flex flex-row items-middle'><span className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                </span>
                    203 Fake St. Mountain View, Bangladesh</div>
                <div className=' text-gray-300 text-md  font-medium mt-2 flex flex-row items-middle'>
                    <span className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>

                    </span>	+8801861-664711</div>
                <div className=' text-gray-300 text-md  font-medium mt-2 flex flex-row items-middle'>	<span className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
                    <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
                </svg>

                </span> said.rafi@outlook.com</div>
               
            </div>
            <div className='text-white mx-auto lg:w-1/3 w-full p-2'>
            <h1 className='text-white text-3xl font-bold'>Links</h1>
                <h1 className=' text-gray-300 text-md  font-medium '><Link>Home</Link></h1>
                <h1 className=' text-gray-300 text-md  font-medium '><Link>About</Link></h1>
                <h1 className=' text-gray-300 text-md  font-medium '><Link>Services</Link></h1>
                <h1 className=' text-gray-300 text-md  font-medium '> <Link>Contact</Link></h1>
                
                
                <Link>Contact</Link>
            </div>
            <div className='text-white mx-auto lg:w-1/3 w-full p-2'>
            <h1 className='text-white text-3xl font-bold'>Opening hours</h1>
            <div className=' text-gray-300 text-md  font-medium mt-2 flex flex-row items-middle'>	<span className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
</svg>


                </span> We are open 24/7</div>
            </div>
        </div>
    );
};

export default Footer2;