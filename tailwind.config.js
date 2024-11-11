/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            background: "#FCFEFE",
            primary: "#1F2B6C",
            secondary: "#159EEC",
            accent: "#BFD2F8",
            black: "#212124",
         },

         fontFamily: {
            heading: "Yeseva One",
            bodyContent: "Work Sans",
         },
      },
   },
   plugins: [],
};
