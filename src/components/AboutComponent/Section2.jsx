import React from "react";
import { Box, Typography } from "@mui/material";
import AboutCard from "../Common/AboutCard";
import { items1 } from "../Data/aboutUs";

const Section2 = () => {
  return (
    <React.Fragment>
      <AboutCard datas={items1} />
    </React.Fragment>
  );
};

export default Section2;
