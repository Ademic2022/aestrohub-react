import React from "react";
import { Button, Box, Typography, CardMedia } from "@mui/material";
import Section1 from "../components/homeComponents/Section1";

const Home = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="fit-content"
      mt={10}
    >
      <Section1 />
    </Box>
  );
};

export default Home;
