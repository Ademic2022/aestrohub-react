import React from "react";
import { Box } from "@mui/material";
import Section1 from "../components/AboutComponent/Section1";
import Section2 from "../components/AboutComponent/Section2";
import WhyUs from "../components/AboutComponent/WhyUs";
import Products from "../components/AboutComponent/Products";

const AboutUs = () => {
  return (
    <React.Fragment>
      <Box mt={5}>
        <Section1 />
        <Section2 />
        <WhyUs />
        <Products />
      </Box>
    </React.Fragment>
  );
};

export default AboutUs;
