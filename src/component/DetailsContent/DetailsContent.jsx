import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import ContentList from "../ContentList";

const DetailsContent = ({ cuDetails, studentEnroll }) => {
	const {
		id,
		tittle,
		description,
		img,
		profile,
		price,
		rating,
		cate_name,
		content,
		dob,
        description1,
        description2,
	} = cuDetails;

	return (
		<div className="card bg-base-100 shadow-xl">
			<div className="card-body">
				<h2 className="text-5xl">{tittle}</h2>
				<div className="header-info flex justify-start my-4 items-center">
					<div className="cate-area mx-2">
						<div className="badge badge-primary p-5">{cate_name}</div>
					</div>
					<div className="card-actions justify-between mx-2">
						<div className="price flex text-lg text- justify-start items-center font-bold">
							<span className="text-2xl">
								<AiOutlineUsergroupAdd />
							</span>
						</div>
						<div className="price flex text-xl text- justify-start items-center font-bold  ">
							<p>{studentEnroll} Students</p>
						</div>
					</div>
					<div className="card-actions justify-between mx-2">
						<div className="price flex text-lg text- justify-start items-center font-bold">
							<span className="text-2xl">
								<BsFillCalendarDateFill />
							</span>

							<span className="mx-2">Last Updated</span>
						</div>
						<div className="price flex text-xl text- justify-start items-center font-bold  ">
							<p> {dob}</p>
						</div>
					</div>
				</div>
				<div className="instructor-area">
					<div className="card-actions justify-start items-center">
						<div className="avatar placeholder">
							<div className="bg-neutral-focus text-neutral-content rounded-full w-12">
								<img src={profile.insImg} alt={profile.name} />
							</div>
						</div>
                        <p>By {profile.name}</p>
					</div>
					<div className="card-actions justify-start items-center my-4">
                        <div className="ins-info">
                        <h4 className="text-xl">
                            About Instructor
                        </h4>
                        <p>{profile.about}</p>
                        </div>
						 
					</div>

                    
				</div>
				<div className="learn-area my-4">
					<h4 className="text-2xl font-bold py-4">
						What you'll learn In This Course
					</h4>
					<ul className="list-disc grid grid-cols-2 gap-4 w-11/12 mx-auto">
						<li>
							An advanced practical skillset in defeating all online threats -
							advanced hackers, trackers, malware and all Internet nastiness
							including mitigating government spying and mass surveillance.
						</li>
						<li>
							Start a career in cyber security. Become a cyber security
							specialist. The very latest up-to-date information and methods.
						</li>
						<li>
							We cover operating system security, privacy, and patching - On
							Windows 7, Windows 8, Windows 10, MacOS and Linux.
						</li>
						<li>
							Explore the threat landscape - Darknets, dark markets, zero day
							vulnerabilities, exploit kits, malware, phishing and much more.
						</li>
						<li>
							You will master encryption in an easy to follow crash course.
						</li>
					</ul>
				</div>
				<div className="course-area my-4">
					<h4 className="text-2xl font-bold py-4">
						Curriculum Description
					</h4>
                    <div className="text-lg space-y-4">
                    <p>{description}</p>
                    <p>{description1}</p>
                    <p>{description2}</p>
                    </div>
     
				</div>
				<div className="course-area my-4">
					<h4 className="text-2xl font-bold py-4">
                    Requirements
					</h4>
                    <ul className="list-disc grid grid-cols-2 gap-4 w-11/12 mx-auto">
						<li>
							An advanced practical skillset in defeating all online threats -
							advanced hackers, trackers, malware and all Internet nastiness
							including mitigating government spying and mass surveillance.
						</li>
						<li>
							Start a career in cyber security. Become a cyber security
							specialist. The very latest up-to-date information and methods.
						</li>
						<li>
							We cover operating system security, privacy, and patching - On
							Windows 7, Windows 8, Windows 10, MacOS and Linux.
						</li>
						<li>
							Explore the threat landscape - Darknets, dark markets, zero day
							vulnerabilities, exploit kits, malware, phishing and much more.
						</li>
						<li>
							You will master encryption in an easy to follow crash course.
						</li>
					</ul>
     
				</div>
				<div className="course-area my-4">
					<h4 className="text-2xl font-bold py-4">
                    Content
					</h4>
                    {
                        content.map( item => <ContentList
                        key={item.contentId}
                        item={item}
                        > </ContentList> )
                    }
				</div>
			</div>
		</div>
	);
};

export default DetailsContent;
