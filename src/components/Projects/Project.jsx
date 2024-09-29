import React, { useState } from "react";
import "./Projects.scss";
import down from "../../assets/icons/down.png";
import up from "../../assets/icons/up.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Project = ({ project }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showStack, setShowStack] = useState(false);

  const handleDescriptionClick = () => {
    setShowDescription(!showDescription);
  };
  const handleFeatureClick = () => {
    setShowFeatures(!showFeatures);
  };
  const handleStackClick = () => {
    setShowStack(!showStack);
  };

  return (
    <section className="project">
      <h1 className="project__title">{project.title}</h1>

      <h2 className="project__headline">Demo</h2>
      {project.git && (
        <a className="project__git" href={project.git}>
          GitHub
        </a>
      )}
      <div>
        {(project.src && (
          <div className="project__video">
            <iframe
              src={project.src}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
              allowFullScreen
              className="project__demo"
            ></iframe>
          </div>
        )) ||
          (project.images && (
            <div className="project__image">
              <Carousel>
                {project.images.map((image) => (
                  <div>
                    <img src={image} alt="project image" />
                  </div>
                ))}
              </Carousel>
            </div>
          ))}
      </div>

      <button className="project__section" onClick={handleDescriptionClick}>
        <h2 className="project__headline">Description</h2>
        <div
          className={
            showDescription ? "project__button--hide" : "project__button"
          }
        >
          <img className="icon" src={down} alt="down arrow" />
        </div>
        <div
          className={
            showDescription ? "project__button" : "project__button--hide"
          }
        >
          <img className="icon" src={up} alt="up arrow" />
        </div>
      </button>
      <p
        className={
          showDescription
            ? "project__description"
            : "project__description--hide"
        }
      >
        {project.description}
      </p>
      <button className="project__section" onClick={handleFeatureClick}>
        <h2 className="project__headline">Key Features</h2>
        <div
          className={showFeatures ? "project__button--hide" : "project__button"}
        >
          <img className="icon" src={down} alt="down arrow" />
        </div>
        <div
          className={showFeatures ? "project__button" : "project__button--hide"}
        >
          <img className="icon" src={up} alt="up arrow" />
        </div>
      </button>
      <ul className={showFeatures ? "project__list" : "project__list--hide"}>
        {project.features.map((feature, index) => (
          <li key={index} className="project__list-item">
            {feature}
          </li>
        ))}
      </ul>
      <button className="project__section" onClick={handleStackClick}>
        <h2 className="project__headline">Tech Stack </h2>
        <div
          className={showStack ? "project__button--hide" : "project__button"}
        >
          <img className="icon" src={down} alt="down arrow" />
        </div>
        <div
          className={showStack ? "project__button" : "project__button--hide"}
        >
          <img className="icon" src={up} alt="up arrow" />
        </div>
      </button>
      <ul className={showStack ? "tech-list" : "tech-list--hide"}>
        {project.techStack.map((tech, index) => (
          <li key={index} className="tech-list__item">
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
};
