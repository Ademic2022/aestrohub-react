import React from "react";
import { Box, Typography, CardMedia, Chip } from "@mui/material";
import { services } from "../../data/services";

const Services = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
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
      {services.map((service) => (
        <Typography
          key={service.id}
          mb={3}
          variant="body"
          sx={{
            fontSize: { xs: "32px", md: "28px" },
            textAlign: "left",
            color: "grey.lightActive",
          }}
        >
          {service.title}
        </Typography>
      ))}
    </Box>
  );
};

export default Services;
