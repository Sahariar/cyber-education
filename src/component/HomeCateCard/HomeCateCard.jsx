import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeCateCard = ({item}) => {
    const {name , id , img} = item
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/category/${id}`);
    }
   
    return (
        <div className="card items-center rounded-lg shadow-lg py-4 cursor-pointer hover:bg-info" onClick={() => {
            handleNavigate()
          }}>
        <div className="">
        <div className="w-32 h-32 rounded-full ring ring-info ring-offset-base-100 ring-offset-2 mx-auto flex bg-info justify-center items-center">
          <img src={img} alt={name} className="w-20 h-20 mx-auto" />
        </div>
      </div>
      <h2 className="text-2xl text-center font-bold mt-5 cursor-pointer hover:bg-primary px-4" >
     {name}
        </h2>
      </div> 
    );
};

export default HomeCateCard;