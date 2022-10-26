import React from "react";
import { Link } from "react-router-dom";

const Faq = () => {
	return (
		<section className="faq-page">
			<div className="bg-accent p-12 my-10 shadow-xl">
				<h1 className="text-4xl font-bold text-center text-white">
					Frequently Asked Questions
				</h1>
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
							<Link to={"/faq"}>
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
								Faq
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
				<div className="space-y-4 w-8/12 mx-auto">
					<details className=" border rounded-lg">
						<summary className="px-4 py-6 text-2xl">
						What’s best: instructor-led training or self-paced learning?
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
						One of the most common eLearning FAQs is whether companies should invest in instructor-led training or self-paced learning. The answer really depends on the situation and the audience.
						</p><p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
Instructor-led training has the advantage of being immediate and interactive. Employees can ask SMEs questions in real-time and the answer will benefit the whole group, not just the person who asked the question. Classroom training has been a preference among learners for a long time, as this Training Industry article points out — and instructor-led training replicates that.
</p><p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
On the cons side though, instructor-led training can be too rigid and expensive.
</p><p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
Self-paced learning, on the other hand, is much more flexible. Learners will usually watch videos and complete training sessions on their own time. This way, they get to create a learning schedule that works best for them.
</p><p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
Self-paced learning is cost-effective, too. People can rewatch videos as many times as they need at no extra cost, whereas if you’ve booked an SME for a webinar you’ve paid them for that one appearance. Everything else would probably be charged extra. Yet, self-paced learning doesn’t provide structure to learners, making it difficult for people who struggle with self-discipline to hit their training goals.
</p><p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
Wouldn’t it be great to have the structure and interactive aspect of instructor-led training and the flexibility and cost-effectiveness of self-paced training?
</p> <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
With blended learning, you can have the best of both worlds.
</p><p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
Blended learning means that you can still invite SMEs for webinars, and, at the same time, offer training material people can revisit at their own pace. It provides just enough structure, while still allowing for flexibility. Plus, with blended training, you have more chances of keeping learners engaged, as different people learn in different ways.
						</p>
					</details>

					<details className="w-full border rounded-lg">
						<summary className="px-4 py-6 text-2xl">
						What are the benefits of gamification in eLearning?
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
						When researching eLearning or when building your first eLearning courses, gamification will always come up sooner or later.
						</p>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
						One of the most common eLearning FAQs is whether companies should invest in instructor-led training or self-paced learning. The answer really depends on the situation and the audience.
						</p><p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
Instructor-led training has the advantage of being immediate and interactive. Employees can ask SMEs questions in real-time and the answer will benefit the whole group, not just the person who asked the question. Classroom training has been a preference among learners for a long time, as this Training Industry article points out — and instructor-led training replicates that.
</p><p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
On the cons side though, instructor-led training can be too rigid and expensive.
</p><p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
Self-paced learning, on the other hand, is much more flexible. Learners will usually watch videos and complete training sessions on their own time. This way, they get to create a learning schedule that works best for them.
</p><p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
Self-paced learning is cost-effective, too. People can rewatch videos as many times as they need at no extra cost, whereas if you’ve booked an SME for a webinar you’ve paid them for that one appearance. Everything else would probably be charged extra. Yet, self-paced learning doesn’t provide structure to learners, making it difficult for people who struggle with self-discipline to hit their training goals.
</p><p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
Wouldn’t it be great to have the structure and interactive aspect of instructor-led training and the flexibility and cost-effectiveness of self-paced training?
</p> <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
With blended learning, you can have the best of both worlds.
</p><p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
Blended learning means that you can still invite SMEs for webinars, and, at the same time, offer training material people can revisit at their own pace. It provides just enough structure, while still allowing for flexibility. Plus, with blended training, you have more chances of keeping learners engaged, as different people learn in different ways.
						</p>
					</details>
					<details className="w-full border rounded-lg">
						<summary className="px-4 py-6 text-2xl">
						Should we ask employees to bring their own devices or take training only on their corporate computers/mobiles?
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
						Just like most of the other eLearning questions and answers, this is not a “black-and-white” issue. Both options have their pros and cons.
						</p>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
						When researching eLearning or when building your first eLearning courses, gamification will always come up sooner or later.
						</p>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
						One of the most common eLearning FAQs is whether companies should invest in instructor-led training or self-paced learning. The answer really depends on the situation and the audience.
						</p><p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
Instructor-led training has the advantage of being immediate and interactive. Employees can ask SMEs questions in real-time and the answer will benefit the whole group, not just the person who asked the question. Classroom training has been a preference among learners for a long time, as this Training Industry article points out — and instructor-led training replicates that.
</p><p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
On the cons side though, instructor-led training can be too rigid and expensive.
</p><p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
Self-paced learning, on the other hand, is much more flexible. Learners will usually watch videos and complete training sessions on their own time. This way, they get to create a learning schedule that works best for them.
</p><p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
Self-paced learning is cost-effective, too. People can rewatch videos as many times as they need at no extra cost, whereas if you’ve booked an SME for a webinar you’ve paid them for that one appearance. Everything else would probably be charged extra. Yet, self-paced learning doesn’t provide structure to learners, making it difficult for people who struggle with self-discipline to hit their training goals.
</p><p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
Wouldn’t it be great to have the structure and interactive aspect of instructor-led training and the flexibility and cost-effectiveness of self-paced training?
</p> <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
With blended learning, you can have the best of both worlds.
</p><p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
Blended learning means that you can still invite SMEs for webinars, and, at the same time, offer training material people can revisit at their own pace. It provides just enough structure, while still allowing for flexibility. Plus, with blended training, you have more chances of keeping learners engaged, as different people learn in different ways.
						</p>
					</details>
					<details className="w-full border rounded-lg">
						<summary className="px-4 py-6 text-2xl">
						What are the tools used to record from your screen?
 
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
						authoring tool is equipped with an editing capability to enable you to record your screen using its screen recorder.
						</p>
					</details>
				</div>
			</div>
		</section>
	);
};

export default Faq;
