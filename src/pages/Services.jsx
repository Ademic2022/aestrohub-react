import React from "react";
import { Box } from "@mui/material";
import Section1 from "../components/serviceComponents/Home";
import Marketing from "../components/serviceComponents/Marketing";
import Design from "../components/serviceComponents/Design";
import Management from "../components/serviceComponents/Management";
import Development from "../components/serviceComponents/Development";
import Writing from "../components/serviceComponents/Writing";
import Offering from "../components/serviceComponents/Offering";
import Company from "../components/serviceComponents/Company";

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
