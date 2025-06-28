import React from 'react';
import Banner from '../components/banner/Banner';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
        </div>
    );
};

export default Home;