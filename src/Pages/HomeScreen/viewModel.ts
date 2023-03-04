import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getGitHubUrl } from "../../api/fetch";

const viewModel = () => {
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

  return {
    userData,
  };
};

export default viewModel;
