import React from "react";
import { Box, Container } from "@mui/material";

const NotFound = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: "90px",
        height: "100%",
        alignItems: "center",
      }}
    >
      404 Page Not Found
    </Container>
  );
};

export default NotFound;
