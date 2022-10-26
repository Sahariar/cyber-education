import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CurriculumDetails from "../component/CurriculumDetails/CurriculumDetails";
import Root from "../Layout/Root";
import Blog from "../Pages/Blog/Blog";
import Category from "../Pages/Category/Category";
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
                loader: ()=> fetch('https://cyber-education-server.vercel.app/curriculum'),
                element:<Curriculum></Curriculum>
            },
            {
                path:"/curriculum/:id",
                loader: ({params})=> fetch(`https://cyber-education-server.vercel.app/curriculum/${params.id}`),
                element:<CurriculumDetails></CurriculumDetails>
            },
            {
                path:"/category",
                loader: ()=> fetch(`https://cyber-education-server.vercel.app/cate`),
                element:<Category></Category>
            },
            {
                path:"/category/:id",
                loader: ({params})=> fetch(`https://cyber-education-server.vercel.app/cate/${params.id}`),
                element:<Category></Category>
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

            },
            {
                path:'/checkout/:id',
                loader:({params})=> fetch(`https://cyber-education-server.vercel.app/curriculum/${params.id}`),
                element:<PrivateRoutes> <Checkout></Checkout> </PrivateRoutes> 

            }

        ]
    },
    {
        path:'*',
        element: <NotFound></NotFound>
    }
])