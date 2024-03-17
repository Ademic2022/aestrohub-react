import React from "react";
import { Button, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CustomButton = ({ icon, btnText, to }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <Button
        variant="outlined"
        tabIndex={-1}
        component={Link}
        to={to}
        startIcon={
          <CardMedia
            component="img"
            image={icon ? icon : "/icons/rocket.png"}
            sx={{ width: 24, height: 24 }}
            alt="icon"
          />
        }
      >
        <Typography variant="body2">{btnText}</Typography>
      </Button>
    </motion.div>
  );
};

export default CustomButton;
