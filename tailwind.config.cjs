/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	daisyui: {
		themes: [
			{
			cyberLight: {
        "primary": "#fce355",
          
        "secondary": "#c7d2fe",
                 
        "accent": "#210c66",
                 
        "neutral": "#181B20",
                 
        "base-100": "#FCFCFC",
                 
        "info": "#fef9c3",
                 
        "success": "#4ade80",
                 
        "warning": "#F4BD71",
                 
        "error": "#FA1E4E",
				},
				cyberDark: {
          "primary": "#f4fcae",
          
          "secondary": "#e3ff89",
                   
          "accent": "#7e1eaa",
                   
          "neutral": "#2F2136",
                   
          "base-100": "#3D3D3D",
                   
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
