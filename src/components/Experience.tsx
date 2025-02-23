import { motion } from "framer-motion";
import { FaCodeBranch } from "react-icons/fa";

interface Props {
	id: number;
	title: string;
	company: string;
	duration: string;
	description: string[];
}

export default function ExperienceCard({
	title,
	company,
	duration,
	description,
}: Props) {
	return (
		<motion.div
			className="p-6 bg-gray-800/25 border-gray-800 border-1 rounded-lg hover:bg-gray-700/20"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
		>
			<h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
			<div className="flex lg:flex-row flex-col lg:items-center justify-between mb-4">
				<p>{company}</p>
				<p className="text-gray-400 text-sm">{duration}</p>
			</div>
			<ul className="list-disc list-inside space-y-2">
				{description.map((item) => (
					<div key={item} className="flex space-x-2 items-center">
						<div className="w-[30px] flex justify-center">
							<FaCodeBranch size={15} />
						</div>
						<p className="text-gray-300 flex-1">{item}</p>
					</div>
				))}
			</ul>
		</motion.div>
	);
}
