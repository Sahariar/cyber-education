import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
	return (
		<section className="blog-page my-10">
			<div className="bg-accent p-12 my-10 shadow-xl">
				<h1 className="text-4xl font-bold text-center text-white">Blog Page</h1>
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
							<Link to={"/blog"}>
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
								Blog
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="container mx-auto space-y-24">
				<article className=" max-w-4xl px-6 py-24 mx-auto space-y-6 dark:bg-gray-50 dark:text-gray-900 rounded-xl shadow-xl">
					<div className="w-full mx-auto space-y-2 text-center">
						<h1 className="text-5xl font-bold leading-none text-center">
							What is Cors?
						</h1>
						<p className="text-sm dark:text-gray-400">
							by
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline dark:text-violet-400"
							>
								<span> Leroy Jenkins</span>
							</a>
							on
						</p>
					</div>
					<div className="dark:text-gray-900 space-y-5">
						<p>
							Cross-Origin Resource Sharing (CORS) is an HTTP-header based
							mechanism that allows a server to indicate any origins (domain,
							scheme, or port) other than its own from which a browser should
							permit loading resources. CORS also relies on a mechanism by which
							browsers make a "preflight" request to the server hosting the
							cross-origin resource, in order to check that the server will
							permit the actual request.
						</p>
						<p>
							In that preflight, the browser sends headers that indicate the
							HTTP method and headers that will be used in the actual request.
							An example of a cross-origin request: the front-end JavaScript
							code served from https://domain-a.com uses XMLHttpRequest to make
							a request for https://domain-b.com/data.json.
						</p>
						<p>
							{" "}
							For security reasons, browsers restrict cross-origin HTTP requests
							initiated from scripts. For example, XMLHttpRequest and the Fetch
							API follow the same-origin policy. This means that a web
							application using those APIs can only request resources from the
							same origin the application was loaded from unless the response
							from other origins includes the right CORS headers.
						</p>
						<p>
							{" "}
							The CORS mechanism supports secure cross-origin requests and data
							transfers between browsers and servers. Modern browsers use CORS
							in APIs such as XMLHttpRequest or Fetch to mitigate the risks of
							cross-origin HTTP requests.
						</p>
					</div>
				</article>
				<article className=" max-w-4xl px-6 py-24 mx-auto space-y-6 dark:bg-gray-50 dark:text-gray-900 rounded-xl shadow-xl">
					<div className="w-full mx-auto space-y-2 text-center">
						<h1 className="text-5xl font-bold leading-none text-center">
							Why are you using firebase? What other options do you have to
							implement authentication?
						</h1>
						<p className="text-sm dark:text-gray-400">
							by
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline dark:text-violet-400"
							>
								<span> Leroy Jenkins</span>
							</a>
							on
						</p>
					</div>
					<div className="dark:text-gray-900 space-y-5">
						<h4 className="text-2xl font-bold">Why are you using firebase?</h4>
						<p>
							Firebase Authentication provides backend services, easy-to-use
							SDKs, and ready-made UI libraries to authenticate users to your
							app. It supports authentication using passwords, phone numbers,
							popular federated identity providers like Google, Facebook and
							Twitter, and more.
						</p>
						<p>
							Firebase Authentication integrates tightly with other Firebase
							services, and it leverages industry standards like OAuth 2.0 and
							OpenID Connect, so it can be easily integrated with your custom
							backend.
						</p>
						<p>
							{" "}
							When you upgrade to Firebase Authentication with Identity
							Platform, you unlock additional features, such as multi-factor
							authentication, blocking functions, user activity and audit
							logging, SAML and generic OpenID Connect support, multi-tenancy,
							and enterprise-level support
						</p>
						<h4 className="text-2xl font-bold">
							What other options do you have to implement authentication?
						</h4>
						<p>
							There are others User Authentication Platforms Like:
							<ol className="list-decimal text-black font-bold m-12">
								<li>STYTCH</li>
								<li>Ory</li>
								<li>Supabase</li>
								<li>Okta</li>
								<li>PingIdentity</li>
								<li>Keycloak</li>
								<li>Frontegg</li>
								<li>Authress</li>
								<li>Auth0</li>
								<li>Amazon Cognito</li>
								<li>OneLogin</li>
							</ol>
						</p>
					</div>
				</article>
				<article className=" max-w-4xl px-6 py-24 mx-auto space-y-6 dark:bg-gray-50 dark:text-gray-900 rounded-xl shadow-xl">
					<div className="w-full mx-auto space-y-2 text-center">
						<h1 className="text-5xl font-bold leading-none text-center">
							How does the private route work?
						</h1>
						<p className="text-sm dark:text-gray-400">
							by
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline dark:text-violet-400"
							>
								<span> Leroy Jenkins</span>
							</a>
							on
						</p>
					</div>
					<div className="dark:text-gray-900 space-y-5">
						<p>
							The react private route component renders child components
							(children) if the user is logged in. If not logged in the user is
							redirected to the /login page with the return url passed in the
							location state property.
						</p>
						<p>
							The current logged in user (authUser) is retrieved from Redux
							state with a call to the useSelector() hook. Redux is used in this
							example however it is not required to implement a Private Route
							component in React Router 6. You could use a different state
							management library or any approach you prefer to get the logged in
							status of the user.
						</p>
					</div>
				</article>
				<article className=" max-w-4xl px-6 py-24 mx-auto space-y-6 dark:bg-gray-50 dark:text-gray-900 rounded-xl shadow-xl">
					<div className="w-full mx-auto space-y-2 text-center">
						<h1 className="text-5xl font-bold leading-none text-center">
							What is Node? How does Node work?
						</h1>
						<p className="text-sm dark:text-gray-400">
							by
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline dark:text-violet-400"
							>
								<span> Leroy Jenkins</span>
							</a>

						</p>
					</div>
					<div className="dark:text-gray-900 space-y-5">
                    <h4 className="text-2xl font-bold">What is Node?</h4>
						<p>
							Node. js is a JavaScript runtime environment that achieves low
							latency and high throughput by taking a “non-blocking” approach to
							serving requests. In other words, Node. js wastes no time or
							resources on waiting for I/O requests to return
						</p>
                        
						<h4 className="text-2xl font-bold">How does Node work?</h4>
					
						<p>
                        Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
						</p>
						<p>
                        Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Blog;
