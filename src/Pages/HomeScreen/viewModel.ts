import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getGitHubUrl, getWeatherByCity } from "../../Common/api/fetch";
import useDebounce from "../../Common/hooks/useDebounce";
import { useNavigate } from "react-router-dom";

const viewModel = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  const [value, setValue] = React.useState<string>("");

  const [userData, setUserData] = React.useState<{
    nickName?: string;
    gitHubUrl?: string;
  }>({
    nickName: "",
    gitHubUrl: "",
  });

  const [weatherData, setWeatherData] = React.useState<{
    [key: string]: unknown;
  }>({});

  const [isError, setErrorMessage] = React.useState<string>("");

  const fetchData = async () => {
    const urlResult = await getGitHubUrl({ nickName: `${user?.nickname}` });

    setUserData({
      nickName: user?.nickname,
      gitHubUrl: urlResult,
    });
  };

  React.useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated, user]);

  const handleChange = React.useCallback(
    async (e: { target: { value: string } }) => {
      const value = e?.target?.value;
      setValue(value);
    },
    []
  );

  const fetchWeatherData = async () => {
    const result = await getWeatherByCity({ city: value });
    if (result?.cod === "404") {
      setErrorMessage(result?.message);
    } else {
      setErrorMessage("");
      setWeatherData(result);
    }
  };

  React.useEffect(() => {
    if (value !== "") {
      fetchWeatherData();
    }
  }, [useDebounce(value, 500)]);

  const onClick = React.useCallback(() => {
    if (value === "") {
      setErrorMessage("Please type City");
    } else {
      !isError && navigate("/WeatherScreen", { state: weatherData });
    }
  }, [weatherData, isError]);

  return {
    userData,
    handleChange,
    onClick,
    isError,
  };
};

export default viewModel;
