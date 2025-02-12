// data/config.ts

export const experiences = [
	{
		id: 1,
		title: "Freelance Mobile & Backend Developer",
		company: "Self-Employed",
		duration: "Dec 2021 - Present",
		description: [
			"Lead development of multiple React Native applications",
			"Architected and implemented Node.js/Express backend services",
			"Implemented CI/CD pipelines reducing deployment time by 60%",
		],
	},
	{
		id: 2,
		title: "Technical Consultant",
		company: "Remote Philippines",
		duration: "April 2023 - September 2023",
		description: [
			"Developed Mobile and Web applications with TypeScript, improving code reliability by 40%",
			"Integrated complex REST APIs and implemented state management using Redux",
			"Optimized app performance resulting in 30% faster load times",
		],
	},
	{
		id: 3,
		title: "Mobile App and Backend Developer",
		company: "TopApps",
		duration: "August 2022 - April 2023",
		description: [
			"Enhanced existing React Native application with new features",
			"Developed RESTful APIs using Spring Boot",
			"Implemented real-time notifications system using WebSockets",
			"Reduced API response times by 40% through optimization and caching strategies",
			"Integrated third-party payment APIs",
		],
	},
	{
		id: 4,
		title: "Mobile App and Backend Developer",
		company: "Thousand Minds Social Media Inc.",
		duration: "November 2019 - July 2020",
		description: [
			"Built a React Native mobile app from scratch",
			"Designed and implemented Flask backend API architecture",
			"Integrated CouchDB for efficient data management and real-time syncing",
		],
	},
];

export const projects = [
	{
		id: 1,
		title: "Plantanong - Plant Recognition App",
		description:
			"Award-winning plant identification application with community features",
		tech: ["React Native", "Flask", "MySQL", "AI Integration"],
		link: "#",
	},
	{
		id: 2,
		title: "FoodCalc - Calorie & Nutrition Calculator",
		description:
			"A mobile app for calculating food nutrition values with offline functionality",
		tech: ["React Native", "SQLite"],
		link: "https://play.google.com/store/apps/details?id=com.Foodmenucalculator",
	},
];

export const skills = [
	{
		id: 1,
		category: "Mobile Development",
		items: ["React Native", "TypeScript", "Redux", "React Query"],
	},
	{
		id: 2,
		category: "Backend Development",
		items: ["Node.js", "Express", "Python (Flask)", "Java (Spring Boot)"],
	},
	{
		id: 3,
		category: "Database & Cloud",
		items: ["MongoDB", "MySQL", "AWS EC2", "Supabase", "Cloudinary"],
	},
	{
		id: 4,
		category: "Tools & Others",
		items: ["Git", "REST APIs", "Docker", "Test-Driven Development"],
	},
];
