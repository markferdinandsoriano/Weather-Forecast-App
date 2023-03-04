import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./Pages/LandingScreen";
import HomeScreen from "./Pages/HomeScreen";
import WeatherScreen from "./Pages/WeatherScreen";
import Layout from "../src/Components/Layout";
import Loader from "./Components/Loader";
import ProtectedRoute from "./Protected/protecteRoute";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] tranlate-y-[50%]">
        <Loader />
      </div>
    );
  }

  return (
    <Layout>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? <Navigate to="/homeScreen" /> : <LandingPage />
            }
          />
          <Route
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirectPath={"/"}
              />
            }
          >
            <Route path="/homeScreen" element={<HomeScreen />} />
            <Route path="/WeatherScreen" element={<WeatherScreen />} />
          </Route>
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
