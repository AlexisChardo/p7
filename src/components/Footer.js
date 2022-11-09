import React from "react";
import logo from "../assets/images/logofooter.png";

const Footer = () => {
  return (
    <footer>
      <img className="imgfooter" src={logo} alt="logo" />
      <p className="text_footer">© 2022 Kasa.All rights reserved</p>
    </footer>
  );
};

export default Footer;
