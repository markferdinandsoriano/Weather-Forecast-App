import viewModel from "./viewModel";

const HomeScreen = () => {
  const model = viewModel();

  return (
    <div className=" w-full h-full flex flex-row items-start justify-center pt-[3em]">
      <div className="w-[50%] h-full flex flex-row items-start justify-center">
        <div className="flex flex-col items-center gap-y-4 mt-[1em]">
          <p className="font-montesserat">{model?.userData["nickName"]}</p>
          <a href={model?.userData["gitHubUrl"]} target="_blank">
            <p className="font-montesserat">{model?.userData["gitHubUrl"]}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
