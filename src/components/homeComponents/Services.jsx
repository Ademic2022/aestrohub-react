import React from "react";
import { Box, Button, Typography, CardMedia, Grid, Chip } from "@mui/material";

const Services = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        // flexDirection: "column",
        p: "25px",
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
          borderRadius: "40px",
          border: "1.5px solid #5c5c5c",
        }}
      >
        <Grid
          container
          spacing={2}
          m={0}
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Grid item xs={6} container>
            <Box
              sx={{
                width: "520px",
                // pl: "40px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Chip
                sx={{
                  bgcolor: "#fff",
                  fontSize: "18px",
                  fontFamily: "Outfit",
                  color: "#0EAD69",
                  width: 45,
                  mb: "20px",
                }}
                label="01"
              />
              <Typography
                mb={3}
                textAlign="left"
                variant="h2"
                // px={6}
                sx={{
                  fontSize: { xs: "56px", md: "56px" },
                  fontWeight: 600,
                }}
              >
                Strategy & Consulting
              </Typography>
              <Typography
                mb={3}
                variant="body2"
                textAlign="justify"
                sx={{
                  fontSize: { xs: "56px", md: "22px" },
                  fontWeight: 400,
                }}
              >
                Navigating the uncharted waters of Web3 can be daunting. You
                need a clear roadmap to guide them through complex challenges,
                capitalize on emerging opportunities, and build sustainable
                success.
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
          </Grid>
          <Grid
            item
            direction="column"
            justifyContent="center"
            alignItems="center"
            // xs={12}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "489px",
                height: "613px",
                bgcolor: "#fff",
                borderRadius: "20px",
              }}
            >
              <CardMedia
                component="img"
                image="/images/image2.jpeg"
                sx={{
                  width: "437px",
                  height: "562px",
                  borderRadius: "16px",
                }}
                alt="icon"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
