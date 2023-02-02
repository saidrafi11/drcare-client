import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import useTitle from '../Hooks/useTitle';

import Doctors from './HomeCompo/Doctors';

import Section2Updated from './HomeCompo/Section2Updated';
import Service from './HomeCompo/Service';
import "animate.css/animate.min.css";




const Home = () => {
    useTitle('Home page')
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div>
            <div >
                <Section2Updated></Section2Updated>
            </div>


            {/* Home page components */}


            <div className='m-5'>
                {/* <Carousel></Carousel> */}
            </div>
            <div>
                <Service></Service>
            </div>
            <div>
                <Doctors></Doctors>
            </div>

            <div>
           
           
            </div>

        </div>
    );
};

export default Home;