import { useLottie } from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.json";

const Hero = () => {
	const lottieAnimOptions = {
		animationData: hero,
		loop: true,
	};
	const { View } = useLottie(lottieAnimOptions);
	return (
		<div className="hero lg:min-h-screen container mx-auto my-10">
			<div className="flex flex-col md:flex-col-reverse rounded-lg shadow-lg p-6 lg:p-20 bg-info gap-5 w-full">
				<div className="lg:w-7/12 mx-auto bg-gradient-to-r from-primary to-blue-200 rounded-lg shadow-lg">
					{View}
				</div>
				<div className="w-10/12 mx-auto text-center">
					<h1 className="text-6xl font-bold ">Cyber Education</h1>
					<h2 className="text-2xl py-4 ">
					A Place where Teach About ABC Of Cyber Security
					</h2>
				
            <p>We have 40k+ Online courses & 500K+ Online registered student. Find your desired Courses from them.</p>
					<div className="ctn flex  flex-col lg:flex-row justify-center items-center py-10">
						<div className="avatar-group -space-x-6">
							<div className="avatar">
								<div className="w-12">
									<img src="https://placeimg.com/192/192/animals" />
								</div>
							</div>
							<div className="avatar">
								<div className="w-12">
									<img src="https://placeimg.com/192/192/arch" />
								</div>
							</div>
							<div className="avatar">
								<div className="w-12">
									<img src="https://placeimg.com/192/192/nature" />
								</div>
							</div>
							<div className="avatar placeholder">
								<div className="w-12 bg-neutral-focus text-neutral-content">
									<span>+99</span>
								</div>
							</div>
						</div>
                        <div>
                        500K+ People already trusted us. 
                        </div>
                        <Link to={'/curriculum'}>
                        <span className="btn btn-primary text-neutral cursor-pointer p-4 rounded-md" >
                        View curriculum
                        </span>
                        </Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
