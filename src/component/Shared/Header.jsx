import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

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
						<span className="btn btn-ghost normal-case text-xl gap-2">
							{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="512"
								height="512"
								viewBox="0 0 512 512"
								className="w-10 h-10 fill-primary bg-black rounded-lg"
							>
								<path d="M255.565 30.643c-81.598 0-152.721 46.707-189.777 115.92h50.29l16.74-33.481h115.865c2.055-4.234 5.416-7.771 9.246-10.324 6.302-4.201 14.192-6.414 22.748-6.414 8.555 0 16.446 2.213 22.748 6.414 6.302 4.2 11.361 11.054 11.361 19.324 0 8.27-5.06 15.123-11.361 19.324-6.302 4.201-14.193 6.414-22.748 6.414-8.556 0-16.446-2.213-22.748-6.414-3.83-2.553-7.193-6.09-9.248-10.326H143.94l-7.74 15.482h52.402v17.999H57.143a228.822 228.822 0 00-5.96 15.48h36.974v17.998H45.802c-4.006 15.707-6.415 32.092-7.051 48.963h109.883l16.742-50.22h39.967v17.997h-26.996l-10.743 32.223h47.594c2.056-4.235 5.418-7.773 9.248-10.326 6.302-4.201 14.193-6.414 22.748-6.414 8.556 0 16.446 2.213 22.748 6.414 6.302 4.2 11.364 11.054 11.364 19.324 0 8.27-5.062 15.123-11.364 19.324-6.302 4.201-14.192 6.414-22.748 6.414-8.555 0-16.446-2.213-22.748-6.414-3.83-2.553-7.192-6.09-9.248-10.326h-95.74l24.482 48.963h78.143v17.998h-89.266l-33.482-66.961H38.751c1.614 42.826 14.69 82.527 36.129 115.922h90.096c2.055-4.235 5.42-7.773 9.25-10.326 6.302-4.201 14.19-6.414 22.746-6.414 8.555 0 16.446 2.213 22.748 6.414 6.302 4.2 11.363 11.054 11.363 19.324 0 8.27-5.061 15.123-11.363 19.324-6.302 4.201-14.193 6.414-22.748 6.414-8.556 0-16.444-2.213-22.746-6.414-3.83-2.553-7.193-6.09-9.248-10.324h-9.784l21.483 32.22h73.328l16.74-33.48h39.043v17.998h-27.92l-7.742 15.483h52.402v17.998H167.046l-33.483-50.219H87.716c39.81 50.37 100.234 82.44 167.85 82.44 92.336 0 171.262-59.806 202.581-144.358-4.882 10.507-10.77 19.344-17.916 25.893-7.212 6.609-16.06 10.914-25.628 10.914-9.569 0-18.417-4.305-25.63-10.914-7.212-6.61-13.145-15.546-18.054-26.182-9.818-21.272-15.537-49.542-15.537-80.711 0-31.169 5.719-59.44 15.537-80.71 4.91-10.637 10.842-19.573 18.055-26.183 7.212-6.609 16.06-10.914 25.629-10.914 9.568 0 18.416 4.305 25.628 10.914 7.146 6.549 13.034 15.386 17.916 25.893C426.828 90.448 347.902 30.643 255.565 30.643zm25.112 83.699c-5.313 0-9.98 1.533-12.766 3.39-2.786 1.858-3.348 3.375-3.348 4.35 0 .975.562 2.492 3.348 4.35 2.787 1.857 7.453 3.39 12.766 3.39s9.979-1.533 12.765-3.39c2.787-1.858 3.346-3.375 3.346-4.35 0-.975-.56-2.492-3.346-4.35-2.786-1.857-7.452-3.39-12.765-3.39zm159.037 83.44c-11.598 0-20.097 8.806-25.37 19.35-5.272 10.545-8.163 24.04-8.163 38.868 0 14.829 2.891 28.323 8.164 38.867 5.272 10.545 13.77 19.352 25.369 19.352 11.598 0 20.098-8.807 25.371-19.352 5.273-10.544 8.164-24.038 8.164-38.867 0-14.829-2.891-28.323-8.164-38.867-5.273-10.545-13.773-19.352-25.371-19.352zm4.613 20.157c1.556 1.497 3.261 3.769 4.93 7.106 3.662 7.324 6.299 18.517 6.299 30.955 0 12.438-2.637 23.63-6.3 30.955-3.662 7.324-7.506 9.57-9.542 9.57-2.036 0-5.88-2.246-9.543-9.57-3.663-7.324-6.297-18.517-6.297-30.955 0-.253.008-.502.01-.754a16.458 24.686 0 007.604 2.81 16.458 24.686 0 0016.457-24.685 16.458 24.686 0 00-3.618-15.432zm-197.133 30.32c-5.313 0-9.977 1.534-12.763 3.391-2.787 1.858-3.348 3.375-3.348 4.35 0 .975.561 2.492 3.348 4.35 2.786 1.857 7.45 3.39 12.763 3.39 5.314 0 9.98-1.533 12.766-3.39 2.786-1.858 3.348-3.375 3.348-4.35 0-.975-.562-2.492-3.348-4.35-2.786-1.857-7.452-3.39-12.766-3.39zm-50.222 133.919c-5.314 0-9.978 1.533-12.764 3.39-2.786 1.858-3.348 3.375-3.348 4.35 0 .975.562 2.492 3.348 4.35 2.786 1.857 7.45 3.39 12.764 3.39 5.313 0 9.979-1.533 12.765-3.39 2.787-1.858 3.348-3.375 3.348-4.35 0-.975-.561-2.492-3.348-4.35-2.786-1.857-7.452-3.39-12.765-3.39z"></path>
							</svg>
							<span className="text-neutral">Cyber Education</span>
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
							<div className="user-info-area text-xl font-bold">
								<h4>Welcome, {user?.displayName}</h4>
							</div>
							<div className="dropdown dropdown-end">
								<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
									<div className="w-10 rounded-full">
										<img
											src={
												user?.photoURL
													? user?.photoURL
													: "https://placeimg.com/80/80/people"
											}
										/>
									</div>
								</label>
								<ul
									tabIndex={0}
									className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
								>
									<li>
										<a className="justify-between">
											Profile
											<span className="badge">New</span>
										</a>
									</li>
									<li>
										<a>Settings</a>
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
									<span className="btn btn-outline btn-accent-content">
										{" "}
										Login
									</span>{" "}
								</Link>
								<Link to={"/register"}>
									<span className="btn btn-primary"> Register</span>{" "}
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
