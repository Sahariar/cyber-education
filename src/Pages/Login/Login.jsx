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

    const {logInWithGoogle, logInUserWithEmail} = useContext(AuthContext);
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
            setError(error)
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
				<h2 className="mb-3 text-3xl font-semibold text-center">
					Log into your account
				</h2>
				<p className="text-sm text-center">
                    
					Don't have have account?
					<Link to={'/register'}>
                    <span className="focus:underline hover:underline"
                     >Create here</span>
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
				<form
					className="space-y-8"
                    onSubmit={handleSubmission}
                    
				>
					<div className="space-y-4">
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