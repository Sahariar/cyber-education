import React, { useContext } from 'react';
import CategoryList from '../CategoryList/CategoryList';
import { BiCategory} from "react-icons/bi";
import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { GrSort } from "react-icons/gr";
const Sidebar = () => {
  const { dataCate } = useContext(DataContext);
  
  const navigate = useNavigate() 
  const handleCateNavigation = () => {
      navigate(`/curriculum`);
  }
  const pathUrl = window.location.pathname
    return (
        <div className="card md:w-8/12 w-11/12 lg:w-full bg-base-100 shadow-xl mx-auto">
  <div className="card-body">
    <div className="category-area">
    <h2 className="card-title ">
    <BiCategory /> Category:
    </h2>
      {
        dataCate.map( cate => <CategoryList
        key={cate.id}
        category = {cate}
        ></CategoryList> )
      }
    <div className={pathUrl === `/curriculum` ? "card-actions justify-between py-2 cursor-pointer px-5 bg-primary rounded-lg" :"card-actions justify-between py-2 cursor-pointer px-5" } 
        onClick={
            ()=>{
            handleCateNavigation()}
            } >
        <div className="price flex text-xl text- justify-start items-center font-bold  ">
        <p className='flex gap-2 items-center'><span className=''>
                <BsFillArrowRightSquareFill />
                </span> <span>All Category</span></p>
           
        </div>
    </div>
  </div>
    <div className="sort-area my-10">
    <h2 className="card-title ">
    <GrSort /> Sort By:
    </h2>
            

  </div>
    <div className="sort-area my-10">
    <h2 className="card-title ">
    <GrSort /> Status:
    </h2>
            

  </div>
    <div className="sort-area my-10">
    <h2 className="card-title ">
    <GrSort /> Rating:
    </h2>
            

  </div>

    </div>

</div>
    );
};

export default Sidebar;