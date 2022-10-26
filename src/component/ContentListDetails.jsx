import React from 'react';
import { BiTime } from "react-icons/bi";
const ContentListDetails = ({item}) => {
    const {contentName , contentDuration } = item
    return (
        <div className="card-actions justify-between border-b-slate-100 border-b-2 mx-10 p-4 ">
        <div className=" flex text-lg text- justify-start items-center">
        <p>{contentName}</p>
        </div>
        <div className=" flex text-xl text- justify-start items-center">
           
        <span className='mx-2'> <BiTime /> </span> {contentDuration} Minutes
        </div>
    </div>
    );
};

export default ContentListDetails;