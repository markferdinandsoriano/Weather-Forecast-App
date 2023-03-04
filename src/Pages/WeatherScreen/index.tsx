import Table from "../../Components/Table";
import Button from "../../Components/Button";
import viewModel from "./viewModel";

const WeatherScreen = () => {
  const model = viewModel();
  return (
    <div className="w-full flex flex-col items-center justify-start mt-[10%]">
      <div className="w-[50%] bg-white-100">
        <Table />
      </div>
      <div className="w-[50%] h-auto flex flex-row items-center justify-end mt-[3em]">
        <div className="w-[20%] flex flex-row justify-end">
          <Button name={"back"} onClick={model?.handleGoback} />
        </div>
      </div>
    </div>
  );
};

export default WeatherScreen;
