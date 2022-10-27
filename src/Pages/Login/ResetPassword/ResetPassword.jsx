import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const ResetPassword = () => {
    const { sendResetPass} = useContext(AuthContext);
    const [notification , setNotification] = useState(''); 
    const [error , setError] = useState(''); 
    const handleSubmission  = (event) => {
		event.preventDefault();
        const form = event.target;
        const email = form.email.value;
		sendResetPass(email)
		.then(() => {
		  // Password reset email sent!
		  // ..
		  setNotification("Please check your Mail for Password Reset Link")
		})
		.catch((error) => {
		  const errorCode = error.code;
		  const errorMessage = error.message;
		  // ..
		  setError(errorMessage)
		});

    }
    return (
		<section className="login-area mb-12">
            <div className="bg-accent p-12 my-10 shadow-xl">
                <h1 className="text-4xl font-bold text-center text-white">
                    Reset Password
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
						<Link to={'/login'}>
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
								Login
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
								Reset
								
						</li>
					</ul>
				</div>

            </div>
            <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row">
			<div className="xl:w-6/12 max-w-md p-4 rounded-md shadow sm:p-8 mx-auto bg-blue-50">
				<h2 className="mb-3 text-3xl font-semibold text-center text-accent">
					Reset your Password
				</h2>
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
						Reset Password
					</button>
				</form>
			</div>
            </div>
            </div>
		</section>
	);
};


export default ResetPassword;