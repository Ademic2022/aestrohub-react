import React from "react";
import { Box } from "@mui/material";
import Section1 from "../components/ServiceComponents/Home";
import Marketing from "../components/ServiceComponents/Marketing";
import Design from "../components/ServiceComponents/Design";
import Management from "../components/ServiceComponents/Management";
import Development from "../components/ServiceComponents/Development";
import Writing from "../components/ServiceComponents/Writing";
import Offering from "../components/ServiceComponents/Offering";
import Company from "../components/ServiceComponents/Company";

const Services = () => {
  return (
    <React.Fragment>
      <Box mt={5}>
        <Section1 />
        <Marketing />
        <Design />
        <Management />
        <Development />
        <Writing />
        <Offering />
        <Company />
      </Box>
    </React.Fragment>
  );
};

export default Services;
