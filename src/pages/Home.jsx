import React from "react";
import { PiRocketLaunchLight } from "react-icons/pi";
import { Button, Box, Typography, CardMedia } from "@mui/material";

const Home = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="fit-content"
    >
      <Box textAlign="center" width="721px" height="281px">
        <Typography variant="h2" sx={{ fontWeight: "700" }}>
          AestroHub
        </Typography>
        <Typography gutterBottom variant="body1" sx={{ px: "90px" }}>
          We're not just an agency, we're a launchpad. A cross-functional,
          all-in-one service provider for everything you need to propel your
          Web3 project to the stars.
        </Typography>
        <Button
          variant="outlined"
          tabIndex={-1}
          sx={{ borderRadius: "24px", marginY: 2, height:"47px" }}
          startIcon={PiRocketLaunchLight}
        >
          Explore our station {PiRocketLaunchLight}
        </Button>
      </Box>
      <Box>
        <CardMedia
          component="img"
          image="/images/image1.jpeg"
          alt="Logo"
          sx={{
            width: "630.41px",
            height: "631.95px",
            my: 0,
            transform: "rotate(180deg)",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
