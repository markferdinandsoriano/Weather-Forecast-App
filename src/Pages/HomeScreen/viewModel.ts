import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getGitHubUrl } from "../../Common/api/fetch";
import { useNavigate } from "react-router-dom";

const viewModel = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();

  const [userData, setUserData] = React.useState<{
    nickName?: string;
    gitHubUrl?: string;
  }>({
    nickName: "",
    gitHubUrl: "",
  });

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
    (e: { target: { name: string; value: string } }) => {
      const name: string = e?.target?.name;
      const value = e?.target?.value;
      console.log("name", name, "value", value);
    },
    []
  );

  const onClick = React.useCallback(() => {
    navigate("/WeatherScreen");
  }, []);

  return {
    userData,
    handleChange,
    onClick,
  };
};

export default viewModel;
