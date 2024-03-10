import React from "react";
import GalaxyBackground from "./pages/GalaxyBackground";

const App = () => {
  return (
    <React.Fragment>
      <GalaxyBackground />
      <div className="content" style={{ color: "#fff" }}>
        <h1>hello world</h1>
      </div>
    </React.Fragment>
  );
};

export default App;
