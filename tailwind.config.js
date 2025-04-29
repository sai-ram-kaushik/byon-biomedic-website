/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            background: "#F5F7FB",
            primary: "#415DA1",
            secondary: "#2D4373",
            accent: "#7A91D2",
            black: "#1A1D26",
         },
         
         animation: {
            float: 'float 8s ease-in-out infinite',
            pulse: 'pulse 6s ease-in-out infinite',
         },
         keyframes: {
           float: {
             '0%, 100%': { transform: 'translateY(0px)' },
             '50%': { transform: 'translateY(-20px)' },
           },
         },
          
         fontFamily: {
            bodyContent: ["Inter", "sans-serif"],
         },
      },
   },
   plugins: [],
};
