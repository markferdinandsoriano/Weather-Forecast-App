import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <button
        onClick={() => loginWithRedirect()}
        className="bg-blue-500 shadow-lg shadow-cyan-500/50 text-white px-[80%] py-[30%] text-lg font-poppins rounded-lg"
      >
        Login
      </button>
    </div>
  );
};

export default LoginButton;
