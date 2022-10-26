import React from 'react';
import { BsCurrencyDollar,  } from "react-icons/bs";
import { HiDesktopComputer } from "react-icons/hi";
import { FaFileInvoiceDollar } from "react-icons/fa";
const DetailsSidebar = ({cuDetails}) => {
    const { id, tittle, description, img, profile, price, rating } = cuDetails;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
            <img src={img} alt={tittle} />
        </figure>
        <div className="card-body">
            <div className="card-actions justify-between border-b-slate-100 border-b-2 py-2">
                <div className="price flex text-lg text- justify-start items-center font-bold text-neutral">
                    <HiDesktopComputer />
                    <span className='mx-2'> 
                    Live Class
                        </span> 
                </div>
                <div className="price flex text- justify-start items-center font-bold text-yellow-400 ">
                    
                <span class="flex h-4 w-4 relative">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full  h-4 w-4 bg-red-500"></span>
        </span>
               
                </div>
            </div>
            <div className="card-actions justify-between border-b-slate-100 border-b-2 py-2">
                <div className="price flex text-lg text- justify-start items-center font-bold text-neutral">
                    <FaFileInvoiceDollar /> <span className='mx-2'> 
                    Price
                        </span> 
                </div>
                <div className="price flex text-xl text- justify-start items-center font-bold text-yellow-400 ">
                    <BsCurrencyDollar />
                    <p>{price}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default DetailsSidebar;