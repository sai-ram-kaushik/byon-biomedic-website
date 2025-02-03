/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            background: "#FCFEFE",
            primary: "#1F2B6C",
            secondary: "#235c84",
            accent: "#BFD2F8",
            black: "#212124",
         },

         fontFamily: {
            heading: "Montserrat",
            bodyContent: "Work Sans",
         },
      },
   },
   plugins: [],
};
