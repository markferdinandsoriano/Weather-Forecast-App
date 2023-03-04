import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingScreen";
import HomeScreen from "./Pages/HomeScreen";
import WeatherScreen from "./Pages/WeatherScreen";
import Layout from "../src/Components/Layout";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log("isAuthenticated", isAuthenticated, "user", user);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homeScreen" element={<HomeScreen />} />
          <Route path="/WeatherScreen" element={<WeatherScreen />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
