import React, { useState } from "react";
import "./Projects.scss";
import down from "../../assets/icons/down.png";
import up from "../../assets/icons/up.png";
import { Project } from "./Project";
import openeditor from "../../assets/videos/openeditor.mp4";
import ms1 from "../../assets/image/ms1.png";
import ms2 from "../../assets/image/ms2.png";
import ms3 from "../../assets/image/ms3.png";
import ms4 from "../../assets/image/ms4.png";
import ms5 from "../../assets/image/ms5.png";
import ms6 from "../../assets/image/ms6.png";
import ms7 from "../../assets/image/ms7.png";

export const Projects = () => {
  const [showProject, setShowProjct] = useState(0);
  const [activeButton, setActiveButton] = useState("");

  const handleClick = (index) => {
    setShowProjct(index);
    setActiveButton(index);
  };
  const projects = [
    {
      title: "Project Management App",
      description:
        "The Project Management App is a dynamic and scalable platform designed to streamline task management and project organization. Users can create, update, remove, and track their projects and associated tasks in an intuitive, user-friendly interface. A key feature of the app is its drag-and-drop Kanban board, allowing users to seamlessly move tasks between different project stages, enhancing productivity and project visualization.The app provides secure user authentication through JSON Web Tokens (JWT), ensuring that data is protected. It also offers database management with MySQL2 and Knex, ensuring efficient data handling and retrieval. With a clean, responsive design implemented using Sass, the platform is highly interactive and visually appealing, making it easy for users to navigate and manage their projects with efficiency.",
      features: [
        "Drag-and-drop Kanban board for task management.",
        "Ability to add, update, remove, and view tasks and projects.",
        "Secure user authentication via JWT.",
        "Scalable database management system to handle multiple users and tasks.",
        "Responsive, clean design for a seamless user experience.",
      ],
      techStack: [
        "Frontend: React, Sass, DnD Kit",
        "Backend: Node.js, Express",
        "Database: MySQL2, Knex",
        "Authentication: JWT (JSON Web Tokens)",
      ],
      src: "https://www.youtube.com/embed/sDJoKGRvAtY?si=S4yNYiIwkecSV4vB",
      git: "https://github.com/AnjaliDeviMehra/project-management",
    },
    {
      title: "OpenEditor",
      description:
        "OpenEditor is a real-time collaborative document editing platform built to enhance teamwork and productivity. It allows multiple users to edit documents simultaneously, with changes appearing live across all connected devices. By leveraging cutting-edge web technologies, OpenEditor provides a seamless and reliable editing experience, ensuring that all user input is synced in real time and stored securely. The application focuses on delivering a responsive and intuitive interface, making it easy for teams to collaborate effectively",
      features: [
        "Real-time Collaboration: Multiple users can edit a document concurrently, with instant updates visible to all participants.",
        "Live Updates: Edits are synced in real-time across connected users without delay.",
        "Document Persistence: Ensures that changes are reliably saved and can be retrieved for future sessions.",
        "User-friendly Interface: Built with simplicity in mind, providing a seamless editing experience.",
        "Conflict-free Editing: Minimizes conflicts in document editing by intelligently merging changes from multiple users.",
      ],
      techStack: [
        "Frontend: React",
        "Backend: Express.js",
        "Real-time Communication: Socket.io",
        "Rich Text Editor: Quill",
      ],
      src: openeditor,
    },
    {
      title: "Microsoft Learn Feature",
      description:
        "This project was developed during the BrainStation Hackathon, where our team aimed to simplify AI adoption for Microsoft users. The platform provides an interactive space for business owners, particularly those who may be unfamiliar with advanced technologies, to explore and integrate AI tools offered by Microsoft. We designed an intuitive interface that adds an 'AI By Industry' feature, allowing users to discover AI solutions tailored to their specific industry needs, helping bridge the gap between complex technology and practical business applications.",
      features: [
        "AI By Industry: A specialized feature that helps users explore AI solutions relevant to their industry",
        "User-friendly Platform: Designed with simplicity in mind for non-technical users to easily navigate and understand Microsoft AI products",
        "Business-Focused: Tailored to meet the needs of business owners looking to adopt AI for improved productivity and growth.",
        "Interactive Learning: Provides resources to educate users on integrating AI into their workflows efficiently.",
      ],
      techStack: ["React", "Sass"],
      images: [ms7, ms1, ms2, ms3, ms4, ms5, ms6],
      git: "https://github.com/AnjaliDeviMehra/IndustryProject",
    },
  ];

  return (
    <>
      <div className="projects">
        <button
          className={
            showProject == 0 ? "projects__buttons--active" : "projects__buttons"
          }
          onClick={() => {
            handleClick(0);
          }}
        >
          Project Management App
        </button>
        <button
          className={
            showProject == 1 ? "projects__buttons--active" : "projects__buttons"
          }
          onClick={() => {
            handleClick(1);
          }}
        >
          OpenEditor
        </button>
        <button
          className={
            showProject == 2 ? "projects__buttons--active" : "projects__buttons"
          }
          onClick={() => {
            handleClick(2);
          }}
        >
          Microsoft Learn Feature
        </button>
      </div>

      {showProject == 0 && <Project project={projects[0]} />}
      {showProject == 1 && <Project project={projects[1]} />}
      {showProject == 2 && <Project project={projects[2]} />}
    </>
  );
};
