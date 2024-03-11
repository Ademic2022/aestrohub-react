import React from "react";
import { Box, Typography, CardMedia, Button } from "@mui/material";

const Section1 = () => {
  return (
    <React.Fragment>
      <Box textAlign="center" width="65%" height="281px">
        <Typography mb={3} variant="h2">
          AestroHub
        </Typography>

        <Typography gutterBottom mb={4} variant="body1" sx={{ px: "90px" }}>
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
    </React.Fragment>
  );
};

export default Section1;
