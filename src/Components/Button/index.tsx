import React from "react";

type Props = {
  name: string;
};

const Button = ({ name }: Props) => {
  return (
    <div className="py-[30px] bg-white-50 w-[60%] h-auto">
      <button className="w-full bg-blue-500 shadow-lg shadow-cyan-500/50 text-white text-lg font-poppins rounded-lg py-[0.5em]">
        {name}
      </button>
    </div>
  );
};

export default Button;
