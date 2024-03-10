import React from "react";
import GalaxyBackground from "./pages/GalaxyBackground";
import ResponsiveNavBar from "./components/common/Navbar";

const App = () => {
  return (
    <React.Fragment>
      <GalaxyBackground />
      <div className="content" style={{ color: "#fff" }}>
        <ResponsiveNavBar />
      </div>
    </React.Fragment>
  );
};

export default App;
