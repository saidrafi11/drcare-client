import React from 'react';
import useTitle from '../Hooks/useTitle';
import Carousel from './Carousel';
import Section1 from './HomeCompo/Section1';
import Service from './HomeCompo/Service';

const Home = () => {
    useTitle('Home page')
    return (
        <div>

            
            {/* Home page components */}


            <div className='m-5'>
                <Carousel></Carousel>
            </div>
            <div>
                <Service></Service>
            </div>
            <div>
                <Section1></Section1>
            </div>

        </div>
    );
};

export default Home;