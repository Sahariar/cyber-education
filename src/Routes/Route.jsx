import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Booking from "../Pages/Booking/Booking";
import Home from "../Pages/Home/Home";
import Hospital from "../Pages/Hospital/Hospital";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Research from "../Pages/Research/Research";
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
                path:"/hospital",
                element:<Hospital></Hospital>
            },
            {
                path:"/research",
                element:<Research></Research>
            },
            {
                path:"/booking",
                element:<PrivateRoutes> <Booking> </Booking> </PrivateRoutes> 
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/register",
                element:<Register />
            },

        ]
    },
])