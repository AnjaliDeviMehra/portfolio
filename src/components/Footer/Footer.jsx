import React from "react";
import linkedin from "../../assets/icons/linkedin.png";
import github from "../../assets/icons/github.png";
import email from "../../assets/icons/email.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <a className="link" href="mailto:anjalidevimehra@gmail.com">
        <img src={email} alt="email icon" className="link__icon--email" />
      </a>

      <a className="link" href="https://www.linkedin.com/in/anjalidevi1999/">
        <img src={linkedin} alt="linkedin icon" className="link__icon" />
      </a>

      <a className="link" href="https://github.com/AnjaliDeviMehra">
        <img src={github} alt="github icon" className="link__icon" />
      </a>
    </div>
  );
};

export default Footer;
