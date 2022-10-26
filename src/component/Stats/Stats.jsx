import React from 'react';

const Stats = () => {
    return (
        <section className="p-6 bg-slate-100 py-10">

<div className="p-12 container mx-auto">
            <p className='text-sm text-center'> 
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary-content relative inline-block">
    <span className="relative text-white">Our Stats</span>
  </span>       
                    </p>
				<h2 className="text-4xl font-bold text-center mt-10">
                    Our Course Help Students All Over The World
				</h2>

			</div>

        <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
            <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
                <p className="text-sm sm:text-base">Students</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
                <p className="text-sm sm:text-base">Followers on social media</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
                <p className="text-sm sm:text-base">Published books</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
                <p className="text-sm sm:text-base">TED talks</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
                <p className="text-sm sm:text-base">Years of experience</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
                <p className="text-sm sm:text-base">Workshops</p>
            </div>
        </div>
    </section>
    );
};

export default Stats;