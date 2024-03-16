import React from 'react'
import { Box } from '@mui/material';
import Section1 from '../components/blogComponents/Section1';
import FullWidthSlider from '../components/blogComponents/FullWidthSlider';

const Blog = () => {
  return (
    <React.Fragment>
      <Box mt={5}>
        <Section1 />
        <FullWidthSlider />
      </Box>
    </React.Fragment>
  );
}

export default Blog
