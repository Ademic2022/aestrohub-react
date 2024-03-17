import React from "react";
import { useParams } from "react-router-dom";
import BlogDetailsChild from "../components/blogComponents/blogDetails/BlogDetailsChild";
import ArticleSlider from "../components/common/ArticleSlider";
import { articles, prevProps } from "../data/articles";
import Section7 from "../components/homeComponents/Section7";

const BlogDetails = () => {
  let { id } = useParams();
  return (
    <React.Fragment>
      <BlogDetailsChild />
      <ArticleSlider props={prevProps} articles={articles} />
      <Section7 />
    </React.Fragment>
  );
};

export default BlogDetails;
