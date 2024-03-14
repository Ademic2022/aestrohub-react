import React from "react";
import { Box, Typography, CardMedia, Button } from "@mui/material";

const PageSection = ({ sectionDetails }) => {
  const { title, subtitle, btnText, img, config } = sectionDetails;
  console.log(config.img);
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
          sx={{ fontSize: { xs: "46px", md: "80px" } }}
        >
          {title}
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
          {subtitle}
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
          <Typography variant="body2">{btnText}</Typography>
        </Button>
      </Box>

      <Box
        sx={{
          display: { md: "block", xs: "none" },
          margin: "0 auto",
          textAlign: "center",
          // width: "630.41px",
          width: "100%",
        }}
      >
        <CardMedia component="img" image={img} alt="Logo" sx={config.img} />
      </Box>

      {/* mobile display */}
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        <CardMedia
          component="img"
          image={img}
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

export default PageSection;
