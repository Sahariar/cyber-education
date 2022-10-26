import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillArrowRightSquareFill } from "react-icons/bs";
const CategoryList = ({category}) => {

    const { id, name } = category
    const pathUrl = window.location.pathname
    const navigate = useNavigate() 
    const handleCateNavigation = () => {
        navigate(`/category/${id}`);
    }
    return (
        <div className= {pathUrl === `/category/${id}` ? "card-actions justify-between py-2 cursor-pointer px-5 bg-primary rounded-lg" :"card-actions justify-between py-2 cursor-pointer px-5" }
        onClick={
            ()=>{
            handleCateNavigation()}
            } >
        <div className="price flex text-lg text- justify-start items-center font-bold  ">
            <p className='flex items-center gap-2'><span>
                <BsFillArrowRightSquareFill />
                </span> {name}</p>
        </div>
    </div>
    );
};

export default CategoryList;