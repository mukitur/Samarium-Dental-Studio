import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import AboutSection from './AboutSection/AboutSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <Services></Services>
        </div>
    );
};

export default Home;