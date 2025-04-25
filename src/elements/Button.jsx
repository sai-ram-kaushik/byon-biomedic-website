import React from "react";

const Button = ({ title, onClick, className }) => {
   return (
      <button
         onClick={onClick}
         className={`
            px-7 py-4 
            rounded-full 
            bg-transparent text-white border border-white 
            hover:bg-white hover:text-black 
            transition-all duration-300 ease-in-out 
            hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]
            active:scale-95
            ${className}
         `}
      >
         {title}
      </button>
   );
};

export default Button;
