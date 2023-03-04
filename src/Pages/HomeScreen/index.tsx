import viewModel from "./viewModel";

const HomeScreen = () => {
  const model = viewModel();

  return (
    <div className=" w-full h-full flex flex-row items-start justify-center pt-[3em]">
      <div className="bg-red-100 w-[50%] h-full flex flex-row items-start justify-center">
        <p>{model?.userData["nickName"]}</p>
        <p>{model?.userData["gitHubUrl"]}</p>
      </div>
    </div>
  );
};

export default HomeScreen;
