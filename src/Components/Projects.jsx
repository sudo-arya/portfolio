import React, { useEffect, useState } from "react";
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
    github: "https://github.com/sudo-arya/Mern-Chat-app",
    img: "https://cdn-icons-gif.flaticon.com/15374/15374789.gif",
  },
  {
    title: "Id Card Generator Software",
    desc: "A software build to automate the creation of College ID cards, whether its for students or staff.",
    techstack: "(jinja2 | html2image | fpdf | Tkinter)",
    href: "https://github.com/sudo-arya/idcardgenerator",
    github: "https://github.com/sudo-arya/idcardgenerator",
    img: "https://cdn-icons-gif.flaticon.com/15571/15571133.gif",
  },
  {
    title: "Portfolio Website",
    desc: "An online platform intended for the comprehensive display of professional achievements and creative endeavors in a polished and visually appealing manner.",
    techstack: "(React | Tailwind | Vite | React-pdf)",
    href: "https://deepanshuarya.tech/",
    github: "https://github.com/sudo-arya/portfolio/",
    img: "https://cdn-icons-gif.flaticon.com/15557/15557819.gif",
  },
  {
    title: "Alumni Management Portal",
    desc: "An online platform fostering seamless communication and engagement between alumni and their alma mater, facilitating collaboration and networking opportunities for both parties.",
    techstack: "(Html | CSS | Js | Php)",
    href: "https://github.com/sudo-arya/MPR-PROJECT",
    github: "https://github.com/sudo-arya/MPR-PROJECT",
    img: "https://cdn-icons-gif.flaticon.com/12035/12035096.gif",
  },
];

const Projects = () => {
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
              className="projects-card-button inline-flex items-center justify-center bg-black hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-blue active:bg-gray-600 transition duration-150 ease-in-out w-full py-2 text-white font-bold rounded text-sm mb-1"
              onClick={() => window.open(project.github, "_blank")}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                role="img"
                viewBox="0 0 24 24"
                color="white"
                className="text-xs md:text-5xl hidden md:flex mr-10"
                style={{ color: "white" }}
                height=".5em"
                width=".5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              github
            </button>
            <button
              className="projects-card-button inline-flex items-center justify-center bg-blue-800 hover:bg-purple-700 focus:outline-none focus:border-gray-700 focus:shadow-outline-blue active:bg-gray-600 transition duration-150 ease-in-out w-full py-2 text-white font-bold rounded text-sm mb-1"
              onClick={() => window.open(project.href, "_blank")}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                role="img"
                viewBox="0 0 24 24"
                color="white"
                className="text-xs md:text-5xl hidden md:flex mr-12"
                style={{ color: "white" }}
                height=".5em"
                width=".5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
              </svg>
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

const withReloadProtection = (WrappedComponent) => {
  return (props) => {
    const { pathname } = useLocation();
    const [reloadAttempted, setReloadAttempted] = useState(false);

    useEffect(() => {
      const handleBeforeUnload = () => {
        setReloadAttempted(true);
      };

      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }, []);

    useEffect(() => {
      if (reloadAttempted) {
        window.location.href = "/DeepanshuArya-Projects";
      }
    }, [reloadAttempted]);

    if (!reloadAttempted) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withReloadProtection(Projects);
// export default withReloadProtection(Projects);
