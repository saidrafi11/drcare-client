import React from 'react';
import useTitle from '../Hooks/useTitle';
import Carousel from './Carousel';
import Section1 from './HomeCompo/Section1';
import Section2 from './HomeCompo/Section2';
import Service from './HomeCompo/Service';


const Home = () => {
    useTitle('Home page')
    return (
        <div>
<div>
                <Section2></Section2>
            </div>

            
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
            
                <div>



                </div>

        </div>
    );
};

export default Home;