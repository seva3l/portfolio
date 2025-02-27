import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { IProject } from "../types";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

Modal.setAppElement("#root");

interface ProjectModalProps {
	isOpen: boolean;
	onClose: () => void;
	project: IProject;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
	isOpen,
	onClose,
	project,
}) => {
	if (!project) return null;

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			className="bg-gray-900 p-6 rounded-lg max-w-3xl mx-auto mt-10 relative"
			overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center px-4"
		>
			{/* Close Button Positioned Outside the Image Area */}
			<button
				type="button"
				onClick={onClose}
				className="absolute top-3 right-3 text-white text-2xl z-50 p-2 rounded-full hover:bg-gray-700 transition"
			>
				✖
			</button>

			<h2 className="text-2xl font-bold mb-4 text-white text-center">
				{project.title}
			</h2>

			<div className="relative items-center flex justify-around">
				<button
					className="swiper-button-prev absolute left-[-20px] z-10"
					type="button"
				>
					<MdNavigateBefore size={50} color="#FFF" />
				</button>
				<Swiper
					modules={[Navigation, Pagination]}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					pagination={{ clickable: true }}
					centeredSlides
					slidesPerView={1}
					className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
				>
					{project.images.map((img, index) => (
						<SwiperSlide key={img}>
							<img
								src={img}
								alt={`Project ${index}`}
								className="w-full h-[380px] lg:h-[500px] object-contain rounded-lg"
							/>
						</SwiperSlide>
					))}
				</Swiper>
				<button
					className="swiper-button-next absolute right-[-20px] z-10"
					type="button"
				>
					<MdNavigateNext size={50} color="#FFF" />
				</button>
			</div>

			<p className="mt-4 text-gray-300 text-center">{project.description}</p>
		</Modal>
	);
};

export default ProjectModal;
