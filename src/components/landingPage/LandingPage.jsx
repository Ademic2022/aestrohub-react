import React from "react";
import ResponsiveNavBar from "../common/Navbar";
import { Container, Box } from "@mui/material";

const LandingPage = () => {
  return (
    <Container maxWidth="xl">
      <ResponsiveNavBar />
      <Box component="main" sx={{ p: 3 }}>
        
      </Box>
    </Container>
  );
};

export default LandingPage;
