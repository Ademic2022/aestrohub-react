import React from "react";
import GalaxyBackground from "./utils/GalaxyBackground";
import ResponsiveNavBar from "./components/common/Navbar";
import { Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";
import {
  Home,
  Services,
  ContactUs,
  AboutUs,
  Launchpad,
  Blog,
  NotFound,
} from "./pages";

const App = () => {
  return (
    <React.Fragment>
      <GalaxyBackground />
      <ResponsiveNavBar />
      <Container component="main" maxWidth="xl" sx={{ p: 3 }}>
        <Box
          className="content"
          style={{ color: "#fff", marginTop: "80px", overflow: "hidden" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/launchpad" element={<Launchpad />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
