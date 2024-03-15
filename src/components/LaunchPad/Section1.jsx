import React from "react";
import PageSection from "../Common/PageSection";

const Section1 = () => {
  const sectionDetails = {
    title: "AestroPad",
    subtitle:
      " Making liquidity and funding accessible to founders and project owners. Embrace a dynamic system of funding across different channels.  ",
    btnText: "Coming Soon",
    img: "images/launch.png",
    config: {
      img: {
        height: "400px",
        my: 3,
        objectFit: "cover",
      },
      btn: {
        width: "200px",
        height: "50px",
      },
    },
  };
  return (
    <React.Fragment>
      <PageSection sectionDetails={sectionDetails} />
    </React.Fragment>
  );
};

export default Section1;
