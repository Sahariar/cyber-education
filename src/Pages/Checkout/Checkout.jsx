import React ,{ useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Checkout = () => {
    const{ user } = useContext(AuthContext);
    const countries = ["China", "Russia", "UK"];
    const [menu, setMenu] = useState(false);
    const [country, setCountry] = useState("United States");

    const changeText = (e) => {
        setMenu(false);
        setCountry(e.target.textContent);
    };
    const cuDetails = useLoaderData();
    const {tittle, img, profile, price, rating ,cate_name, description } = cuDetails;
    return (
        <section className="checkout-page">
		<div className="bg-accent p-12 my-10 shadow-xl">
				<h1 className="text-4xl font-bold text-center text-white">
                Checkout
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
						<li>
						<Link to={'/checkout'}>
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
								Checkout
								</Link>
						</li>
					</ul>
				</div>
			</div>
     
        <div className="flex justify-center items-center">
            <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                <div className="flex flex-col justify-start items-start w-full space-y-9">

                    <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                        <div className=" flex flex-col xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                            <div className="flex flex-col justify-start items-start w-full space-y-4">
                                <p className="text-xl md:text-2xl leading-normal text-gray-800">{tittle}</p>
                                <p className="text-base font-semibold leading-none text-gray-600">${price}</p>
                            </div>
                            <div className="mt-4 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                                <img src={img} alt={tittle} />
                            </div>
                            <div className="mt-4 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto text-gray-800">
                                {description}
                            </div>
                        </div>

                        <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
                        

                            <div className="mt-8">
                                <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder={user?.email} readOnly />
                            </div>

                            <label className="mt-8 text-base leading-4 text-gray-800">Card details</label>
                            <div className="mt-2 flex-col">
                                <div>
                                    <input className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="0000 1234 6549 15151" />
                                </div>
                                <div className="flex-row flex">
                                    <input className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="MM/YY" />
                                    <input className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="CVC" />
                                </div>
                            </div>

                            <label className="mt-8 text-base leading-4 text-gray-800">Name on card</label>
                            <div className="mt-2 flex-col">
                                <div>
                                    <input className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Name on card" />
                                </div>
                            </div>

                            <label className="mt-8 text-base leading-4 text-gray-800">Country or region</label>
                            <div className="mt-2 flex-col">
                                <div className="relative">
                                    <button className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white" type="email">
                                        {country}
                                    </button>
                                    <svg onClick={() => setMenu(!menu)} className={"transform  cursor-pointer absolute top-4 right-4 " + (menu ? "rotate-180" : "")} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 5.75L8 10.25L12.5 5.75" stroke="#27272A" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className={"mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 " + (menu ? "block" : "hidden")}>
                                        {countries.map((country) => (
                                            <div key={country} className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2" onClick={changeText}>
                                                {country}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <input className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="ZIP" />
                            </div>

                            <button className=" btn btn-primary mt-8 border border-transparent   flex justify-center items-center py-4 rounded w-full">
                                <div>
                                    <p className="text-base leading-4">Pay ${price}</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Checkout;