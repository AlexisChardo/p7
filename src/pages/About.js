import React from "react";
// import AboutDown from "../components/AboutDown";
import AboutSubtitle from "../components/AboutSubtitle";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Header from "../components/Header";
import aboutData from "../AboutData";

const About = () => {
  const content = (title) => {
    switch (title) {
      case "fiability":
        return aboutData.fiability;
      case "respect":
        return aboutData.respect;
      case "service":
        return aboutData.service;
      case "security":
        return aboutData.security;
      default:
        console.log("default");
        break;
    }
  };
  return (
    <div>
      <main>
        <AboutSubtitle />
        <div className="about__drop">
          <Collapse title="Fiabilité" content={content("fiability")} />
          <Collapse title="Respect" content={content("respect")} />
          <Collapse title="Service" content={content("service")} />
          <Collapse title="Sécurité" content={content("security")} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
