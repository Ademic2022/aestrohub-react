import React from "react";
import PageSection from "../Common/PageSection";

const Section1 = () => {
  const sectionDetails = {
    title: "About Us",
    subtitle:
      "Learn about AestroHub mission and vision. How our services are tailored to align Web3 founders, service providers, investors, and communities together.",
    btnText: "Make a Proposal",
    img: "images/g10.png",
    config: {
      img: {
        my: 3,
        height: "400px",
        objectFit: "contain",
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
