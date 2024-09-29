import React from "react";
import "./About.scss";
import hello from "../../assets/icons/wave.svg";
import myImage from "../../assets/image/anjali.jpg";

export const About = () => {
  return (
    <>
      <div className="hero">
        <section className="hero__section-one">
          <p className="hero__hello">Hello</p>
          <img src={hello} alt="" className="hero__icon" />

          <h1 className="hero__intro">
            I'm <span className="hero__name">Anjali Devi</span>
          </h1>
          <p className="hero__tagline">
            Passionate developer skilled in React, JavaScript, HTML, CSS, SASS,
            Express.js, Node.js and MySQL , dedicated to turning ideas into
            elegant, functional, and user-friendly applications.
          </p>
        </section>

        <section className="hero__section-two">
          <img src={myImage} alt="photo" className="hero__photo" />
        </section>
      </div>

      <div className="story">
        <h2 className="story__heading">My Story</h2>
        <p className="story__context">
          From a young age, I’ve always been fascinated by the inner workings of
          computers and how applications power the digital world around us. This
          curiosity led me to pursue a two-year Computer Programming Diploma at
          Lambton College, where I got my first real introduction to
          programming. During that time, I dove into the fundamentals of HTML,
          CSS, JavaScript, Java, and Python. This experience not only helped me
          understand programming but also sparked my passion for building
          seamless user experiences.{" "}
        </p>
        <p className="story__context">
          My journey took a big leap forward during my internship at Humming
          Payment Technologies. Working alongside a skilled team of developers,
          I applied my knowledge to real-world projects. It was here that I was
          introduced to React, and it opened up a whole new way of thinking
          about web development. Unfortunately, due to immigration constraints
          as an international student, I had to pause my pursuit of software
          development and leave the internship. Navigating these challenges
          wasn’t easy, but it taught me resilience and adaptability—qualities
          that define me today.
        </p>
        <p className="story__context">
          While waiting to resolve my immigration status, I took the next
          available opportunity and began working as a Technical Support
          Advisor. For nearly two years, I helped customers resolve complex
          technical issues with phones and computers, sharpening my
          problem-solving abilities in fast-paced environments. This role helped
          me develop soft skills that I now consider invaluable—active
          listening, collaboration, effective communication, and most
          importantly, a user-first mindset. Understanding technology from the
          customer’s perspective allows me to create more intuitive and
          efficient solutions in development.
        </p>
        <p className="story__context">
          Once I became a permanent resident, I was determined to return to my
          passion. I enrolled in BrainStation’s Software Engineering Bootcamp—a
          rigorous 12-week program designed to bridge the gap between theory and
          practice. Through a mix of in-class learning, projects, and
          hackathons, I gained proficiency in a variety of technical skills:
          HTML, CSS, JavaScript, Node.js, Express.js, and MySQL. Working on
          projects like a project management app and a collaborative real-time
          document editor solidified my understanding of full-stack development
          and allowed me to create meaningful and functional softwares.
        </p>
        <p className="story__context">
          Today, I am more driven than ever to leverage my technical skills and
          my deep customer service background to build user-centric, reliable,
          and scalable web applications. I bring with me not only hands-on
          technical expertise but also the interpersonal and problem-solving
          skills that come from years of working closely with end users. I’m
          ready and excited to kickstart my career as a full-stack developer,
          where I can continue learning and growing while making an impact.
        </p>
      </div>
    </>
  );
};
