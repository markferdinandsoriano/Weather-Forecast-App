import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { VITE_AUTH_DOMAIN, VITE_CLIENT_ID } from "./Common/config";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={VITE_AUTH_DOMAIN}
      clientId={VITE_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
