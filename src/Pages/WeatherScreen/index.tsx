import React from "react";
import Table from "../../Components/Table";

type Props = {};

const WeatherScreen = () => {
  return (
    <div className="w-full flex flex-row items-start justify-center mt-[10%]">
      <div className="w-[50%] bg-white-100">
        <Table />
      </div>
    </div>
  );
};

export default WeatherScreen;
