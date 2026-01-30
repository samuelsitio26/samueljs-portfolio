"use client";
import Hr from "@/components/Hr";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
	{
		id: 1,
		startDate: "Sep 2024",
		endDate: "Jan 2026",
		company: "Badan Eksekutif Mahasiswa Institut Teknologi Del",
		position: "President of the Student Executive Board",
		type: "Leadership",
		location: "Laguboti, North Sumatra, Indonesia",
		description:
			"Led and coordinated the Student Executive Board (BEM) at Institut Teknologi Del, managing various student programs and initiatives. Oversaw organizational activities, facilitated collaboration between student divisions, and represented student interests to university administration. Developed leadership skills while ensuring effective execution of student welfare programs and campus events.",
		skills: ["Leadership", "Public Speaking", "Event Management", "Teamwork", "Communication", "Problem Solving"],
	},
	{
		id: 2,
		startDate: "Jun 2025",
		endDate: "Aug 2025",
		company: "PT. Eltama Prima Indo",
		position: "Full-stack Developer",
		type: "Full-time Internship",
		location: "Bogor, West Java, Indonesia",
		description:
			"Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to design, develop, and deploy scalable web solutions. Gained hands-on experience in both frontend and backend development, implementing new features and optimizing application performance.",
		skills: ["Next.js", "React", "Laravel", "MySQL", "JavaScript", "TypeScript", "API Development", "Teamwork"],
	},
	{
		id: 3,
		startDate: "Jan 2025",
		endDate: "Jun 2025",
		company: "VINIX7",
		position: "Independent Learning Campus",
		type: "MBKM Program (Remote)",
		location: "Laguboti, North Sumatra, Indonesia",
		description:
			"Participated in the Independent Learning Campus program (MBKM) focused on cybersecurity and web development. Completed intensive training in Junior Cyber Security, gaining practical knowledge in security protocols, vulnerability assessment, and ethical hacking. Enhanced skills through real-world project implementations and industry mentorship.",
		skills: ["Cybersecurity", "Web Development", "Security Analysis", "Ethical Hacking", "Problem Solving"],
	},
	{
		id: 4,
		startDate: "Jan 2025",
		endDate: "May 2025",
		company: "Institut Teknologi Del",
		position: "Student Teaching Assistant of Linear Algebra",
		type: "Part-time",
		location: "Laguboti, North Sumatra, Indonesia",
		description:
			"Assisted students in understanding Linear Algebra concepts and problem-solving techniques. Provided coaching and mentoring during lab sessions, helped prepare course materials, and supported the lecturer in delivering effective learning experiences. Developed communication and teaching skills while reinforcing own understanding of mathematical concepts.",
		skills: ["Linear Algebra", "Teaching", "Mentoring", "Communication", "Data Structures and Algorithms"],
	},
	{
		id: 5,
		startDate: "Jan 2025",
		endDate: "May 2025",
		company: "Institut Teknologi Del",
		position: "Student Teaching Assistant of Object Oriented Programming",
		type: "Part-time",
		location: "Laguboti, North Sumatra, Indonesia",
		description:
			"Supported students in learning Object-Oriented Programming (OOP) principles and practices. Conducted lab sessions, assisted with coding assignments, and provided guidance on programming best practices. Helped students understand concepts like inheritance, polymorphism, encapsulation, and abstraction through practical examples and mentoring.",
		skills: ["Object-Oriented Programming", "Java", "Teaching", "Coaching & Mentoring", "Data Structures and Algorithms"],
	},
	{
		id: 6,
		startDate: "Feb 2024",
		endDate: "May 2024",
		company: "Institut Teknologi Del",
		position: "Student Teaching Assistant of Basic Mathematics Courses",
		type: "Part-time",
		location: "Laguboti, North Sumatra, Indonesia",
		description:
			"Assisted in teaching and mentoring students in basic mathematics courses. Provided support during tutorial sessions, helped students with problem-solving techniques, and prepared supplementary learning materials. Focused on building strong foundational mathematical skills and fostering a positive learning environment.",
		skills: ["Mathematics", "Teaching", "Coaching & Mentoring", "Communication", "Problem Solving"],
	},
	{
		id: 7,
		startDate: "Oct 2023",
		endDate: "Feb 2024",
		company: "Himpunan Mahasiswa Sistem Informasi IT Del (HIMSI)",
		position: "Member of Arts Division",
		type: "Organizational",
		location: "Laguboti, North Sumatra, Indonesia",
		description:
			"As a member of the HIMSI arts division, carried out responsibilities in organizing and coordinating various organizational activities. Collaborated with team members in planning and executing creative events, cultural activities, and student engagement programs. Contributed to enhancing the campus artistic and cultural environment.",
		skills: ["Event Planning", "Teamwork", "Creativity", "Communication", "Organization"],
	},
	{
		id: 8,
		startDate: "Dec 2023",
		endDate: "Dec 2023",
		company: "Himpunan Mahasiswa Sistem Informasi IT Del (HIMSI)",
		position: "Coordinator of the Facilities and Infrastructure Section",
		type: "Organizational",
		location: "Laguboti, North Sumatra, Indonesia",
		description:
			"As coordinator of the Facilities and Infrastructure Section, was responsible for providing equipment and managing venues for organizing association events. Ensured smooth logistics and resource allocation for student activities, coordinating with various stakeholders to deliver successful events.",
		skills: ["Event Coordination", "Resource Management", "Problem Solving", "Teamwork", "Logistics"],
	},
];

