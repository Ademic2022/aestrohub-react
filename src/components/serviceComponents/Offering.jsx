import React from "react";
import {
  Box,
  Typography,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Chip,
  Grid,
  Button,
} from "@mui/material";

const Offering = () => {
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
            color: "#FF006E",
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
          label="What we Offer"
        />
        <Typography
          mb={3}
          variant="h2"
          sx={{ fontSize: { xs: "32px", md: "56px" } }}
        >
          Our Offerings
        </Typography>
      </Box>
      <Box width={{ md: 1280 }} sx={{ margin: "0 auto", textAlign: "center" }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            justifyContent="center"
            alignItems="center"
            pr={{ md: 1, xs: 0 }}
            pb={{ md: 0, xs: 2 }}
          >
            <Box
              sx={{
                backgroundImage: `url("/images/image4.png")`,
                filter: "grayscale(100%)",
                backgroundSize: "cover",
                height: "520px",
                borderRadius: "20px",
                border: "1px solid #5c5c5c",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  top: "20px",
                  width: "520px",
                  display: "flex",
                  flexDirection: "column",
                  padding: { xs: "20px", md: 0 },
                }}
              >
                <Typography
                  mb={3}
                  textAlign="left"
                  variant="h2"
                  sx={{
                    fontSize: { xs: "30px", md: "56px" },
                    fontWeight: 600,
                  }}
                >
                  One Man Service
                </Typography>
                <Typography
                  mb={2}
                  variant="body2"
                  textAlign="left"
                  sx={{
                    fontSize: { xs: "14px", md: "22px" },
                    fontWeight: 400,
                  }}
                >
                  We offer one-man and one-time service for your project . We
                  monitor and ensure full delivery of the service.Get a single
                  professionals to work on your specific needs.
                </Typography>
                <Box
                  component="ul"
                  mb={2}
                  sx={{
                    textAlign: "left",
                    marginLeft: "35px",
                    fontSize: { xs: "14px", md: "20px" },
                  }}
                >
                  <Box component="li">One-man service for a specific need</Box>
                  <Box component="li">
                    Book a re-occurring service with the professional
                  </Box>
                  <Box component="li">
                    Low cost, pay when you need the service
                  </Box>
                  <Box component="li">
                    Full take-over of the talents to work on your project
                  </Box>
                </Box>

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
                  <Typography variant="body2">Hire a Professional</Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            justifyContent="center"
            alignItems="center"
            pl={{ md: 1, xs: 0 }}
          >
            <Box
              sx={{
                backgroundImage: `url("/images/image4.png")`,
                filter: "grayscale(100%)",
                backgroundSize: "cover",
                height: "520px",
                borderRadius: "20px",
                border: "1px solid #5c5c5c",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  top: "20px",
                  width: "520px",
                  display: "flex",
                  flexDirection: "column",
                  padding: { xs: "20px", md: 0 },
                }}
              >
                <Typography
                  mb={3}
                  textAlign="left"
                  variant="h2"
                  sx={{
                    fontSize: { xs: "32px", md: "56px" },
                    fontWeight: 600,
                  }}
                >
                  Team Service
                </Typography>
                <Typography
                  mb={2}
                  variant="body2"
                  textAlign="left"
                  sx={{
                    fontSize: { xs: "14px", md: "22px" },
                    fontWeight: 400,
                  }}
                >
                  We offer cross-functional skills handled by the entire team to
                  work on your project. Our entire team across different
                  categories take over every aspect of your project.
                </Typography>

                <Box
                  component="ul"
                  mb={2}
                  sx={{
                    textAlign: "left",
                    marginLeft: "35px",
                    fontSize: { xs: "14px", md: "20px" },
                  }}
                >
                  <Box component="li">
                    Team service with multiple skills required
                  </Box>
                  <Box component="li">
                    Reduce the cost of hiring individual service providers
                  </Box>
                  <Box component="li">
                    Efficient delivery of service with our cross-functional team
                  </Box>
                  <Box component="li">
                    Handling the full aspect of your projects
                  </Box>
                </Box>
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
                  <Typography variant="body2">Hire the team</Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Offering;
