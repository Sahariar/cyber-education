import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Shared/Footer';
import Header from '../component/Shared/Header';

const Root = () => {
    return (
        <>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>  
        </>
    );
};

export default Root;