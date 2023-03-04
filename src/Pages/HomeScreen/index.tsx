import TextField from "../../Components/Textfield";
import viewModel from "./viewModel";

const HomeScreen = () => {
  const model = viewModel();

  return (
    <div className=" w-full h-full flex flex-row items-start justify-center pt-[3em]">
      <div className="w-[50%] h-full flex flex-col items-center justify-start gap-y-[4em]">
        <div className="flex flex-col items-center gap-y-4 mt-[1em]">
          <p className="font-montesserat text-xl">
            {model?.userData["nickName"]}
          </p>
          <a href={model?.userData["gitHubUrl"]} target="_blank">
            <p className="font-montesserat text-xl hover:font-bold">
              {model?.userData["gitHubUrl"]}
            </p>
          </a>
        </div>
        <TextField />
      </div>
    </div>
  );
};

export default HomeScreen;
