import React from "react";
import { Box, Button, Typography, CardMedia, Grid, Chip } from "@mui/material";
import Services from "./Services";
import { services } from "../data/services";

const Section3 = () => {
  return (
    <React.Fragment>
      <Box textAlign="center" width={{ xs: "100%", md: "65%" }} mt={15} mb={5}>
        <Chip
          sx={{
            bgcolor: "#fff",
            fontSize: "18px",
            fontFamily: "Outfit",
            color: "#0EAD69",
            padding: "5px",
            mb: "20px",
          }}
          icon={
            <CardMedia
              component="img"
              image="/icons/Saturn.png"
              sx={{
                width: 24,
                height: 24,
                objectFit: "contain",
              }}
              alt="icon"
            />
          }
          label="What we do"
        />
        <Typography
          mb={3}
          variant="h2"
          sx={{ fontSize: { xs: "56px", md: "56px" } }}
        >
          Our Services
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          height: "4270px",
          borderRadius: "40px",
        }}
      >
        {services.map((service)=> (
          <Services />
        ))}
      </Box>
    </React.Fragment>
  );
};

export default Section3;
