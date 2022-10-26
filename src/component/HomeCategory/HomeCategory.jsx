import React, { useContext } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { DataContext } from '../../context/DataProvider';
import HomeCateCard from '../HomeCateCard/HomeCateCard';

const HomeCategory = () => {
    const{ dataCate } =useContext(DataContext);
 
    return (
        <section className="home-cate-section my-10">
			<div className="p-12 my-10 container mx-auto">
            <p className='text-sm text-accent text-center'> 
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary-content relative inline-block">
    <span className="relative text-white">Top Categories</span>
  </span>       
                    </p>
				<h2 className="text-4xl font-bold text-center">
                    Pick the right category Build your career
				</h2>

			</div>
 
        <div className="container mx-auto">
        <div className="cate-section grid grid-cols-2 md:grid-cols-4 gap-10">
                {
                    dataCate.map( item => <HomeCateCard
                    key={item.id}
                    item= {item}>
                        
                    </HomeCateCard> )

                }
            </div>
        </div>
   

				

		</section>
    );
};

export default HomeCategory;