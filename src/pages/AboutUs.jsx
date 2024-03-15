import React from "react";
import { Box } from "@mui/material";
import Section1 from "../components/aboutComponent/Section1";
import Section2 from "../components/aboutComponent/Section2";
import WhyUs from "../components/aboutComponent/WhyUs";
import Products from "../components/aboutComponent/Products";
import Team from "../components/aboutComponent/Team";
import FAQ from "../components/aboutComponent/FAQ";
import Section7 from "../components/homeComponents/Section7";

const AboutUs = () => {
  return (
    <React.Fragment>
      <Box mt={5}>
        <Section1 />
        <Section2 />
        <WhyUs />
        <Products />
        <Team />
        <FAQ />
        <Section7 />
      </Box>
    </React.Fragment>
  );
};

export default AboutUs;
