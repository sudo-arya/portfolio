import React, { useState } from "react";
import "../App.css";

import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import flower from "../assets/flower.gif";
import coding from "../assets/giphy_7.gif";
import girlcoding from "../assets/penguin.gif";
import my_pic from "../assets/my_pic.jpeg";
import my_dp from "../assets/cyan_and_black_1_2.gif";
import Footer from "./Footer";
import clickSound1 from "../assets/click1.mp3";
import clickSound2 from "../assets/click3.mp3";

const Home = () => {
  const [audio] = useState(new Audio(clickSound1));
  const [bgaudio] = useState(new Audio(clickSound2));
  const [bgAudioPausedAt, setBgAudioPausedAt] = useState(0);

  // Set volume level for both audio
  audio.volume = 0.25; // 5% volume
  bgaudio.volume = 0.15; // 1% volume

  const playSound = () => {
    audio.play();
  };
  const playbg = () => {
    bgaudio.play();
  };

  const stopSound = () => {
    audio.pause();
    audio.currentTime = 0;
  };
  const stopbg = () => {
    bgaudio.pause();
    setBgAudioPausedAt(bgaudio.currentTime);
    bgaudio.currentTime = 0;
  };

  const resumebg = () => {
    bgaudio.currentTime = bgAudioPausedAt;
    bgaudio.play();
  };

  return (
    <div className="homepage flex flex-col min-h-screen justify-center align-middle">
      <div
        className="flex flex-col m-5"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="noise" />
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
          {/* ABOUT ME CARD */}
          <div className="relative col-span-3 aspect-square md:aspect-auto md:row-span-2 bg-[#af72ff56] rounded-3xl overflow-hidden">
            <a
              href=""
              onMouseEnter={resumebg}
              onMouseLeave={stopbg}
              onClick={resumebg}
            >
              <div className="h-full  absolute  p-4 md:p-8 flex flex-col justify-start  md:justify-end">
                <img
                  className="w-24 h-24 md:w-40 md:h-40 mb-5 rounded-full dark:bg-gray-500 aspect-square"
                  src={my_dp}
                  alt=""
                />

                <h1 className="text-3xl md:text-xl  md:w-4/5 lg:text-5xl font-bold text-white mb-4 lg:mb-5">
                  Hi, I'm Deepanshu Arya
                </h1>

                <p className=" text-dm md:text-md lg:text-md text-[#ffffffcd] font-semibold">
                  Programmer 👨🏻‍💻 | Tech Driven Guy 🧠 | Lifelong Learner 🤓
                </p>
              </div>
            </a>
          </div>

          {/* DOWNLOAD CV CARD */}
          <div
            target="_blank"
            className="text-decoration transition duration-500 ease-in-out scale text-white rounded-3xl flex flex-col col-span-1 relative overflow-hidden aspect-square shadow-sm bg-[#316c3bd3] p-4 justify-center items-center"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white text-[#ffffffaa]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
            <div className="">
              <a
                href="/DeepanshuArya-Resume"
                onMouseEnter={playSound}
                onMouseLeave={stopSound}
              >
                <div className="flex justify-center items-center flex-col">
                  <p className="text-xs md:text-lg uppercase font"></p>

                  <p className="text-4xl md:text-8xl font-bold">📄</p>
                  <p className="text-xs md:text-xl mt-4 mr-2 uppercase font-semibold text-center">
                    View CV
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* LINKEDIN BUTTON */}
          <a
            href="https://www.linkedin.com/in/deepanshu-arya-2931a822b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            className="flex flex-col justify-center items-center bg-[#49a7ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer scale transition duration-300 ease-in-out"
            onMouseEnter={playSound}
            onMouseLeave={stopSound}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 448 512"
              className="text-4xl md:text-7xl lg:text-9xl text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
          </a>

          {/* EMAIL BUTTON */}
          <a
            href="mailto:deepanshuarya2024@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="flex flex-col justify-center items-center bg-[#d0102aad] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer scale transition duration-300 ease-in-out"
            onMouseEnter={playSound}
            onMouseLeave={stopSound}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="text-4xl md:text-7xl lg:text-9xl text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
          {/* MYSELF PHOTO CARD */}
          <img
            src={my_pic}
            className="rounded-3xl flex flex-col col-span-1 relative overflow-hidden aspect-square justify-center items-center"
          />
          {/*PROJECT CARD*/}
          <Link
            to="/DeepanshuArya-Projects"
            className="relative rounded-3xl col-span-2 md:aspect-auto overflow-hidden scale transition duration-500 ease-in-out"
            onMouseEnter={playSound}
            onMouseLeave={stopSound}
          >
            {/* <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white z-10 text-[#ffffffaa]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
              </svg>

              <div className="w-full h-full absolute  text-white md:p-8 z-10 pointer-events-none">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  role="img"
                  viewBox="0 0 24 24"
                  color="white"
                  className="text-xs md:text-5xl hidden md:flex"
                  style={{ color: "white" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <div className="z-50 mt-9">
                  <h2 className="text-white text-sm md:text-xl lg:text-3xl font-bold">
                    Projects
                  </h2>
                  <p className="text-white text-xs md:text-xs lg:text-xl">
                    Here you can find some of my projects I have worked upon.
                  </p>
                </div>
              </div>

              <div className="w-full h-full bg-black absolute">
                <img
                  alt=""
                  loading="lazy"
                  width={480}
                  height={480}
                  decoding="async"
                  data-nimg={1}
                  className="absolute w-full h-full object-cover object-center top-0 left-0 opacity-40"
                  srcSet={coding}
                  src={coding}
                />
              </div>
            </div> */}

            <div className="relative w-full h-full p-4 md:p-8 bg-[#000000eb] z-50">
              <img
                alt=""
                width={498}
                height={280}
                data-nimg={1}
                className="absolute w-full h-full object-cover object-center top-0 left-0 opacity-40"
                srcSet={coding}
                src={coding}
              />
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white text-[#ffffffaa] z-auto"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
              </svg>
              <div className="w-full h-full flex flex-col justify-between z-50">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  role="img"
                  viewBox="0 0 24 24"
                  color="white"
                  className="text-xs md:text-5xl hidden md:flex"
                  
                  style={{ color: "transparent" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <div className="z-50 mt-9">
                  <h2 className="text-white text-sm md:text-xl lg:text-3xl font-bold">
                    Projects
                  </h2>
                  <p className="text-white text-xs sm:text-xs md:text-sm lg:text-xl">
                    Here you can find some of my projects I have worked upon.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          {/* GITHUB BUTTON */}
          <a
            href="https://github.com/sudo-arya/"
            target="_blank"
            rel="noopener noreferrer"
            className=" rounded-3xl col-span-2 overflow-hidden cursor-pointer scale transition duration-300 ease-in-out"
            onMouseEnter={playSound}
            onMouseLeave={stopSound}
          >
            <div className="relative w-full h-full p-4 md:p-8 bg-[#000000eb] z-50">
              <img
                alt=""
                width={498}
                height={280}
                data-nimg={1}
                className="absolute w-full h-full object-cover object-center top-0 left-0 opacity-40"
                srcSet={girlcoding}
                src={girlcoding}
              />
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white text-[#ffffffaa] z-auto"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
              </svg>
              <div className="w-full h-full flex flex-col justify-between z-50">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  role="img"
                  viewBox="0 0 24 24"
                  color="white"
                  className="text-xs md:text-5xl hidden md:flex"
                  style={{ color: "white" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <div className="z-50 mt-9">
                  <h2 className="text-white text-sm md:text-xl lg:text-3xl font-bold">
                    Github
                  </h2>
                  <p className="text-white text-xs md:text-xs lg:text-xl">
                    My Github profile, where I upload my projects.
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* spotify blend BUTTON */}
          <a
            href="https://www.geeksforgeeks.org/user/sudo_arya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="flex flex-col justify-center items-center bg-[#171717] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer scale transition duration-300 ease-in-out"
            onMouseEnter={playSound}
            onMouseLeave={stopSound}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
            {/* card element for twitter */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-4xl md:text-7xl lg:text-9xl text-white"
              height="1em"
              width="1em"
              style={{ color: "white" }}
              viewBox="0 0 512 512"
            >
              <path
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                fill="white"
                stroke="#ffffffaa"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </svg> */}

            {/* card element for gfg */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-4xl md:text-7xl lg:text-9xl text-white"
              x="0px"
              y="0px"
              width="50%"
              height="50%"
              viewBox="0 0 48 48"
            >
              <path
                fill="#43a047"
                d="M29.035,24C29.014,23.671,29,23.339,29,23c0-6.08,2.86-10,7-10c3.411,0,6.33,2.662,7,7l2,0l0.001-9	L43,11c0,0-0.533,1.506-1,1.16c-1.899-1.066-3.723-1.132-6.024-1.132C30.176,11.028,25,16.26,25,22.92	c0,0.364,0.021,0.723,0.049,1.08h-2.099C22.979,23.643,23,23.284,23,22.92c0-6.66-5.176-11.892-10.976-11.892	c-2.301,0-4.125,0.065-6.024,1.132C5.533,12.506,5,11,5,11l-2.001,0L3,20l2,0c0.67-4.338,3.589-7,7-7c4.14,0,7,3.92,7,10	c0,0.339-0.014,0.671-0.035,1H0v2h1.009c1.083,0,1.977,0.861,1.999,1.943C3.046,29.789,3.224,32.006,4,33c1.269,1.625,3,3,8,3	c5.022,0,9.92-4.527,11-10h2c1.08,5.473,5.978,10,11,10c5,0,6.731-1.375,8-3c0.776-0.994,0.954-3.211,0.992-5.057	C45.014,26.861,45.909,26,46.991,26H48v-2H29.035z M11.477,33.73C9.872,33.73,7.322,33.724,7,32	c-0.109-0.583-0.091-2.527-0.057-4.046C6.968,26.867,7.855,26,8.943,26H19C18.206,30.781,15.015,33.73,11.477,33.73z M41,32	c-0.322,1.724-2.872,1.73-4.477,1.73c-3.537,0-6.729-2.949-7.523-7.73h10.057c1.088,0,1.975,0.867,2,1.954	C41.091,29.473,41.109,31.417,41,32z"
              ></path>
            </svg>

            {/* card element for spotify */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              className="text-4xl md:text-7xl lg:text-9xl text-white"
              x="0px"
              y="0px"
              width="1em"
              height="1em"
              id="spotify"
            >
              <circle cx="12" cy="12" r="12" fill="#4caf50"></circle>
              <g fill="#212121">
                <path d="M16.872 17.656v.001c-.203 0-.329-.063-.518-.174-3.019-1.82-6.532-1.896-10.002-1.185-.189.049-.436.126-.576.126-.47 0-.765-.373-.765-.765 0-.499.295-.736.659-.813 3.963-.875 8.013-.798 11.467 1.268.295.189.47.358.47.798 0 .438-.344.744-.735.744zM18.175 14.483h-.001c-.252 0-.421-.111-.596-.203-3.025-1.79-7.533-2.512-11.545-1.423-.232.063-.358.126-.576.126-.518 0-.938-.421-.938-.938s.252-.861.75-1.001c1.345-.378 2.719-.659 4.732-.659 3.14 0 6.174.779 8.565 2.202.392.232.547.533.547.953-.005.521-.411.943-.938.943zM4.548 6.998c1.703-.499 3.61-.735 5.686-.735 3.532 0 7.234.735 9.939 2.313.378.218.624.518.624 1.093 0 .658-.533 1.127-1.122 1.127l-.001-.001c-.252 0-.407-.063-.625-.189-3.444-2.056-9.605-2.549-13.591-1.436-.175.048-.393.125-.625.125-.639 0-1.127-.499-1.127-1.142 0-.657.407-1.029.842-1.155z"></path>
              </g>
            </svg>
            <div className="flex justify-center items-center flex-col">
              <p className="text-xs md:text-lg uppercase font"></p>
              <p className="text-xs md:text-xl mt-4 font-semibold text-center text-[#4faf53]">
                Blend with <br className="md:hidden" />
                me&nbsp;<span className="inline md:hidden">?</span>
              </p>
              <p className="hidden md:inline md:text-xl mt-1 font-semibold text-center text-[#4faf53]">
                ??
              </p>
            </div> */}
          </a>

          {/* INSTAGRAM BUTTON */}
          <a
            href="https://www.instagram.com/_deepanshuarya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex flex-col justify-center items-center bg-insta opacity-1/2 rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer scale transition duration-300 ease-in-out"
            onMouseEnter={playSound}
            onMouseLeave={stopSound}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              aria-labelledby="title"
              aria-describedby="desc"
              role="img"
              className="text-4xl md:text-7xl lg:text-9xl text-white"
              height="1em"
              width="1em"
            >
              &gt;
              <path
                d="M44.122 2H19.87A17.875 17.875 0 0 0 2 19.835v24.2a17.875 17.875 0 0 0 17.87 17.834h24.252A17.875 17.875 0 0 0 62 44.034v-24.2A17.875 17.875 0 0 0 44.122 2zM55.96 44.034a11.825 11.825 0 0 1-11.838 11.812H19.87A11.825 11.825 0 0 1 8.032 44.034v-24.2A11.825 11.825 0 0 1 19.87 8.022h24.252A11.825 11.825 0 0 1 55.96 19.835zm0 0"
                fill="white"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                data-name="layer1"
                d="M32 16.45a15.484 15.484 0 1 0 15.514 15.484A15.519 15.519 0 0 0 32 16.45zm0 24.95a9.461 9.461 0 1 1 9.482-9.461A9.472 9.472 0 0 1 32 41.4zm19.263-24.834a3.719 3.719 0 1 1-3.719-3.711 3.714 3.714 0 0 1 3.719 3.711zm0 0"
                fill="white"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <div className="grid grid-cols-4 place-content-center place-items-center gap-3 md:gap-8 p-4 md:p-8 rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm text-lg md:text-xl lg:text-5xl text-center text-[#ffffffde]">
            <img
              alt=""
              loading="lazy"
              width={498}
              height={280}
              decoding="async"
              data-nimg={1}
              className="absolute w-full h-full object-cover object-center top-0 left-0 -z-10"
              style={{ color: "transparent" }}
              srcSet={flower}
              src={flower}
            />
          </div>
        </div>
      </div>
      <footer className=" mt-auto bottom-0 z-50 flex flex-cols justify-center items-center text-white">
        <div className="w-screen">
          <hr class="my-6 border-gray-200 sm:mx-auto lg:my-4" />
          <p class="flex justify-center text-sm text-white text-center my-4">
            Coded by&nbsp;
            <a href="" class="hover:underline">
              {" "}
              sudo-arya &nbsp;
            </a>
            😊
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

//
