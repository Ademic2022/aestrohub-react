import React from "react";
import { Box } from "@mui/material";
import Section1 from "../components/blogComponents/Section1";
import FullWidthSlider from "../components/blogComponents/FullWidthSlider";
import ArticleSlider from "../components/common/ArticleSlider";
import { articles, featProps, prevProps } from "../data/articles";
import Section7 from "../components/homeComponents/Section7";

const Blog = () => {
  return (
    <React.Fragment>
      <Box mt={5}>
        <Section1 />
        <FullWidthSlider />
        <ArticleSlider props={prevProps} articles={articles} />
        <ArticleSlider props={featProps} articles={articles} />
        <Section7 />
      </Box>
    </React.Fragment>
  );
};

export default Blog;
