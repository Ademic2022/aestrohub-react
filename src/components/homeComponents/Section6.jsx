import React from "react";
import {
  Box,
  Button,
  Typography,
  CardActions,
  CardMedia,
  Chip,
  CardContent,
  Card,
} from "@mui/material";
import { alpha } from "@mui/system";
import { FaUserTie } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import { services } from "../data/services";
import { responsive } from "../data/CarouselResponsive";

const Section6 = () => {
  return (
    <React.Fragment>
      <Box
        width={{ xs: "100%", md: "85%" }}
        mt={15}
        sx={{ margin: "100px auto 5px", textAlign: "center" }}
        mb={5}
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
          label="AestroBlog"
        />
        <Typography
          mb={3}
          variant="h2"
          sx={{ fontSize: { xs: "32px", md: "56px", textAlign: "left" } }}
        >
          Read our latest Articles
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "1280px", mx: "auto" }}>
        <Carousel
          responsive={responsive}
          infinite={true}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={5000}
        >
          {services.map((service) => (
            <Card
              sx={{
                m: 1,
                p: 1,
                bgcolor: alpha("#fff", 0.1),
                border: "1px solid #5c5c5c",
              }}
            >
              <CardMedia
                sx={{ height: "318px" }}
                image="/images/image3.jpeg"
                title="green iguana"
              />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <FaUserTie />
                    <Typography pl={1}>Esther Adams</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <FaCalendarAlt />
                    <Typography pl={1}>12 sep 2021</Typography>
                  </Box>
                </Box>
                <Typography
                  pt={3}
                  textAlign="left"
                  gutterBottom
                  variant="body"
                  component="div"
                >
                  Centralized Exchanges
                </Typography>
                <Typography variant="body2" textAlign="left" color="#D0D0D0">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="filled" color="#0EAD69">
                  Read More
                </Button>
              </CardActions>
            </Card>
          ))}
        </Carousel>
      </Box>
    </React.Fragment>
  );
};

export default Section6;
