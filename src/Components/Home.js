import React from 'react';
import AllTask from './AllTask';
import Navbar from './Shared/Navbar';

const Home = () => {
    return (
        <div className='bg-base-200 h-screen'>
            <Navbar></Navbar>
            <AllTask></AllTask>
        </div>
    );
};

export default Home;