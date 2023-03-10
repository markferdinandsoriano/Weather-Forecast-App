import React from "react";
import searchIcon from "../../Common/assets/searchIcon.png";

type Props = {
  name?: string;
  handleChange: (data: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({ name, handleChange }: Props) => {
  return (
    <div className="w-auto mb-[10px] relative">
      <img
        className="absolute p-[10px] min-w-[50px] text-center outline-blue-500"
        src={searchIcon}
        alt="searchIcon"
        width={30}
        height={30}
      />
      <input
        name={name}
        onChange={(e) => handleChange(e)}
        className="w-full py-[10px] pl-[50px] rounded-[50px] outline-0 border-4 border-cyan-400/100"
        type="text"
        placeholder="Search City"
        autoComplete="off"
        autoFocus={false}
        id="city"
      />
    </div>
  );
};

export default TextField;
