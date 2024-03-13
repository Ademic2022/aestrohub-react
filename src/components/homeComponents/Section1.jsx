import React from "react";
import { Box, Typography, CardMedia, Button } from "@mui/material";

const Section1 = () => {
  return (
    <React.Fragment>
      <Box
        textAlign="center"
        width={{ xs: "100%", md: "65%" }}
        height="281px"
        sx={{ margin: "0 auto", textAlign: "center" }}
      >
        <Typography
          mb={3}
          variant="h2"
          sx={{ fontSize: { xs: "56px", md: "80px" } }}
        >
          AestroHub
        </Typography>

        <Typography
          gutterBottom
          mb={4}
          variant="body1"
          sx={{ px: { md: "90px" } }}
        >
          We're not just an agency, we're a launchpad. A cross-functional,
          all-in-one service provider for everything you need to propel your
          Web3 project to the stars.
        </Typography>
        <Button
          variant="outlined"
          tabIndex={-1}
          startIcon={
            <CardMedia
              component="img"
              image="/icons/rocket.png"
              sx={{ width: 24, height: 24 }}
              alt="icon"
            />
          }
        >
          <Typography variant="body2">Explore our station</Typography>
        </Button>
      </Box>

      <Box
        sx={{
          display: { md: "block", xs: "none" },
          margin: "0 auto",
          textAlign: "center",
          width: "630.41px",
        }}
      >
        <CardMedia
          component="img"
          image="/images/image1.jpeg"
          alt="Logo"
          sx={{
            width: "100%",
            height: "631.95px",
            my: 0,
            transform: "rotate(180deg)",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* mobile display */}
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        <CardMedia
          component="img"
          image="/images/image10.png"
          alt="Logo"
          sx={{
            my: 5,
            objectFit: "cover",
          }}
        />
      </Box>
    </React.Fragment>
  );
};

export default Section1;
