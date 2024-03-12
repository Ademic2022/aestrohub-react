import React from "react";
import { Box } from "@mui/material";
import Section1 from "../components/homeComponents/Section1";
import Section2 from "../components/homeComponents/Section2";
import Section3 from "../components/homeComponents/Section3";

const Home = () => {
  return (
    <Box
      display={{ md: "flex", xs: "block" }}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="fit-content"
      mt={10}
    >
      <Section1 />
      <Section2 />
      <Section3 />
    </Box>
  );
};

export default Home;
