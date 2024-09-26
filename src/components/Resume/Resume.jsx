import React from "react";
import "./Resume.scss";
import { Document, Page } from "react-pdf";

import resume from "../../assets/image/resume.jpg";

const Resume = () => {
  return (
    <div className="resume">
      <h1 className="resume__heading">Resume</h1>
      <a
        href="/document.pdf"
        download="Anjali_Devi_Resume.pdf"
        className="resume__download"
      >
        Download My Resume
      </a>
      <div className="resume__image-container">
        <img className="resume__image" src={resume} alt="" />
      </div>
    </div>
  );
};

export default Resume;
