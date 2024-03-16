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
  BlogDetails,
  NotFound,
} from "./pages";
import Footer from "./components/common/Footer";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <React.Fragment>
      <ScrollToTop />
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
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/launchpad" element={<Launchpad />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default App;
