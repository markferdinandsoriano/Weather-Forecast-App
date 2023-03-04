import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogOutButton = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="bg-sky-500 shadow-lg shadow-cyan-500/50 text-white p-[20%] font-poppins rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default LogOutButton;
