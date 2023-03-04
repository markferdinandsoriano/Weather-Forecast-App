import React from "react";
import Cloud from "../../assets/cloud.png";
import LogOutButton from "../LogoutButton";

type Props = {};

const HeaderBar = () => {
  return (
    <div className="flex flex-row items-center w-full h-[15%] sm:h-[20%]">
      <div className="flex sm:flex-col sm:items-start items-center w-[80%] h-auto">
        <img
          src={Cloud}
          alt="Weather Forecase image"
          width={150}
          height={150}
          className="drop-shadow-2xl ml-[1em] sm:ml-[0]"
        />
        <h1 className="sm:ml-[0] ml-[2em] font-poppins text-[24px] font-bold">
          Weather Forecast
        </h1>
      </div>
      <div className="flex flex-row justify-end items-center w-[20%] h-full pr-[3em]">
        <LogOutButton />
      </div>
    </div>
  );
};

export default HeaderBar;
