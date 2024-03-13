import React from "react";
import { Box, Typography, CardMedia, Chip } from "@mui/material";
import { contacts } from "../../data/footer";
import { MdOutlineMail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Socials = () => {
  const socialIcons = (item) => {
    switch (item) {
      case "Email":
        return <MdOutlineMail />;
      case "Discord":
        return <FaDiscord />;
      case "LinkedIn":
        return <FaLinkedin />;
      case "Twitter":
        return <FaXTwitter />;
      case "Telegram":
        return <FaTelegramPlane />;
      default:
        return null;
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
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
        label="Our Products"
      />
      {contacts.map((contact) => (
        <Box mb={3} display="inline-flex">
          <Box sx={{ fontSize: 30, mr: 1 }}>{socialIcons(contact.social)}</Box>
          <Typography
            key={contact.id}
            variant="body"
            sx={{
              fontSize: { xs: "32px", md: "28px" },
              textAlign: "left",
              color: "grey.lightActive",
            }}
          >
            {contact.social}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Socials;
