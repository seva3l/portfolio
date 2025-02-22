// components/Navbar.tsx
import { Fragment } from "react";
import {
	Dialog,
	TransitionChild,
	Transition,
	DialogPanel,
} from "@headlessui/react";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			const yOffset = -40;
			const y =
				section.getBoundingClientRect().top + window.pageYOffset + yOffset;
			setMobileMenuOpen(false);

			requestAnimationFrame(() => {
				window.scrollTo({
					top: y,
					behavior: "smooth",
				});
			});
		}
	};

	return (
		<>
			{/* Mobile Menu Button */}
			<button
				type="button"
				className="lg:hidden p-2 text-gray-100 hover:text-cyan-400"
				onClick={() => setMobileMenuOpen(true)}
			>
				<FiMenu className="h-6 w-6" />
			</button>

			{/* Desktop Navigation */}
			<div className="hidden lg:flex space-x-6">
				<button
					type="button"
					onClick={() => scrollToSection("experience")}
					className="hover:text-cyan-400 transition"
				>
					Experience
				</button>
				<button
					type="button"
					onClick={() => scrollToSection("projects")}
					className="hover:text-cyan-400 transition"
				>
					Projects
				</button>
				<button
					type="button"
					onClick={() => scrollToSection("skills")}
					className="hover:text-cyan-400 transition"
				>
					Skills
				</button>
			</div>

			{/* Mobile Drawer */}
			<Transition show={mobileMenuOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-50 lg:hidden"
					onClose={setMobileMenuOpen}
				>
					<TransitionChild
						as={Fragment}
						enter="ease-in-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm" />
					</TransitionChild>

					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
								<TransitionChild
									as={Fragment}
									enter="transform transition ease-in-out duration-500"
									enterFrom="translate-x-full"
									enterTo="translate-x-0"
									leave="transform transition ease-in-out duration-500"
									leaveFrom="translate-x-0"
									leaveTo="translate-x-full"
								>
									<DialogPanel className="pointer-events-auto relative w-screen max-w-md ">
										<div className="flex h-full flex-col bg-gray-800/25 shadow-xl">
											<div className="px-6 py-4">
												<div className="flex justify-end">
													<button
														type="button"
														className="p-2 text-gray-400 hover:text-cyan-400"
														onClick={() => setMobileMenuOpen(false)}
													>
														<FiX className="h-6 w-6" />
													</button>
												</div>
											</div>
											<div className="relative mt-6 flex-1 px-6">
												<nav className="flex flex-col space-y-4">
													<button
														type="button"
														className="text-lg text-white border-1 border-gray-500"
														onClick={() => scrollToSection("experience")}
													>
														Experience
													</button>
													<button
														type="button"
														className="text-lg text-white border-1 border-gray-500"
														onClick={() => scrollToSection("projects")}
													>
														Projects
													</button>
													<button
														type="button"
														className="text-lg text-white border-1 border-gray-500"
														onClick={() => scrollToSection("skills")}
													>
														Skills
													</button>
												</nav>
											</div>
										</div>
									</DialogPanel>
								</TransitionChild>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
