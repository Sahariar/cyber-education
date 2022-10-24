import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useLottie } from "lottie-react";
import register from "../../assets/registration.json";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
	const lottieAnimOptions = {
		animationData: register,
		loop: true,
	};

	const { View } = useLottie(lottieAnimOptions);

	const {
		logInWithGoogle,
		createUserWithEmail,
		verifyEmail,
		userProfileUpdate,
	} = useContext(AuthContext);
	const [notification, setNotification] = useState("");
	const [error, setError] = useState("");

	const handleSubmission = (event) => {
		event.preventDefault();
		const form = event.target;
		const firstName = form.firstName.value;
		const lastName = form.lastName.value;
		const photoUrl = form.photUrl.value;
		const email = form.email.value;
		const password = form.password.value;
		const name = firstName + " " + lastName;

		// console.log("firstName" ,firstName , "lastName" , lastName ,"email" , email , password ,"photoUrl" ,photoUrl )
		createUserWithEmail(email, password)
			.then((result) => {
				// Signed in
				const user = result.user;
				form.reset();
				console.log(user);
				handleVerification(email);
				handleUserProfileUpdate(name, photoUrl);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(error);
				// ..
			});
	};
	const handleVerification = (email) => {
		verifyEmail(email)
			.then(() => {
				// The link was successfully sent. Inform the user.
				// Save the email locally so you don't need to ask the user for it again
				// if they open the link on the same device.
				const message =
					"Please Check your Email Inbox or Spam for Verification Code.";
				setNotification(message);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(error);
				// ...
			});
	};

	const handleUserProfileUpdate = (name, photoURL) => {
		userProfileUpdate(name, photoURL)
			.then(() => {
				// Profile updated!
				const message = "Profile updated";
				setNotification(message);
				// ...
			})
			.catch((error) => {
				// An error occurred
				// ...
				setError(error);
			});
	};

	const handleGoogleSubmission = () => {
		logInWithGoogle()
			.then((result) => {
				const user = result.user;
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				setError(errorMessage);
			});
	};

	return (
		<section className="register-area mb-12">
			<div className="bg-accent p-12 my-10 shadow-xl">
				<h1 className="text-4xl font-bold text-center text-white">
					Register Page
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
						<Link to={'/register'}>
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
								Register
								</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="container mx-auto">
				<div className="flex">
					<div className="w-5/12">{View}</div>
					<div className="w-6/12 max-w-md p-4 rounded-md shadow sm:p-8 mx-auto bg-blue-50">
						<h2 className="mb-3 text-3xl font-semibold text-center">
							Register your account
						</h2>
						<p className="text-sm text-center">
							Already have account?
							<Link to={"/login"}>
								<span className="focus:underline hover:underline">
									Login here
								</span>
							</Link>
						</p>
						<div className="my-6 space-y-4">
							<button
								aria-label="Login with Google"
								type="button"
								className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
								onClick={handleGoogleSubmission}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 32 32"
									className="w-5 h-5 fill-current"
								>
									<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
								</svg>
								<p>Login with Google</p>
							</button>
						</div>
						<div className="flex items-center w-full my-4">
							<hr className="w-full  " />
							<p className="px-3  ">OR</p>
							<hr className="w-full  " />
						</div>
						<form className="space-y-8" onSubmit={handleSubmission}>
							<div className="space-y-4">
								<div className="space-y-2 form-group ">
									<label htmlFor="email" className="block text-sm">
										Your Name
									</label>
									<div className="flex gap-2">
										<input
											type="text"
											name="firstName"
											placeholder="leroy"
											className="w-full px-3 py-2 border rounded-md"
											required
										/>
										<input
											type="text"
											name="lastName"
											placeholder="jenkins"
											className="w-full px-3 py-2 border rounded-md"
											required
										/>
									</div>
								</div>
								<div className="space-y-2 form-group ">
									<label htmlFor="email" className="block text-sm">
										Profile Photo Url
									</label>
									<input
										type="text"
										name="photUrl"
										placeholder="https:/yourphoturl"
										className="w-full px-3 py-2 border rounded-md"
										required
									/>
								</div>
								<div className="space-y-2 form-group">
									<label htmlFor="email" className="block text-sm">
										Email address
									</label>
									<input
										type="email"
										name="email"
										id="email"
										placeholder="leroy@jenkins.com"
										className="w-full px-3 py-2 border rounded-md"
										required
									/>
								</div>
								<div className="space-y-2 form-group">
									<div className="flex justify-between">
										<label htmlFor="password" className="text-sm">
											Password
										</label>
										<a
											rel="noopener noreferrer"
											href="#"
											className="text-xs hover:underline  "
										>
											Forgot password?
										</a>
									</div>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="*****"
										className="w-full px-3 py-2 border rounded-md"
										required
									/>
								</div>
								{error !== "" && (
									<div className="space-y-4">
										<div className="bg-error rounded-lg shadow-lg p-5 text-white">
											{error}
										</div>
									</div>
								)}

								{notification !== "" && (
									<div className="space-y-4">
										<div className="bg-info rounded-lg shadow-lg p-5 text-white">
											{notification}
										</div>
									</div>
								)}
							</div>
							<button
								type="submit"
								className="w-full px-8 py-3 font-semibold rounded-md btn-accent"
							>
								Register
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
