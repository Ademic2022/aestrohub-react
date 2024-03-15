import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ContactUs = () => {
  return (
    <React.Fragment>
      <Box mt={5}>
        <Box
          textAlign="center"
          width={{ xs: "100%", md: "65%" }}
          height="281px"
          sx={{ margin: "0 auto", textAlign: "center" }}
        >
          <Typography
            mb={3}
            variant="h2"
            sx={{ fontSize: { xs: "46px", md: "80px" } }}
          >
            Contact Us
          </Typography>

          <Typography
            gutterBottom
            mb={4}
            variant="body1"
            sx={{
              px: { md: "90px" },
              textAlign: "justify",
              fontSize: { xs: "18px", md: "22px" },
            }}
          >
            Kindly provide us a few details below and we will be in touch
            shortly.. or schedule a call with us on <Box component="span" color="#B4811C">Calendly</Box>
          </Typography>
          <Typography>Contact Form</Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ContactUs;
