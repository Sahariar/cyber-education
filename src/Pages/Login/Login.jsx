import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLottie } from "lottie-react";
import register from "../../assets/login-screen.json";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
    const lottieAnimOptions = {
		animationData: register,
		loop: true,
	};

	const { View } = useLottie(lottieAnimOptions);

    const {logInWithGoogle, logInUserWithEmail , logInWithGitHub} = useContext(AuthContext);
    const [notification , setNotification] = useState(''); 
    const [error , setError] = useState(''); 
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"; 

    console.log(from);

    const handleSubmission = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        // console.log("firstName" ,firstName , "lastName" , lastName ,"email" , email , password ,"photoUrl" ,photoUrl )
        logInUserWithEmail(email , password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            setError('')
            form.reset();
            console.log(user);

            navigate(from, { replace: true });
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(error.message)
            // ..
          });
    }


    const handleGoogleSubmission = () => {
        logInWithGoogle()
        .then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            setError(errorMessage)
          });

    }

    const handleGitHubSubmission = () => {
        logInWithGitHub()
        .then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
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
		<section className="login-area mb-12">
            <div className="bg-accent p-12 my-10 shadow-xl">
                <h1 className="text-4xl font-bold text-center text-white">
                    Login Page
                </h1>
            </div>
            <div className="container mx-auto">
            <div className="flex">
			<div className="w-6/12 max-w-md p-4 rounded-md shadow sm:p-8 mx-auto bg-blue-50">
				<h2 className="mb-3 text-3xl font-semibold text-center text-accent">
					Log into your account
				</h2>
				<p className="text-sm text-center text-accent">
                    
					Don't have have account?
					<Link to={'/register'}>
                    <span className="focus:underline hover:underline bg-accent text-primary p-2 mx-2 rounded-md"
                     >Register here</span>
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
				<div className="flex items-center w-full my-4 text-accent">
					<hr className="w-full  " />
					<p className="px-3  ">OR</p>
					<hr className="w-full  " />
				</div>
				<form
					className="space-y-8"
                    onSubmit={handleSubmission}
                    
				>
					<div className="space-y-4">
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
									className="text-xs hover:underline  text-accent "
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
						className="w-full px-8 py-3 font-semibold rounded-md btn-primary"
					>
						Login
					</button>
				</form>
			</div>
            <div className="w-5/12 h-48">
            {View}
            </div>
            </div>
            </div>
            
		</section>
	);
};

export default Login;