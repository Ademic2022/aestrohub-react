import React from "react";
import { Box, Typography, CardMedia, Chip } from "@mui/material";
import { contacts } from "../../../data/footer";
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
          color: "#3772FF",
          padding: "5px 10px",
          mb: "20px",
        }}
        label="Contacts"
      />
      {contacts.map((contact) => (
        <Box
          key={contact.id}
          mb={3}
          display="inline-flex"
          sx={{ cursor: "pointer" }}
        >
          <Box sx={{ fontSize: 30, mr: 1 }}>{socialIcons(contact.social)}</Box>
          <Typography
            variant="body"
            sx={{
              fontSize: { xs: "20px", md: "28px" },
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
