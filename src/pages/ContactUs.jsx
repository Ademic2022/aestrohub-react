import React from "react";
import {
  Box,
  CardMedia,
  Typography,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import {
  nameValidator,
  emailValidator,
  textFieldValidator,
  numberValidator,
} from "../utils/formValidator";
import { alpha } from "@mui/material";
import { useForm } from "react-hook-form";
import Section7 from "../components/homeComponents/Section7";

const ContactUs = () => {
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);

    setLoading(false);
    reset()
  };
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
              fontSize: { xs: "18px", md: "22px" },
            }}
          >
            Kindly provide us a few details below and we will be in touch
            shortly.. or schedule a call with us on{" "}
            <Box component="span" color="#B4811C">
              Calendly
            </Box>
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "0 auto",
            bgcolor: alpha("#fff", 0.1),
            borderRadius: "16px",
            border: "1px solid #5c5c5c",
            width: { xs: "100%", md: "85%" },
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              "& .MuiInputBase-root": { color: "#fff" },
              "& .MuiFormLabel-root": { color: "#fff" },
              "& .MuiInput-underline:before": {
                borderBottom: "1px solid #fff",
              },
              p: { xs: 2, md: 10 },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography
              mb={5}
              sx={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "28px",
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Contact Form
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <TextField
                  id="standard-basic"
                  label="Your Name"
                  variant="standard"
                  {...register("name", nameValidator)}
                  error={!!errors.name}
                  helperText={!!errors.name ? errors.name.message : ""}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="standard-basic"
                  label="Your Email"
                  {...register("email", emailValidator)}
                  error={!!errors.email}
                  helperText={!!errors.email ? errors.email.message : ""}
                  variant="standard"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="standard-basic"
                  label="Your Company"
                  {...register("companyName", nameValidator)}
                  error={!!errors.companyName}
                  helperText={
                    !!errors.companyName ? errors.companyName.message : ""
                  }
                  variant="standard"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="standard-basic"
                  label="Your Budget ($)"
                  {...register("budget", numberValidator)}
                  error={!!errors.budget}
                  helperText={!!errors.budget ? errors.budget.message : ""}
                  variant="standard"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="filled-textarea"
                  label="Tell us About Your Company"
                  {...register("company", textFieldValidator)}
                  error={!!errors.company}
                  helperText={!!errors.company ? errors.company.message : ""}
                  placeholder="Placeholder"
                  multiline
                  required
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  tabIndex={-1}
                  type="submit"
                  sx={{ border: "1px solid #5c5c5c" }}
                  disabled={loading ? true : false}
                  startIcon={
                    <CardMedia
                      component="img"
                      image="/icons/rocket.png"
                      sx={{ width: 24, height: 24 }}
                      alt="icon"
                    />
                  }
                >
                  <Typography variant="body2">
                    {loading ? "Sending message..." : "Send us a Message"}
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box mt={15}>
          <Section7 />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ContactUs;
