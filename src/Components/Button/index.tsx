import React from "react";

type Props = {
  name: string;
  onClick?: () => void;
};

const Button = ({ name, onClick }: Props) => {
  return (
    <div className="py-[30px] bg-white-50 w-[60%] sm:w-[70%]  md:w-[80%] lg:w-[70%] lg2:w-[30%] h-auto">
      <button
        onClick={onClick}
        className="w-full bg-blue-500 shadow-lg shadow-cyan-500/50 text-white text-lg sm:text-xs font-poppins rounded-lg py-[0.5em]"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
