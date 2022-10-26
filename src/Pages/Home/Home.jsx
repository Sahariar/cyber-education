import React from 'react';
import FeaturedSection from '../../component/FeaturedSection/FeaturedSection';
import Hero from '../../component/Hero/Hero';
import HomeCategory from '../../component/HomeCategory/HomeCategory';
import NewsLetter from '../../component/NewsLetter/NewsLetter';
import Stats from '../../component/Stats/Stats';

const Home = () => {
    return (
        <>
          <Hero></Hero>  
          <FeaturedSection></FeaturedSection>
          <Stats></Stats>
          <HomeCategory></HomeCategory>
          <NewsLetter></NewsLetter>
        </>
    );
};

export default Home;