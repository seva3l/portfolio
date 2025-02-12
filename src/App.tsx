// App.tsx
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import ExperienceCard from "./components/Experience";
import ProjectCard from "./components/Project";
import { experiences, projects, skills } from "./data/config";
import Navbar from "./components/Navbar";
import Typewriter from "typewriter-effect";
const App = () => {
	return (
		<div className="min-h-screen bg-gray-900 text-gray-100 w-full">
			{/* Navigation */}
			<nav className="sticky lg:fixed top-0 w-full bg-gray-800/80 backdrop-blur-sm z-50">
				<div className="container mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<h2 className="font-bold text-2xl">Sandrei Mangubat</h2>
						<Navbar />
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="container mx-auto px-6 lg:pt-30 pt-5 pb-16 ">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-3xl mb-2">
						<Typewriter
							options={{
								strings: ["Sandrei Mangubat"],
								autoStart: true,
								loop: true,
							}}
						/>
					</h2>
					<p className="text-2xl  text-cyan-400 mb-6">
						<Typewriter
							options={{
								strings: ["Mobile App & Backend Developer"],
								autoStart: true,
								loop: true,
							}}
						/>
					</p>
					<div className="flex space-x-4 mb-8">
						<a
							href="mailto:sandrei.mangubat@gmail.com"
							className="p-2 rounded-full bg-gray-800 hover:bg-cyan-400 transition"
						>
							<FiMail size={24} />
						</a>
						<a
							href="https://github.com/seva3l"
							className="p-2 rounded-full bg-gray-800 hover:bg-cyan-400 transition"
						>
							<FiGithub size={24} />
						</a>
						<a
							href="https://linkedin.com/in/smangubat"
							className="p-2 rounded-full bg-gray-800 hover:bg-cyan-400 transition"
						>
							<FiLinkedin size={24} />
						</a>
					</div>
					<p className="text-lg text-gray-400 max-w-2xl">
						Mobile App Developer and Backend Engineer specializing in React
						Native and Node.js, with 4+ years of experience building
						cross-platform applications and scalable services.
					</p>
				</motion.div>
			</section>

			{/* Experience Section */}
			<section id="experience" className="py-16 bg-gray-800/50">
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
							<ProjectCard key={project.id} {...project} />
						))}
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section id="skills" className="py-16 bg-gray-800/50">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{skills.map((skill) => (
							<div key={skill.id} className="p-6 bg-gray-700 rounded-lg">
								<h3 className="text-xl font-semibold mb-4 text-cyan-400">
									{skill.category}
								</h3>
								<div className="flex flex-wrap gap-2">
									{skill.items.map((item) => (
										<span
											key={item}
											className="px-3 py-1 bg-gray-600 rounded-full text-sm"
										>
											{item}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-gray-800">
				<div className="container mx-auto px-6 py-8 text-center text-gray-400">
					<p>© 2024 Sandrei Mangubat. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
};

export default App;
