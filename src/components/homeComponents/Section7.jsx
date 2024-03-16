import React from "react";
import { Box, Typography, CardMedia, Button } from "@mui/material";

const Section7 = ({ title, bgcolor }) => {
  return (
    <React.Fragment>
      <Box
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
        width={{ xs: "max-width", md: "1280px" }}
        sx={{
          height: "160px",
          bgcolor: bgcolor? bgcolor : "#FF006E",
          borderRadius: "24px",
          overflowX: "auto",
          margin: "45px auto",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <CardMedia
            component="img"
            image="icons/Mars.png"
            alt="Logo"
            sx={{
              display: { xs: "none", md: "block" },
              width: "130px",
              pl: "30px",
            }}
          />

          <Typography
            variant="h2"
            width={{ xs: "100%", md: "60%" }}
            sx={{ fontSize: { xs: 22, md: 44 } }}
          >
            {title ? title : ".... Made by you, delivered by us ...."}
          </Typography>
          <CardMedia
            component="img"
            image="icons/Saturn.png"
            alt="Logo"
            sx={{
              display: { xs: "none", md: "block" },
              width: "150px",
              pr: "30px",
            }}
          />
        </Box>
      </Box>
      <Button
        variant="outlined"
        tabIndex={-1}
        sx={{ mb: 5 }}
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
    </React.Fragment>
  );
};

export default Section7;
