import React from 'react';
import { BsCurrencyDollar,  } from "react-icons/bs";
import { HiDesktopComputer } from "react-icons/hi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { BiCategory,BiTime } from "react-icons/bi";
import { AiOutlineFileText , AiOutlineUsergroupAdd } from "react-icons/ai";
import { GiKeyring } from "react-icons/gi";
import { GrResources } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
const DetailsSidebar = ({cuDetails , studentEnroll }) => {
    const { id, tittle, description, img, profile, price, rating ,cate_name ,content } = cuDetails;
    const downloadableGen = Math.floor((Math.random() * 10) + 1);
   
    
    const navigate = useNavigate();

    const handleEnroll = () => {
        console.log('pressed');
        navigate(`/checkout/${id}`);
    }

    return (
        <div className="card bg-base-100 shadow-xl mx-auto">
        <figure>
            <img src={img} alt={tittle} />
        </figure>
        <div className="card-body">
            <div className="card-actions justify-between border-b-slate-100 border-b-2 py-2">
                <div className="price flex text-lg text- justify-start items-center font-bold">
                    <HiDesktopComputer />
                    <span className='mx-2'> 
                    Live Class
                        </span> 
                </div>
                <div className="price flex text- justify-start items-center font-bold ">
                    
                <span className="flex h-4 w-4 relative">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full  h-4 w-4 bg-red-500"></span>
        </span>
               
                </div>
            </div>
            <div className="card-actions justify-between border-b-slate-100 border-b-2 py-2">
                <div className="price flex text-lg text- justify-start items-center font-bold">
                    <FaFileInvoiceDollar /> <span className='mx-2'> 
                    Price
                        </span> 
                </div>
                <div className="price flex text-xl text- justify-start items-center font-bold  ">
                    <BsCurrencyDollar />
                    <p>{price}</p>
                </div>
            </div>
            <div className="card-actions justify-between border-b-slate-100 border-b-2 py-2">
                <div className="price flex text-lg text- justify-start items-center font-bold">
                    <BiCategory /> <span className='mx-2'> 
                    Category
                        </span> 
                </div>
                <div className="price flex text-xl text- justify-start items-center font-bold  ">
                  
                    <p>{cate_name}</p>
                </div>
            </div>
            <div className="card-actions justify-between border-b-slate-100 border-b-2 py-2">
                <div className="price flex text-lg text- justify-start items-center font-bold">
                    <BiTime /> <span className='mx-2'> 
                    Duration
                        </span> 
                </div>
                <div className="price flex text-xl text- justify-start items-center font-bold  ">
                  
                    <p>8 Weeks</p>
                </div>
            </div>
            <div className="card-actions justify-between border-b-slate-100 border-b-2 py-2">
                <div className="price flex text-lg text- justify-start items-center font-bold">
                    <AiOutlineFileText /> <span className='mx-2'> 
                    Lectures
                        </span> 
                </div>
                <div className="price flex text-xl text- justify-start items-center font-bold  ">
                  
                    <p>{content.length}</p>
                </div>
            </div>
            <div className="card-actions justify-between border-b-slate-100 border-b-2 py-2">
                <div className="price flex text-lg text- justify-start items-center font-bold">
                    <GrResources /> <span className='mx-2'> 
                    Resources
                        </span> 
                </div>
                <div className="price flex text-xl text- justify-start items-center font-bold  ">
                  
                    <p> {downloadableGen} Downloads</p>
                </div>
            </div>
            <div className="card-actions justify-between border-b-slate-100 border-b-2 py-2">
                <div className="price flex text-lg text- justify-start items-center font-bold">
                    <AiOutlineUsergroupAdd /> <span className='mx-2'> 
                    Enrolled 
                        </span> 
                </div>
                <div className="price flex text-xl text- justify-start items-center font-bold  ">
                  
                    <p>{studentEnroll} Students</p>
                </div>
            </div>
            <div className="card-actions justify-between border-b-slate-100 border-b-2 py-2">
                <div className="price flex text-lg text- justify-start items-center font-bold">
                    <GiKeyring /> <span className='mx-2'> 
                    Access 
                        </span> 
                </div>
                <div className="price flex text-xl text- justify-start items-center font-bold  ">
                  
                    <p>Lifetime</p>
                </div>
            </div>
            
        </div>
        <div className="card-actions py-2 mx-6">
                <button className="btn btn-primary btn-block" onClick ={()=>{
                    handleEnroll()
                }}>
                    Enroll Now
                </button>
            </div>
        <div className="card-actions justify-center my-4">
                <div className="price flex text-sm  items-center">
                <p className="text-sm">30-Day Money-Back Guarantee</p>
                </div>
            </div>
    </div>
    );
};

export default DetailsSidebar;