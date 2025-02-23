// data/config.ts

export const experiences = [
	{
		id: 1,
		title: "Freelance Mobile, Backend & IoT Developer",
		company: "Self-Employed",
		duration: "Dec 2021 - Present",
		description: [
			"Led development of multiple React Native applications",
			"Architected and implemented Node.js/Express backend services",
			"Designed and developed IoT home automation solutions, integrating hardware with cloud services",
			"Implemented CI/CD pipelines, reducing deployment time by 60%",
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
		company: "TopApps Inc.",
		duration: "August 2022 - April 2023",
		description: [
			"Enhanced existing React Native application with new features",
			"Developed RESTful APIs using Spring Boot",
			"Integrated third-party payment APIs",
		],
	},
	{
		id: 4,
		title: "Mobile App and Backend Developer",
		company: "Thousand Minds Social Media Inc.",
		duration: "November 2019 - July 2020",
		description: [
			"Enhanced and added new features to an eCommerce React Native application",
			"Developed Python automation scripts for database management and optimization",
			"Integrated TNVS API for seamless delivery and logistics management",
		],
	},
];

export const projects = [
	{
		id: 1,
		title: "Map Notes",
		description:
			"Mapnotes is a mobile app developed using React Native, featuring an interactive map that allows users to create and manage notes with location data. The app integrates Mapbox for mapping features, React Navigation for seamless navigation between screens, and Firebase for authentication and data storage",
		tech: ["React Native", "Firebase"],
		link: "#",
		images: [
			"/projects/mapnotes/login.jpeg",
			"/projects/mapnotes/signup.jpeg",
			"/projects/mapnotes/note-list.jpeg",
			"/projects/mapnotes/create.jpeg",
			"/projects/mapnotes/edit.jpeg",
			"/projects/mapnotes/map-notes.jpeg",
		],
	},

	{
		id: 2,
		title: "FoodCalc",
		description:
			"Plan your recipes, calculate costs, and maximize profits with ease. FoodCalc helps food entrepreneurs and restaurant owners streamline pricing, track ingredient costs, and ensure profitable margins all in one intuitive platform.",
		tech: ["React Native", "SQLite"],
		link: "https://play.google.com/store/apps/details?id=com.Foodmenucalculator",
		images: [
			"/projects/foodcalc/home.jpeg",
			"/projects/foodcalc/menu.jpeg",
			"/projects/foodcalc/recipe.jpeg",
		],
	},
	{
		id: 3,
		title: "E-Shop",
		description:
			"Shop for your daily essentials and favorite foods with ease! Our eCommerce app offers a seamless shopping experience with fast delivery, secure payments, and a wide selection of goods all at your fingertips",
		tech: ["React Native", "Local Storage"],
		link: "#",
		images: [
			"/projects/eshop/home.jpeg",
			"/projects/eshop/cart.jpeg",
			"/projects/eshop/order-success.jpeg",
		],
	},
	{
		id: 4,
		title: "Expense Tracker",
		description:
			"Track your expenses effortlessly with our intuitive expense tracker app. Categorize spending, set budgets, and gain insights with real-time analytics—helping you stay in control of your finances, anytime, anywhere.",
		tech: ["React Native"],
		link: "#",
		images: [
			"/projects/expense-tracker/home.jpeg",
			"/projects/expense-tracker/chart.jpeg",
			"/projects/expense-tracker/expenses.jpeg",
		],
	},
];

export const skills = [
	{
		id: 1,
		category: "Mobile Development",
		items: [
			"React Native",
			"TypeScript",
			"Redux",
			"React Query",
			"Nativewind",
			"Zustand",
		],
	},
	{
		id: 7,
		category: "Web Development",
		items: [
			"React",
			"Nextjs",
			"TypeScript",
			"Redux",
			"React Query",
			"Tailwind",
			"Zustand",
		],
	},
	{
		id: 2,
		category: "Backend Development",
		items: [
			"Node.js",
			"Express",
			"Typescript",
			"Python (Flask)",
			"Java (Spring Boot)",
		],
	},
	{
		id: 3,
		category: "Database & Cloud",
		items: [
			"MongoDB",
			"MySQL",
			"PostgreSQL",
			"AWS EC2",
			"Firebase",
			"Supabase",
			"Cloudinary",
		],
	},
	{
		id: 4,
		category: "Tools & Others",
		items: [
			"Git",
			"REST APIs",
			"Docker",
			"Test-Driven Development",
			"MVC",
			"Websockets",
			"Repository Pattern",
			"Microcontrollers",
		],
	},
];
