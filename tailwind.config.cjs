/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'dark',
	daisyui: {
		themes: [
			{
			cyberLight: {
        "primary": "#fce355",
          
        "secondary": "#2d638e",
                 
        "accent": "#210c66",
                 
        "neutral": "#181B20",
                 
        "base-100": "#FFFFFF",
                 
        "info": "#fef9c3",
                 
        "success": "#4ade80",
                 
        "warning": "#F4BD71",
                 
        "error": "#FA1E4E",
				},
				cyberDark: {
          "primary": "#f4fcae",
          
          "secondary": "#e3ff89",
                   
          "accent": "#3a9b11",
                   
          "neutral": "#2F2136",
                   
          "base-100": "#2C2F58",
                   
          "info": "#1E252F",
                   
          "success": "#44E4A4",
                   
          "warning": "#EFB95D",
                   
          "error": "#E64155",
         },
			},
		],
	},
	plugins: [
    require("daisyui"),
],
  
};
