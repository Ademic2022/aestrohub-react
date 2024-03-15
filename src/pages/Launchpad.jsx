import React from "react";
import { Box } from "@mui/material";
import Section1 from "../components/LaunchPad/Section1";
import Section7 from "../components/homeComponents/Section7";
import LaunchPadServices from "../components/LaunchPad/LaunchPadServices";

const Launchpad = () => {
  return (
    <React.Fragment>
      <Box mt={5}>
        <Section1 />
        <LaunchPadServices />
        <Box mt={15}>
          <Section7 />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Launchpad;
