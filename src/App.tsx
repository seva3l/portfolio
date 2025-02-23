// App.tsx
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import ExperienceCard from "./components/Experience";
import ProjectCard from "./components/Project";
import { experiences, projects, skills } from "./data/config";
import Navbar from "./components/Navbar";
import Typewriter from "typewriter-effect";
import Skill from "./components/Skill";
import { useState } from "react";
import ProjectModal from "./components/ProjectModal";
import type { IProject } from "./types";
import { RiShutDownLine } from "react-icons/ri";

const App = () => {
	const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (project: IProject) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedProject(null);
	};
	return (
		<div className="min-h-screen bg-gray-900 text-gray-100">
			{selectedProject && (
				<ProjectModal
					isOpen={isModalOpen}
					onClose={closeModal}
					project={selectedProject}
				/>
			)}
			{/* Navigation */}
			{!isModalOpen && (
				<nav className="sticky lg:fixed top-0 w-full bg-gray-800/25 backdrop-blur-sm z-50">
					<div className="container mx-auto px-6 lg:py-4 py-2">
						<div className="flex items-center justify-between">
							<a href="/" className="flex items-center space-x-2">
								<RiShutDownLine size={30} color="#34D2F1" />
								<h2 className="font-bold text-2xl">&lt;Dreiveloper/&gt;</h2>
							</a>

							<Navbar />
						</div>
					</div>
				</nav>
			)}

			{/* Hero Section */}
			<section className="px-6 lg:pt-30 pt-5 pb-16 items-center flex justify-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="flex flex-col items-center justify-center"
				>
					<div className="h-65 mb-3 relative">
						<motion.img
							src="/profile.jpg"
							alt="Sandrei Mangubat"
							className="w-60 h-60 rounded-full  shadow-lg"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8 }}
						/>
						<h2 className="absolute right-25 bottom-2 text-3xl">🇵🇭</h2>
					</div>
					<h2 className="text-3xl mb-2 flex items-center text-cyan-400">
						Sandrei Mangubat
					</h2>
					<p className="text-2xl mb-6 text-center">
						<Typewriter
							options={{
								strings: ["Full-Stack Developer"],
								autoStart: true,
								loop: true,
							}}
						/>
					</p>
					<div className="flex space-x-4 mb-8">
						<a
							href="mailto:sandrei.mangubat@gmail.com"
							className="p-2 rounded-full bg-gray-800 border-1 border-white hover:border-cyan-400 hover:bg-gray-700 transition"
						>
							<FiMail size={24} />
						</a>
						<a
							href="https://github.com/seva3l"
							className="p-2 rounded-full bg-gray-800 border-1 border-white hover:border-cyan-400 hover:bg-gray-700 transition"
						>
							<FiGithub size={24} />
						</a>
						<a
							href="https://linkedin.com/in/smangubat"
							className="p-2 rounded-full bg-gray-800 border-1 border-white hover:border-cyan-400 hover:bg-gray-700 transition"
						>
							<FiLinkedin size={24} />
						</a>
					</div>
					<p className="text-lg text-gray-400 max-w-2xl text-center">
						Freelance Full-Stack Developer Specializing in Mobile App
						Development | Expert in React Native & Backend Development and
						Integration
					</p>
				</motion.div>
			</section>

			{/* Experience Section */}
			<section id="experience" className="py-16">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
					<div className="space-y-8">
						{experiences.map((exp) => (
							<ExperienceCard key={exp.id} {...exp} />
						))}
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="py-16">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{projects.map((project) => (
							<ProjectCard
								onViewProject={() => openModal(project)}
								key={project.id}
								{...project}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section id="skills" className="py-16 ">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{skills.map((skill) => (
							<Skill {...skill} key={skill.id} />
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-gray-800">
				<div className="container mx-auto px-6 py-8 text-center text-gray-400">
					<p>© 2025 Dreiveloper</p>
				</div>
			</footer>
		</div>
	);
};

export default App;
