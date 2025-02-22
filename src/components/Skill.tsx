interface SkillProps {
	category: string;
	items: string[];
}

export default function Skill({ category, items }: SkillProps) {
	return (
		<div className="p-6 bg-gray-800/25 border-gray-800 rounded-lg hover:bg-gray-700/20 ">
			<h3 className="text-xl font-semibold mb-4 ">{category}</h3>
			<div className="flex flex-wrap gap-2">
				{items.map((item) => (
					<span
						key={item}
						className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm"
					>
						{item}
					</span>
				))}
			</div>
		</div>
	);
}
