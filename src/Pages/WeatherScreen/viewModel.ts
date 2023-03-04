import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const viewModel = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log("state", state);

  const handleGoback = React.useCallback(() => {
    navigate("/homeScreen");
  }, []);

  return {
    handleGoback,
  };
};

export default viewModel;
