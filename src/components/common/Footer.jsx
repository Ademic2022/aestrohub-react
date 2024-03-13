import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import Services from "./footerComponents/Services";
import Products from "./footerComponents/Products";
import Socials from "./footerComponents/Socials";

const Footer = () => {
  return (
    <React.Fragment>
      <Container maxWidth="xl" sx={{ p: 3 }}>
        <Box
          sx={{
            position: "relative",
            height: "1345px",
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "flex-start",
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
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ borderRadius: "16px" }}
                  >
                    Subscribe
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
