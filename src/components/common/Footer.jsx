import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  CardMedia,
} from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import Services from "./footerComponents/Services";
import Products from "./footerComponents/Products";
import Socials from "./footerComponents/Socials";
import { emailValidator } from "../../utils/formValidator";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <Container maxWidth="xl" sx={{ p: 3 }}>
        <Box
          sx={{
            position: "relative",
            // height: "1345px",
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "flex-start",
              // zIndex: 99999,
            }}
          >
            <Services />
            <Products />
            <Socials />
          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={4}
            mt={15}
            p={2}
            width={{ xs: "max-width", md: "1280px" }}
            sx={{
              height: "256px",

              border: "1px solid #5c5c5c",
              borderRadius: "24px",
              overflowX: "auto",
              margin: "45px auto",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: 22, md: 36 },
                      color: "grey.lightActive",
                    }}
                  >
                    Read about the latest articles around web3 ecosystem
                  </Typography>
                </Grid>
                <Grid
                  item
                  component="form"
                  onSubmit={handleSubmit(onSubmit)}
                  xs={12}
                  md={6}
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  gap={2}
                >
                  <TextField
                    sx={{
                      width: { xs: "100%", md: "70%" },
                      border: "1px solid #5c5c5c",
                      borderRadius: "16px",
                    }}
                    {...register("email", emailValidator)}
                    error={!!errors.email}
                    helperText={!!errors.email ? errors.email.message : ""}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    sx={{ borderRadius: "16px" }}
                  >
                    Subscribe
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <CardMedia
            sx={{
              position: "absolute",
              top: { xs: 600, md: 0 },
              left: { xs: "20px", md: "726px" },
              height: "1040px",
              objectFit: "cover",
              width: { xs: "300px", md: "580px" },
              pointerEvents: "none",
            }}
            image="/images/rocket.png"
            title="Article Image"
          />

          <CardMedia
            sx={{
              position: "absolute",
              bottom: { xs: 100, md: 100 },
              height: { xs: "300px", md: "500px" },
              width: { xs: "300px", md: "500px" },
              borderRadius: "16px",
              mt: 25,
            }}
            image="/images/logo.png"
            title="Article Image"
          />

          <CardMedia
            sx={{ height: "318px", borderRadius: "16px", mt: 25 }}
            image="/images/Smoke.png"
            title="Article Image"
          />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
