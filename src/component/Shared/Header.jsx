import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Logo from "../Logo";

const Header = () => {
	const { user, logOut } = useContext(AuthContext);
	const [theme, setTheme] = useState(() => {
		const saved = localStorage.getItem("theme");
		const initialValue = JSON.parse(saved);
		return initialValue || "";
	});
	const [isLight, setLight] = useState(() => {
		const saved = localStorage.getItem("theme");
		const initialValue = JSON.parse(saved);
		if (initialValue === "cyberDark") {
			return true;
		} else {
			return false;
		}
	});
	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => {
				console.error(error);
			});
	};
	const handleToggle = () => {
		const newTheme = theme === "cyberDark" ? "cyberLight" : "cyberDark";
		setTheme(newTheme);
	};
	useEffect(() => {
		localStorage.setItem("theme", JSON.stringify(theme));
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);
	useEffect(() => {
		const theme = JSON.parse(localStorage.getItem("theme"));
		if (theme) {
			setTheme(theme);
		}
	}, []);

	return (
		<header className="header-area  bg-base-100">
			<div className="container mx-auto navbar">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<NavLink to={"/home"}> Home</NavLink>
							</li>
							<li>
								<NavLink to={"/curriculum"}> Curriculum</NavLink>
							</li>
							<li>
								<NavLink to={"/faq"}> Faq</NavLink>
							</li>
							<li>
								<NavLink to={"/blog"}> Blog</NavLink>
							</li>
						</ul>
					</div>
					<Link to={"/"}>
						{" "}
						<span className="btn normal-case text-xl gap-2 btn-neutral">
							{" "}
						<Logo> </Logo>
							<span className="text-primary-focus hidden md:block">Cyber Edu</span>
						</span>
					</Link>{" "}
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal p-0">
						<li>
							<NavLink to={"/home"}> Home</NavLink>
						</li>
						<li>
							<NavLink to={"/curriculum"}> Curriculum</NavLink>
						</li>
						<li>
							<NavLink to={"/faq"}> Faq</NavLink>
						</li>
						<li>
							<NavLink to={"/blog"}> Blog</NavLink>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					<div className="">
						<label className="label cursor-pointer">
							🌞
							<input
								type="checkbox"
								name="toggleBtn"
								className="toggle toggle-primary"
								defaultChecked={isLight}
								onChange={() => handleToggle()}
							/>
							🌚
						</label>
					</div>

					{user?.email ? (
						<div className="flex items-center">
							<div className="dropdown dropdown-end">
							<div className="tooltip tooltip-primary tooltip-left" data-tip={`Welcome, ${user?.displayName}`}>
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
									<div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
										<img
											src={
												user?.photoURL
													? user?.photoURL
													: "https://placeimg.com/80/80/people"
											}
										/>
									</div>
								</label>
							</div>
						
								<ul
									tabIndex={0}
									className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
								>
									<li>
										<NavLink to={'/profile'}>
										<span className="justify-between">
											Profile
											<span className="badge mx-1">New</span>
										</span>
										</NavLink>
									</li>
									<li onClick={handleLogOut}>
										<Link>Logout</Link>
									</li>
								</ul>
							</div>
						</div>
					) : (
						<div className="flex">
							<div className="auth-area gap-4 flex">
								<Link to={"/login"}>
									<span className="btn btn-primary">
										{" "}
										Login
									</span>{" "}
								</Link>
							
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
