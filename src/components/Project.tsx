export default function ProjectCard({
	title,
	description,
	tech,
	link,
}: {
	title: string;
	description: string;
	tech: string[];
	link: string;
}) {
	return (
		<div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
			<h3 className="text-xl font-semibold mb-2">{title}</h3>
			<p className="text-gray-300 mb-4">{description}</p>
			<div className="flex flex-wrap gap-2 mb-4">
				{tech.map((item) => (
					<span
						key={item}
						className="px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm"
					>
						{item}
					</span>
				))}
			</div>
			<a href={link} className="text-cyan-400 hover:text-cyan-300">
				View Project →
			</a>
		</div>
	);
}
