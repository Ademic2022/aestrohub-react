import React from "react";
import { Box, Button, Typography, CardMedia, Grid, Chip } from "@mui/material";

const Services = ({ service }) => {
  return (
    <Box
      sx={{
        display: "flex",
        p: "25px",
        height: "650px",
        border: "1px solid #5c5c5c",
        borderRadius: "40px",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${service.bgImage})`,
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
                label={service.id}
              />
              <Typography
                mb={3}
                textAlign="left"
                variant="h2"
                sx={{
                  fontSize: { xs: "56px", md: "56px" },
                  fontWeight: 600,
                }}
              >
                {service.title}
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
                {service.description}
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
          <Grid direction="column" justifyContent="center" alignItems="center">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "459px",
                height: "550px",
                p: "25px",
                bgcolor: "#fff",
                borderRadius: "20px",
              }}
            >
              <CardMedia
                component="img"
                image="/images/image2.jpeg"
                sx={{
                  width: "407px",
                  height: "100%",
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
