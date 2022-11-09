import React from "react";
import imgsub from "../assets/images/img01.png";

const Subtitle = () => {
  return (
    <div className="section1">
      <p className="psubtitle">Chez vous, partout et ailleurs</p>
      <img className="imgsubtitle" src={imgsub} alt="image_sous_titre" />
      <div className="overlay"></div>
    </div>
  );
};

export default Subtitle;
