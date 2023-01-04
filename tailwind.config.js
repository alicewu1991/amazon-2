module.exports = {
	mode: "jit",
	plugins: [require("@tailwindcss/line-clamp")],
	content: [
		"./src/pages/**/*.{html,js,ts,jsx,tsx}",
		"./src/components/**/*.{html,js,ts,jsx,tsx}",
	],
	// darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				amazon_blue: {
					light: "#232F3E",
					DEFAULT: "#131921",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
};
