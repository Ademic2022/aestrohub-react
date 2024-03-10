import React from "react";
import GalaxyBackground from "./pages/GalaxyBackground";
import ResponsiveNavBar from "./components/common/Navbar";
import LandingPage from "./components/landingPage/LandingPage";

const App = () => {
  return (
    <React.Fragment>
      <GalaxyBackground />
      <div className="content" style={{ color: "#fff" }}>
        <ResponsiveNavBar />
        <LandingPage />
      </div>
    </React.Fragment>
  );
};

export default App;
