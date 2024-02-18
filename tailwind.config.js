/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"rich-gold": "#FFD700",
				"charcoal-black": "#333333",
				"antique-gold": "#c49b63",
				"very-dark-teal": "#051b24",
				"dark-teal": "#072a38",
				"medium-teal": "#0b4055",
				"light-teal": "#0d9488",
				"very-light-teal": "#14b8a6",
				teal: "#083344",
			},
			screens: {
				xs: "480px",
			},
		},
	},
	plugins: [],
};
