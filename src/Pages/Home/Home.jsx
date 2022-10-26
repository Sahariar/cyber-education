import React from 'react';
import Hero from '../../component/Hero/Hero';
import HomeCategory from '../../component/HomeCategory/HomeCategory';
import Stats from '../../component/Stats/Stats';

const Home = () => {
    return (
        <>
          <Hero></Hero>  
          <HomeCategory></HomeCategory>
          <Stats></Stats>
        </>
    );
};

export default Home;