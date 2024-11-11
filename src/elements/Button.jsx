import React from "react";

const Button = ({ title, onClick, className }) => {
   return (
      <button
         className={`px-7 py-4 rounded-full bg-secondary text-background border border-secondary hover:bg-background duration-200 hover:text-black ease-in-out ${className}`}
         onClick={onClick}
      >
         {title}
      </button>
   );
};

export default Button;
