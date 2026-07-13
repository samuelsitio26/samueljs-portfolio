import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMedal,
	faGraduationCap,
	faTrophy,
	faAward,
	faChevronDown,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Me4 from "@/public/image/me4.jpg";
import Me5 from "@/public/image/me5.jpg";
import Me6 from "@/public/image/me6.jpg";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
			<motion.div
				className="flex justify-center items-start flex-col mb-5"
				initial={{
					opacity: 0,
					y: 50,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					delay: 0.3,
					duration: 0.8,
					type: "spring",
					stiffness: 100,
				}}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Education() {
	const [isExpanded, setIsExpanded] = useState(false);

	const achievementsByYear = {
		2025: [
			{
				icon: faMedal,
				title: "2nd place (Silver Medal)",
				subtitle: "Best Action Plan Student Camp - PKK dan UMKM",
				date: "Jul 2025",
				color: "from-slate-400 to-slate-500",
			},
		],
		2024: [
			{
				icon: faAward,
				title: "Certificate of Appreciation",
				subtitle: "DATATHON 2024 by RISTEK Fasilkom UI",
				date: "Aug 2024",
				color: "from-blue-500 to-purple-600",
			},
			{
				icon: faAward,
				title: "Certificate of Completion",
				subtitle: "Samsung Innovation Campus Stage 1 - Design Thinking Workshop",
				date: "Jul 2024",
				color: "from-green-500 to-emerald-600",
			},
			{
				icon: faAward,
				title: "Certificate of Participation",
				subtitle: "Samsung Innovation Campus Batch 6 (AI in Everyday Life)",
				date: "2024/2025",
				color: "from-blue-400 to-cyan-500",
			},
		],
	};

	// Flatten all achievements into a single array for easier limiting
	const allAchievements = Object.entries(achievementsByYear)
		.sort(([a], [b]) => parseInt(b) - parseInt(a))
		.flatMap(([year, achievements]) =>
			achievements.map((achievement) => ({ ...achievement, year }))
		);

	const visibleAchievements = isExpanded
		? allAchievements
		: allAchievements.slice(0, 6);
	const hasMoreAchievements = allAchievements.length > 6;

	return (
		<Wrapper>
			<section className="grid gap-8 md:gap-12">
				{" "}
				{/* Header */}
				<motion.div
					className="text-center space-y-2"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
						Education
					</h1>
					<p className="text-muted-foreground max-w-[800px] mx-auto">
						Get to know more about my educational background.
					</p>
				</motion.div>
				{/* Main Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Education Section - Left */}
					<motion.div
						className="px-5"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<div className="font-medium text-lg mb-4">2022 - Present</div>
						<div>
							<h2 className="font-semibold text-xl">
								Institut Teknologi Del
							</h2>
							<h3 className="text-md font-normal mb-3">
								S1 System Information | Computer Science
							</h3>
							<div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me5}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me4}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me6}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<p className="text-gray-300 text-justify title text-lg">
									Aspiring to become a professional Software Engineer, I&rsquo;m
									currently pursuing my Bachelor&rsquo;s degree in{" "}
									<span className="text-[#4ade80] font-medium">
										Information Systems
									</span>{" "}
									at{" "}
									<span className="text-[#4ade80] font-medium">
										Institut Teknologi Del
									</span>
									. My journey in tech is driven by curiosity and
									creativity—combining web development with cybersecurity
									and machine learning deployment.
									<br />
									<br />
									As the{" "}
									<span className="text-[#4ade80] font-medium">
										President of the Student Executive Board (BEM)
									</span>{" "}
									at my university, I&rsquo;ve led and coordinated various
									student programs and initiatives.
									I&rsquo;ve gained hands-on experience through{" "}
									<span className="text-[#4ade80] font-medium">
										internships and MBKM programs
									</span>
									, including web development at PT. Eltama Prima Indo and{" "}
									<span className="text-[#4ade80] font-medium">
										Junior Cyber Security at Vinix Seven Aurum
									</span>
									.
									<br />
									<br />I am passionate about solving real-world problems
									through code, especially in{" "}
									<span className="text-[#4ade80] font-medium">
										Web Development
									</span>{" "}
									and{" "}
									<span className="text-[#4ade80] font-medium">
										Cybersecurity
									</span>
									. Constantly learning, building, and collaborating—I&rsquo;m
									excited to keep growing and contributing to the evolving tech
									landscape.
								</p>
							</div>
							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-[#f97316] text-white px-2 py-1 rounded-2xl">
									GPA: 3.31 out of 4
								</div>
							</div>
						</div>
					</motion.div>{" "}
					{/* Achievements Section - Right */}
					<motion.div
						className="flex flex-col justify-start px-5 md:px-0"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						<h2 className="font-semibold text-xl mt-7">Achievements</h2>
						<p className="text-md font-normal mb-3 md:mb-6">
							Some of my achievements during my study.
						</p>

						{/* Achievements Container with transparent bottom effect */}
						<div className="relative">
							<div className="space-y-4">
								{/* Show visible achievements */}
								<AnimatePresence>
									{visibleAchievements.map((achievement, index) => (
										<motion.div
											key={`${achievement.year}-${index}`}
											className="group"
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -20 }}
											transition={{ duration: 0.5, delay: index * 0.05 }}>
											{/* Year indicator for first achievement of each year */}
											{index === 0 ||
											visibleAchievements[index - 1]?.year !==
												achievement.year ? (
												<div className="flex items-center gap-3 mb-3 mt-2">
												<div className="w-8 h-8 rounded-full bg-[#f97316] flex items-center justify-center">
													<span className="text-xs font-bold text-white">
														{achievement.year}
													</span>
												</div>
												<div className="flex-1 h-px bg-gradient-to-r from-[#f97316] to-transparent"></div>
											</div>
										) : null}

										{/* Glassmorphism achievement card with monochrome to color effect */}
										<div className="bg-[#1e3a5f]/40 backdrop-blur-md border border-[#f97316]/30 rounded-2xl p-4 shadow-lg hover:bg-[#1e3a5f]/60 transition-all duration-300 hover:shadow-xl grayscale hover:grayscale-0">
												<div className="flex items-center gap-4">
													<div
														className={`aspect-square w-10 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-primary-foreground transition-all duration-300`}>
														<FontAwesomeIcon
															icon={achievement.icon}
															className="text-white h-5 w-5"
														/>
													</div>
													<div>
														<h3 className="font-medium text-white">{achievement.title}</h3>
														<p className="text-sm text-gray-300">{achievement.subtitle}</p>
														<div className="text-xs text-gray-400 mt-1">
															{achievement.date}
														</div>
													</div>
												</div>
											</div>
										</motion.div>
									))}
								</AnimatePresence>
							</div>

							{/* Transparent bottom overlay when not expanded */}
							{!isExpanded && hasMoreAchievements && (
								<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-stale-300 via-stale/70 to-transparent pointer-events-none"></div>
							)}

							{/* Expand/Collapse Button */}
							{hasMoreAchievements && (
								<motion.div
									className="flex justify-center mt-6"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5 }}>
									<button
										onClick={() => setIsExpanded(!isExpanded)}
										className="flex items-center gap-2 px-6 py-3 bg-[#1e3a5f]/50 backdrop-blur-md border border-[#f97316]/40 rounded-full hover:bg-[#f97316]/40 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl text-white">
										<span>
											{isExpanded
												? `Show Less`
												: `Show ${allAchievements.length - 4} More`}
										</span>
										<FontAwesomeIcon
											icon={isExpanded ? faChevronUp : faChevronDown}
											className="h-3 w-3 transition-transform duration-300"
										/>
									</button>
								</motion.div>
							)}
						</div>
					</motion.div>
				</div>
			</section>
		</Wrapper>
	);
}