// experiences.reverse();

function Title() {
	return (
		<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long"></Hr>
				<motion.h1
					className="text-3xl font-bold mt-3"
					initial={{
						opacity: 0,
						x: -200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.7,
						type: "spring",
					}}>
					Profesional Experience
				</motion.h1>
			</div>
		</div>
	);
}

function TimelineCard({ experience, index, isEven }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.15, duration: 0.5 }}
			className={`flex ps-10 md:ps-0 ${
				isEven
					? "md:justify-center md:translate-x-68"
					: "md:justify-center md:-translate-x-68"
			} justify-center mb-4`}>
			<div className="bg-gradient-to-r from-[#1e3a5f] to-[#3b82f6] text-white px-12 py-3 rounded-xl shadow-lg border border-[#f97316]/30 min-w-max">
				<div className="flex items-center justify-center gap-6">
					<div className="text-center">
						<div className="text-sm font-bold">{experience.startDate}</div>
						<div className="text-xs text-gray-300">Start</div>
					</div>
					<div className="w-px h-8 bg-[#f97316]/50"></div>
					<div className="text-center">
						<div className="text-sm font-bold">{experience.endDate}</div>
						<div className="text-xs text-gray-300">End</div>
					</div>					<div className="w-px h-8 bg-[#f97316]/50"></div>
					<div className="text-center">
						<div className="text-sm font-medium text-gray-300">
							{experience.location}
						</div>
						<div className="text-xs text-gray-300">Location</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function ExperienceCard({ experience, index, isEven }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.2, duration: 0.6 }}
			className={`relative group ${
				isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
			} md:w-1/2`}>
			{" "}
			{/* Card */}
			<div
				className={`bg-[#1e3a5f]/40 backdrop-blur-sm border border-[#f97316]/30 rounded-2xl p-6 shadow-lg 
				hover:shadow-xl hover:bg-[#1e3a5f]/60 transition-all duration-300 ml-12 md:ml-0`}>
				{/* Company & Position */}
				<div className="mb-4">
					<h3 className="font-bold text-xl text-white mb-1">
						{experience.company}
					</h3>
					<h4 className="font-medium text-lg text-[#f97316]">
						{experience.position}
						<span className="text-sm font-normal text-gray-400 ml-2">
							• {experience.type}
						</span>
					</h4>
				</div>

				{/* Description */}
				<p className="text-gray-300 text-justify leading-relaxed mb-4">
					{experience.description}
				</p>

				{/* Skills */}
				<div className="flex flex-wrap gap-2">
					{experience.skills.map((skill, idx) => (
						<span
							key={idx}
							className="bg-[#3b82f6]/40 hover:bg-[#3b82f6]/60 border border-[#3b82f6]/40 text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105">
							{skill}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
}

function Wrapper({ children }) {
	return (
		<div className="mx-auto container px-6 py-10">
			<div
				className="flex justify-center items-center flex-col">
				{children}
			</div>
		</div>
	);
}

export default function Experience() {
	const [showAll, setShowAll] = useState(false);
	const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

	return (
		<>
			<Title />
			<Wrapper>
				{" "}
				<div className="relative w-full max-w-6xl mx-auto">
					{" "}
					{/* Timeline line - hidden on mobile, visible on md+ */}
					<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>
					{/* Mobile timeline line */}
					<div className="md:hidden absolute left-0 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>{" "}
					{/* Experience cards */}
					<div className="space-y-12 md:space-y-16 relative">
						<AnimatePresence>
							{displayedExperiences.map((experience, index) => (
								<div key={experience.id} className="relative">
									{/* Timeline period card - flows naturally above content */}
									<TimelineCard
										experience={experience}
										index={index}
										isEven={index % 2 === 1}
									/>

									{/* Timeline dot - positioned at the start of the experience card */}
									<div
										className={`absolute w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-30
										md:left-1/2 md:-translate-x-1/2 md:top-4
										left-0 -translate-x-1/2 top-5`}
									/>

									{/* Experience content card */}
									<ExperienceCard
										experience={experience}
										index={index}
										isEven={index % 2 === 1}
									/>
								</div>
							))}
						</AnimatePresence>
					</div>
					{/* Expand/Collapse button */}
					{experiences.length > 3 && (
						<motion.div
							className="flex justify-center mt-12"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.5 }}>
							<button
								onClick={() => setShowAll(!showAll)}
								className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium 
									transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2">
								{showAll ? (
									<>
										Show Less
										<svg
											className="w-4 h-4 transform rotate-180"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</>
								) : (
									<>
										View More Experience
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</>
								)}
							</button>
						</motion.div>
					)}{" "}
					{/* Gradient fade effect at bottom */}
					{!showAll && (
						<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stale-300 to-transparent pointer-events-none"></div>
					)}
				</div>
			</Wrapper>
		</>
	);
}
