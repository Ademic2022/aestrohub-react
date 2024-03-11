import React from "react";
import { Box, Typography, CardMedia, Grid, Chip } from "@mui/material";

const Section3 = () => {
  return (
    <React.Fragment>
      <Box
        textAlign="center"
        width={{ xs: "100%", md: "65%" }}
        height="281px"
        mt={15}
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
          //   gap: "80px",
          width: "1280",
          height: "4270px",
          //   border: "1px solid #5c5c5c",
          borderRadius: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            p: "25px",
            width: "1280",
            height: "790px",
            border: "1px solid #5c5c5c",
            borderRadius: "40px",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url("/images/image6.jpeg")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "1233px",
              height: "736px",
              borderRadius: "40px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                {/* <Item>xs=8</Item> */}
              </Grid>
              <Grid item xs={6}>
                {/* <Item>xs=4</Item> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Section3;
