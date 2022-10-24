/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	daisyui: {
		themes: [
			{
			cyberLight: {
		 
         
        "primary": "#fce355",
          
        "secondary": "#c7d2fe",
                 
        "accent": "#a78bfa",
                 
        "neutral": "#181B20",
                 
        "base-100": "#FCFCFC",
                 
        "info": "#8CCBF8",
                 
        "success": "#4ade80",
                 
        "warning": "#F4BD71",
                 
        "error": "#FA1E4E",
				},
				cyberDark: {
          "primary": "#fde047",
          
          "secondary": "#f43387",
                   
          "accent": "#543064",
                   
          "neutral": "#ffedd5",
                   
          "base-100": "#151623",
                   
          "info": "#46A6D2",
                   
          "success": "#1CD98A",
                   
          "warning": "#DC9209",
                   
          "error": "#E13356",
         },
			},
		],
	},
	plugins: [
    require("daisyui"),
],
  
};
