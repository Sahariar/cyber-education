import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Curriculum from "../Pages/Curriculum/Curriculum";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import NotFound from "../Pages/NotFound/NotFound";
import Profile from "../Pages/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";


export const route = createBrowserRouter([
    { 
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:"/home",
                element: <Home></Home>
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/register",
                element:<Register />
            },
            {
                path:"/curriculum",
                element:<Curriculum></Curriculum>
            },
            {
                path:"/faq",
                element:<Faq></Faq>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:'/profile',
                element:<PrivateRoutes> <Profile></Profile> </PrivateRoutes> 

            },
            {
                path:'/checkout',
                element:<PrivateRoutes> <Checkout></Checkout> </PrivateRoutes> 

            }

        ]
    },
    {
        path:'*',
        element: <NotFound></NotFound>
    }
])