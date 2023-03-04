import React from "react";
import { useNavigate } from "react-router-dom";

const viewModel = () => {
  const navigate = useNavigate();

  const handleGoback = React.useCallback(() => {
    navigate("/homeScreen");
  }, []);

  return {
    handleGoback,
  };
};

export default viewModel;
