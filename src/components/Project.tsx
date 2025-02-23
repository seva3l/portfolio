import type { IProject } from "../types";

interface ProjectCardProps extends IProject {
	onViewProject: () => void;
}

export default function ProjectCard({
	title,
	description,
	tech,
	onViewProject,
}: ProjectCardProps) {
	return (
		<div className="p-6 bg-gray-800/25 border-gray-800 border-1 rounded-lg hover:bg-gray-700/20 transition">
			<h3 className="text-xl font-semibold mb-2 text-cyan-400">{title}</h3>
			<p className="text-gray-300 mb-4">{description}</p>
			<div className="flex flex-wrap gap-2 mb-4">
				{tech.map((item) => (
					<span
						key={item}
						className="px-2 py-1 bg-cyan-400/10 text-white rounded-full text-sm"
					>
						{item}
					</span>
				))}
			</div>
			<button
				onClick={onViewProject}
				type="button"
				className="text-white border-1 hover:bg-cyan-700 hover:border-cyan-400 border-gray-500"
			>
				View Project
			</button>
		</div>
	);
}
