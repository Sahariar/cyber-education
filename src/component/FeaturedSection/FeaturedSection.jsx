import React, { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import { Swiper, SwiperSlide } from "swiper/react";
import { BsCurrencyDollar , BsStarFill, BsStarHalf } from "react-icons/bs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { useNavigate } from 'react-router-dom';
const FeaturedSection = () => {
    const{feature} = useContext(DataContext);
    const navigate = useNavigate();

    const handleNavigate = (id) =>{
      navigate(`/curriculum/${id}`)
    }
    return (
        <section className="home-featured-section my-10">
			<div className="p-12 my-10 container mx-auto">
            <p className='text-sm text-accent text-center'> 
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary-content relative inline-block">
    <span className="relative text-white">Featured Curriculum</span>
  </span>       
                    </p>
				<h2 className="text-4xl font-bold text-center pt-5">
                    Check out our Featured Curriculum and  Build your career
				</h2>

			</div>
 
        <div className="container mx-auto">
        <div className="flex flex-col-reverse xl:flex-row">
            <div className="xl:w-4/12">
            <div className="w-10/12 text-black card mx-auto card-compact bg-base-100 shadow-xl p-12 bg-gradient-to-r from-primary to-blue-200">
			<figure>
				
			</figure>
			<div className="card-body">
				<h2 className="text-4xl text-center">Fun Course & Learning</h2>
                <h3 className='text-2xl text-center'>Transform Your Life Through Online Education</h3>
        <p className='text-lg'>
        
Instructors from around the world teach millions of students on Cyber Education. We provide the tools and skills to teach what you love. And you can also achieve your goal.
        </p>
        <div className="card-actions">
  
      
			
				</div>
			</div>
      
		</div>
            </div>
            <div className="xl:w-8/12 p-2">
            <Swiper
        cssMode={true}
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        loop={true}
        pagination={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        modules={[Navigation, Pagination , Autoplay]}
        className="mySwiper"
      >
        {
          feature.map(item => <SwiperSlide key={item.id}>
            <div className="w-full card mx-auto  bg-base-100 shadow-xl">
			<figure>
				<img src={item.img} alt={item.tittle} />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{item.tittle}...</h2>
				<div className="card-actions justify-start items-center">
				</div>
        <div className="card-actions">
          <button className="btn btn-primary btn-block" onClick={() => {
							handleNavigate(item.id);
						}}>
          
          See Details
         
          </button>
      
			
				</div>
			</div>
      
		</div>
        </SwiperSlide>)  
        }
      
      </Swiper>
            </div>
        </div>
        
           
        </div>
   

				

		</section>
    );
};

export default FeaturedSection;