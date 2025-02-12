// components/ExperienceCard.tsx
import { motion } from "framer-motion";

export default function ExperienceCard({
	title,
	company,
	duration,
	description,
}: {
	title: string;
	company: string;
	duration: string;
	description: string[];
}) {
	return (
		<motion.div
			className="p-6 bg-gray-800 rounded-lg"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
		>
			<h3 className="text-xl font-semibold">{title}</h3>
			<div className="flex items-center justify-between mb-4">
				<p className="text-cyan-400">{company}</p>
				<p className="text-gray-400 text-sm">{duration}</p>
			</div>
			<ul className="list-disc list-inside space-y-2">
				{description.map((item) => (
					<li key={item} className="text-gray-300">
						{item}
					</li>
				))}
			</ul>
		</motion.div>
	);
}
