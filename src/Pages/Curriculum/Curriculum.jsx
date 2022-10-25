import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CurriculumList from "../../component/CurriculumList";
import Sidebar from "../../component/Sidebar/Sidebar";

const Curriculum = () => {
	const curriculums = useLoaderData();
	return (
		<section className="curriculum-page">
			<div className="bg-accent p-12 my-10 shadow-xl">
				<h1 className="text-4xl font-bold text-center text-white">
					Curriculum Page
				</h1>
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
					</ul>
				</div>
			</div>
		<div className="container mx-auto space-y-6">
			<div className="w-1/2 mx-auto">
			<h1 className="text-4xl lg:text-6xl font-bold text-accent text-center my-10">
			Expand Your Career Opportunity With Our Courses
			</h1>
			</div>
			
		<div className="text-xl text-center">
			Curriculums Found :	{curriculums.length}
				</div>

				<div className="flex flex-col lg:flex-row gap-4">
  <div className="lg:w-3/12 w-full ">
	<Sidebar>

	</Sidebar>
  </div>
  <div className="lg:w-9/12 mx-auto w-full">
  <div class="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
		{
			curriculums.map( curriculum => <CurriculumList
			key={curriculum.id}
			curriculum = {curriculum}
			></CurriculumList> )
		}
</div>
  </div>
</div>
		</div>
				

		</section>
	);
};

export default Curriculum;
