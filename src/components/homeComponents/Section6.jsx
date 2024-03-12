import React from "react";
import {
  Box,
  Button,
  Typography,
  CardActions,
  CardMedia,
  Chip,
  Grid,
  CardContent,
  Card,
} from "@mui/material";
import { alpha } from "@mui/system";

import Carousel from "react-multi-carousel";
import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

import { projects } from "../data/projects";
import { responsive } from "../data/CarouselResponsive";

const Section6 = () => {
  return (
    <React.Fragment>
      <Box
        width={{ xs: "100%", md: "65%", margin: "0 auto", textAlign: "center" }}
        mt={15}
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
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </Carousel>
      </Box>
    </React.Fragment>
  );
};

export default Section6;
