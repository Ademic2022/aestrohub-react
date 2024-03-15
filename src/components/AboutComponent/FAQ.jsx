import React from "react";
import { Box, Typography, Chip, CardMedia } from "@mui/material";
import AccordionExpand from "./Accordion";

const FAQ = () => {
  return (
    <React.Fragment>
      <Box
        width={{ md: 1280 }}
        sx={{ margin: "100px auto 5px", textAlign: "center" }}
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
          label="FAQ"
        />
        <Typography
          mb={3}
          variant="h2"
          sx={{ fontSize: { xs: "32px", md: "56px" } }}
        >
          Frequently Asked Questions
        </Typography>
      </Box>
      <AccordionExpand />
    </React.Fragment>
  );
};

export default FAQ;
