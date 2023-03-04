import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingScreen";
import HomeScreen from "./Pages/HomeScreen";
import WeatherScreen from "./Pages/WeatherScreen";
import Layout from "../src/Components/Layout";
import "./App.css";

function App() {
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
