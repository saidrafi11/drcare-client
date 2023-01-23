import React from 'react';
import useTitle from '../Hooks/useTitle';
import Carousel from './Carousel';
import Doctors from './HomeCompo/Doctors';
import Section1 from './HomeCompo/Section1';
import Section2 from './HomeCompo/Section2';
import Section2Updated from './HomeCompo/Section2Updated';
import Service from './HomeCompo/Service';


const Home = () => {
    useTitle('Home page')
    return (
        <div>
            <div >
                <Section2Updated></Section2Updated>
            </div>


            {/* Home page components */}


            <div className='m-5'>
                <Carousel></Carousel>
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