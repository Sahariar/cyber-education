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
		logInWithGitHub,
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
    const handleGitHubSubmission = () => {
        logInWithGitHub()
        .then((result) => {
            const user = result.user;
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            setError(errorMessage)
          });

    }
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
				<div className="flex flex-col md:flex-col-reverse xl:flex-row">
					<div className="xl:w-5/12 w-11/12">{View}</div>
					<div className="w-11/12 xl:w-6/12 max-w-md p-4 rounded-md shadow sm:p-8 mx-auto bg-blue-50">
						<h2 className="mb-3 text-3xl font-semibold text-center text-accent">
							Register your account
						</h2>
						<p className="text-sm text-center text-accent">
							Already have account?
							<Link to={"/login"}>
								<span className="focus:underline hover:underline bg-accent text-primary p-2 mx-2 rounded-md">
									Login here
								</span>
							</Link>
						</p>
						<div className="my-6 space-y-4">
							<button
								aria-label="Login with Google"
								type="button"
								className="flex items-center justify-center w-full p-4 space-x-4 border border-black rounded-md focus:ring-2 focus:ring-offset-1 hover:btn-primary"
								onClick={handleGoogleSubmission}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 32 32"
									className="w-5 h-5 fill-black"
								>
									<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
								</svg>
								<p className="text-black">Login with Google</p>
							</button>
						</div>
						<div className="my-6 space-y-4">
					<button
						aria-label="Login with Google"
						type="button"
						className="flex items-center justify-center w-full p-4 space-x-4 border border-black rounded-md focus:ring-2 focus:ring-offset-1 hover:btn-primary"
                    onClick={handleGitHubSubmission}
                    >
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-black">
				<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
			</svg>
						<p className="text-black">Login with GitHub</p>
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
									<label htmlFor="email" className="block text-sm text-accent">
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
									<label htmlFor="email" className="block text-sm text-accent">
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
									<label htmlFor="email" className="block text-sm text-accent">
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
										<label htmlFor="password" className="text-sm text-accent">
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
										<div className="bg-success rounded-lg shadow-lg p-5 text-black">
											{notification}
										</div>
									</div>
								)}
							</div>
							<button
								type="submit"
								className="w-full px-8 py-3 font-semibold rounded-md btn-primary"
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
