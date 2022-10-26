import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import DetailsContent from "../DetailsContent/DetailsContent";
import DetailsSidebar from "../DetailsSidebar/DetailsSidebar";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const CurriculumDetails = () => {
	const cuDetails = useLoaderData();
	const { id, tittle, description, img, profile, price, rating } = cuDetails;
    const studentEnroll = Math.floor((Math.random() * 1000) + 1);

	return (
		<section className="curriculum-details-page" ref={ref}>
			<div className="bg-accent p-12 my-10 shadow-xl">
				<h1 className="text-4xl font-bold text-center text-white">{tittle}</h1>
				<div className="text-sm breadcrumbs text-center justify-center flex mt-4 text-white">
					<ul>
						<li>
							<Link to={"/"}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="w-4 h-4 mr-2 stroke-current"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
									></path>
								</svg>
								Home
							</Link>
						</li>
						<li>
							<Link to={"/curriculum"}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="w-4 h-4 mr-2 stroke-current"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
									></path>
								</svg>
								Curriculum
							</Link>
						</li>
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="w-4 h-4 mr-2 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
								></path>
							</svg>
							{tittle}
						</li>
					</ul>
				</div>
                <div className="container mx-auto">
                    <div className="w-4/12 mx-auto flex mt-4">
        <Pdf targetRef={ref} filename="curriculum.pdf" scale={0.415}>
        {({ toPdf }) => <button className="btn-primary btn btn-wide text-center mx-auto" onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
                    </div>
                </div>
         
			</div>
			<div className="container mx-auto space-y-6 my-24">
				<div className="flex flex-col xl:flex-row-reverse gap-4">
					<div className="xl:w-3/12 w-11/12 mx-auto ">
						<DetailsSidebar 
                        cuDetails = {cuDetails}
                        studentEnroll = { studentEnroll }
                        ></DetailsSidebar>
					</div>
					<div className="xl:w-9/12 mx-auto w-11/12">
                    <DetailsContent 
                        cuDetails = {cuDetails}
                        studentEnroll = { studentEnroll }
                        ></DetailsContent>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CurriculumDetails;
