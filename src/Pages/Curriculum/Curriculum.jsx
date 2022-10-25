import React from 'react';
import { Link } from 'react-router-dom';

const Curriculum = () => {
    return (
        <section className='curriculum-page'>

<div className="bg-accent p-12 my-10 shadow-xl">
				<h1 className="text-4xl font-bold text-center text-white">
                Curriculum Page
				</h1>
				<div className="text-sm breadcrumbs text-center justify-center flex mt-4 text-white">
					<ul>
						<li>
							<Link to={'/'}>
							
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
						<Link to={'/curriculum'}>
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

        </section>
    );
};

export default Curriculum;