import Table from "../../Components/Table";
import Button from "../../Components/Button";
import viewModel from "./viewModel";

const WeatherScreen = () => {
  const model = viewModel();

  return (
    <div className="w-full flex flex-col items-center justify-start mt-[10%]">
      <div className="w-[50%] md:w-[80%] lg:w-[50%] lg2:w-[70%] bg-white-100">
        <Table data={model?.data} windowSize={model?.windowSize} />
      </div>
      <div className="w-[50%] md:w-[80%] lg:w-[50%] lg2:w-[70%] h-auto flex flex-row items-center justify-end mt-[3em]">
        <div className="w-[20%] sm:w-[50%] md:w-[30%] lg:w-[30%] lg2:w-[30%]  flex flex-row justify-end">
          <Button name={"back"} onClick={model?.handleGoback} />
        </div>
      </div>
    </div>
  );
};

export default WeatherScreen;
