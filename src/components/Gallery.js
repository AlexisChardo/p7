import React from "react";
// import image from "../assets/images/img01.png";

const Gallery = ({ image, title }) => {
  return (
    <div className="thumb">
      <img src={image} alt="" className="thumb__img" />
      <div className="thumb__overlay"></div>
      <h2 className="thumb__title">{title}</h2>
    </div>
  );
};

export default Gallery;
