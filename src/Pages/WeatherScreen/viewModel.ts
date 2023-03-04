import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import convertTimezone from "../../Common/utils/convertTimezone";
import concatKey from "../../Common/utils/concatKey";

const viewModel = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [data, setData] = React.useState<Array<{ [key: string]: unknown }>>([]);

  React.useEffect(() => {
    if (JSON.stringify(state) !== "{}") {
      const newData = {
        date: convertTimezone(state?.timezone),
        temp: state?.main?.temp,
        description: concatKey(state?.weather, "description"),
        main: concatKey(state?.weather, "main"),
        pressure: state?.main?.pressure,
        humidity: state?.main?.humidity,
      };

      setData([{ ...newData }]);
    }
    return () => {
      setData([]);
    };
  }, [state]);

  const handleGoback = React.useCallback(() => {
    navigate("/homeScreen");
  }, []);

  return {
    handleGoback,
    data,
  };
};

export default viewModel;
