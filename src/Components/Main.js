import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Footer2 from './Footer2';
import Navbar from './Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer2></Footer2>
        </div>
    );
};

export default Main;