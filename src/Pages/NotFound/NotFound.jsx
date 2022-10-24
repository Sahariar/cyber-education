import React from 'react';
import { useLottie } from "lottie-react";
import notfound from "../../assets/404-not-found.json";
import { Link } from 'react-router-dom';


const NotFound = () => {
    const lottieAnimOptions = {
		animationData: notfound,
		loop: true,
	};
	const { View } = useLottie(lottieAnimOptions);
    return (
        <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
        <div className="w-full">
            <div className="w-8/12 mx-auto">
            {View}
            </div>
            <div className="w-8/12 mx-auto">
            <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800 text-center">Looks like you've found the doorway to the great nothing</h1>
             <div className="my-5 mx-auto w-1/2">
           <Link to={'/'}>
            <span className="w-full lg:w-auto my-4 border rounded-md px-1 sm:px-16 py-5 bg-primary text-white text-center hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Go back to Homepage</span>
            </Link>
           </div>
            </div>
        </div>
    </div>
    );
};

export default NotFound;