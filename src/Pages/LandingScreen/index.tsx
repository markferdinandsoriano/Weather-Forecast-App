import React from "react";
import LoginButton from "../../Components/LoginButton";

type Props = {};

const LandingScreen = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-start h-full w-[50%] pt-[8em]">
      <div className="w-full">
        <p className="font-montesserat text-2xl sm:text-lg">
          Welcome to the weather forecast web application. Please login with
          your
          <br />
          Github user to use the application and view the weather in your city
        </p>
      </div>
      <div className="flex flex-row justify-start w-full h-auto pt-[4em]">
        <LoginButton />
      </div>
    </div>
  );
};

export default LandingScreen;
