/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	daisyui: {
		themes: [
			{
				cyberlight: {
					primary: "#FFCD34",

					secondary: "#113385",

					accent: "#F75F05",

					neutral: "#352A3C",

					"base-100": "#FBFCFD",

					info: "#0ea5e9",

					success: "#16a34a",

					warning: "#a16207",

					error: "#f43f5e",
				},
				cyberdark: {
    
          "primary": "#ce5654",
          
          "secondary": "#3f98d3",
                   
          "accent": "#c729d8",
                   
          "neutral": "#ecfccb",
                   
          "base-100": "#111827",
                   
          "info": "#3656E2",
                   
          "success": "#1A9E4C",
                   
          "warning": "#F0C54C",
                   
          "error": "#F54D85",
				},
			},
		],
    darkTheme: "cyberdark",
	},
	plugins: [require("daisyui")],
};
