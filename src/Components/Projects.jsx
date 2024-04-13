import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../assets/Projects.css";
import { useLocation } from "react-router-dom";

const projects = [
  {
    title: "DG Crypto Web Chat App",
    desc: "A user-friendly web chat application developed using MERN technology, offering real-time messaging for both one-on-one and group conversations.",
    techstack: "(MERN | SocketIo)",
    href: "https://sudo-chat.onrender.com/",
    img: "https://cdn-icons-gif.flaticon.com/15374/15374789.gif",
  },
  {
    title: "Id Card Generator Software",
    desc: "A software build to automate the creation of College ID cards, whether its for students or staff.",
    techstack: "(Python | Tkinter | Html2Image)",
    href: "https://github.com/sudo-arya/idcardgenerator",
    img: "https://cdn-icons-gif.flaticon.com/15571/15571133.gif",
  },
  {
    title: "Alumni Management Portal",
    desc: "An online platform fostering seamless communication and engagement between alumni and their alma mater, facilitating collaboration and networking opportunities for both parties.",
    techstack: "(Html | CSS | Js | Php)",
    href: "https://github.com/sudo-arya/MPR-PROJECT",
    img: "https://cdn-icons-gif.flaticon.com/12035/12035096.gif",
  },
];

const Projects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const renderProjects = () => {
    return projects.map((project, index) => (
      <div key={index} className="projects-card">
        <div className="projects-card-header">
          <h2 className="projects-card-title">{project.title}</h2>
          <h3 className="projects-card-techstack">{project.techstack}</h3>
        </div>
        <div className="projects-card-content">
          <img
            src={project.img}
            alt={project.title}
            className="projects-card-img"
          />
          <div className="projects-card-info">
            <p className="projects-card-desc">{project.desc}</p>
          </div>
          <div className="projects-card-action">
            <button
              className="projects-card-button inline-flex items-center justify-center bg-blue-800 hover:bg-purple-700 focus:outline-none focus:border-gray-700 focus:shadow-outline-blue active:bg-gray-600 transition duration-150 ease-in-out w-full py-2 text-white font-bold rounded text-sm"
              onClick={() => window.open(project.href, "_blank")}
            >
              Visit
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="md:container md:mx-auto flex flex-col min-h-screen">
      <Navbar />
      <div className="projects-container">
        <h1 className="projects-heading">Projects</h1>
        <div className="projects-grid">{renderProjects()}</div>
      </div>
      <footer className="mt-auto bottom-0 z-50 flex flex-cols justify-center items-center">
        <div className="xl:max-w-[1280px] w-screen flex flex-cols ">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Projects;
