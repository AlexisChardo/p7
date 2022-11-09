import React from "react";
import image from "../assets/images/aboutimg.png";

const AboutSubtitle = () => {
  return (
    <div className="banner">
      <img className="img" src={image} alt="image_sous_titre" />
      <div className="banneroverlay"></div>
    </div>
  );
};

export default AboutSubtitle;
