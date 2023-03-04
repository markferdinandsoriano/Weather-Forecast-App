import React from "react";

type Props = {};

const LandingScreen = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-start h-full w-[50%] pt-[8em]">
      <div>
        <p className="font-montesserat text-2xl">
          Welcome to the weather forecast web application. Please login with
          your
          <br />
          Github user to use the application and view the weather in your city
        </p>
      </div>
      <div className="flex flex-row justify-start w-full h-auto pt-[4em] pl-[1.5em]">
        <div>
          <button className="bg-blue-500 shadow-lg shadow-cyan-500/50 text-white px-[80%] py-[30%] text-lg font-poppins rounded-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
