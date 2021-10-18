import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import AboutSection from './AboutSection/AboutSection';
import Equipments from './Equipments/Equipments';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <Services></Services>
            <Equipments></Equipments>
        </div>
    );
};

export default Home;