const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#333",
        light: "#fff",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        // Additional colors
        border: {
          default: "#ccc", // Default border color
          dark: "#555",    // Dark border color
          primary: "#B63E96", // Primary border color
        },
        text: {
          default: "#333",  // Default text color
          light: "#fff",    // Light text color
          primary: "#B63E96", // Primary text color
        },
      },
      animation:{
        'spin-slow': 'spin 10s linear infinite',
      },
      backgroundImage:{
        circularLight:'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fff 5px,#fff 100px);',
        circularDark:'repeating-radial-gradient(rgba(255,255,255,1) 2px,	#000000 8px,	#000000 100px);',

        circularLightLg:'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fff 5px,#fff 80px);',
        circularDarkLg:'repeating-radial-gradient(rgba(255,255,255,1) 2px,	#000000 8px,	#000000 80px);',

        circularLightMd:"repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fff 5px,#fff 60px)",
        circularDarkMd:"repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#000000 6px,#000000 60px)",

        circularLightSm:"repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fff 5px,#fff 40px)",
        circularDarkSm:"repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#000000 4px,#000000 40px)",


      },
      padding: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        // Add more sizes as needed
      },
    },
    screens:{
      "2xl":{max:"1535px"},
      // => @media(max-width: 1535px)

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    }
  },
  plugins: [],
};