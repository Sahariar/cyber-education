import React from "react";
import { BsCurrencyDollar , BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const CurriculumList = ({ curriculum }) => {
	const { id, tittle, cate_name, img, profile, price, rating } = curriculum;
    const navigate = useNavigate();

    const handleNavigate = () =>{
      navigate(`/curriculum/${id}`)
    }
	return (
		<div className="card card-compact bg-base-100 shadow-xl">
			<figure>
				<img src={img} alt={tittle} />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{tittle}</h2>
				<div className="card-actions justify-start items-center">
				<div className="badge badge-primary p-4">{cate_name}</div>	
				</div>
				<div className="card-actions justify-start items-center">
					<div className="avatar placeholder">
						<div className="bg-neutral-focus text-neutral-content rounded-full w-8">
							<img src={profile.insImg} alt={profile.name} />
						</div>
					</div>

					<p>By {profile.name}</p>
				</div>

        <div className="divider"></div> 
        <div className="card-actions justify-between">
          <div className="price flex text-2xl text- justify-start items-center font-bold ">
           <BsCurrencyDollar /><p>{price}</p>
          </div>
          <div className="price flex text-xl text- justify-start items-center font-bold">
           <span className="flex text-yellow-300"><BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf /> </span> <p className="ml-2 text-secondary">{rating}</p>
          </div>
				
				</div>
        <div className="card-actions">
          <button className="btn btn-primary btn-block" onClick={() => {
							handleNavigate();
						}}>
          
          See Details
         
          </button>
      
			
				</div>
			</div>
      
		</div>
	);
};

export default CurriculumList;
