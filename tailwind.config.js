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

         fontFamily: {
            bodyContent: ["Inter", "sans-serif"],
         },
      },
   },
   plugins: [],
};
