/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            background: "#FCFEFE",
            primary: "#182a40",
            secondary: "#235c84",
            accent: "#BFD2F8",
            black: "#212124",
         },

         fontFamily: {
            bodyContent: "Palatino",
         },
      },
   },
   plugins: [],
};
