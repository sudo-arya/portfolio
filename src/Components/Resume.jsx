import React from "react";
import { useState,useEffect } from "react";

import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import my_pic from "../assets/my_pic.jpeg";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import MyPDFViewer from "../Components/MyPDFViewer";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// const App = () => (
//   <div>
//     <h1>PDF Viewer</h1>
//     <MyPDFViewer pdfUrl="../assets/resume.pdf" />
//   </div>
// );

const Resume = () => {
  const { pathname } = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="md:container md:mx-auto flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </header>
      <div className="body mt-6 max-w-screen-lg md:flex mx-auto justify-center">
        {/* <div className="md:w-1/3 p-2"> */}
        {window.innerWidth >= 768 && (
          <div className="xl:max-w-[360px] w-screen mr-20 flex flex-cols justify-center">
            <div className=" md:fixed">
              <div className="md:block ">
                <img className="h-20 w-20 mx-auto rounded-lg " src={my_pic} />
                <div className="mb-12 text-center mt-4 justify-center items-left mx-4 text-Inconsolata">
                  <h1 className="text-xl text-gray-700 font-bold text-Inconsolata">
                    Deepanshu Arya
                  </h1>
                  <div className="md:text-sm text-gray-600">Programmer</div>
                  <div className="text-gray-600 md:hidden mt-1">
                    (deepanshuarya2024@gmail.com)
                  </div>
                </div>
              </div>
              <div className="mx-4 my-4 hidden md:block">
                <div className="my-5 text-sm text-gray-600 flex">
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path d="M20,4H6C4.897,4,4,4.897,4,6v5h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z" />
                      <path d="M2 12H9V14H2zM4 15H10V17H4zM7 18H11V20H7z" />
                    </svg>
                  </div>
                  deepanshuarya2024@gmail.com
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="my-5 text-sm text-gray-600 flex">
                  <div className="mr-2">
                    <svg
                      className="text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,14c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S9.794,14,12,14z M12,8c1.103,0,2,0.897,2,2s-0.897,2-2,2 s-2-0.897-2-2S10.897,8,12,8z" />
                      <path d="M11.42,21.814C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.186C12.884,21.599,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.995C3.971,16.44,11.116,21.599,11.42,21.814z M12,4c3.309,0,6,2.691,6,6.005 c0.021,4.438-4.388,8.423-6,9.73C10.389,18.427,5.979,14.441,6,10C6,6.691,8.691,4,12,4z" />
                    </svg>
                  </div>
                  Delhi,India
                </div>
                <a
                  href="https://www.linkedin.com/in/deepanshu-arya-2931a822b/"
                  className="my-5  text-sm text-gray-600 flex"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#0288D1"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                      ></path>
                    </svg>
                  </div>
                  LinkedIn
                </a>
              </div>
              <div className="mx-4 hidden md:block">
                <Link
                  to="/DeepanshuArya-Projects"
                  className="inline-flex items-center justify-center bg-blue-800 hover:bg-purple-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-blue active:bg-gray-600 transition duration-150 ease-in-out w-full py-2 text-white font-bold rounded text-sm"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        )}
        {/* <div className="md:w-2/3 w-full sm:border-l-2"> */}
        <div className="body mt-6 max-w-screen-lg md:flex mx-auto justify-center">
          {windowWidth >= 768 && (
            <div className="xl:max-w-[360px] w-screen mr-20 flex flex-cols justify-center">
              {/* Content for larger screens */}
            </div>
          )}
          <div className="xl:max-w-[800px] w-screen flex flex-cols justify-center">
            <MyPDFViewer pdfUrl="/dist/resumes/resume.pdf" />
          </div>
        </div>
      </div>
      <footer className="mt-auto bottom-0 z-50 flex flex-cols justify-center items-center">
        <div className="xl:max-w-[1280px] w-screen flex flex-cols ">
          <Footer />
        </div>
      </footer>
    </div>
  );
};



// to detect idm presence and show pop up
// function isIDMActive() {
//   // Create a dummy XMLHttpRequest object
//   var xhr = new XMLHttpRequest();

//   // Set up a listener for the "readystatechange" event
//   xhr.onreadystatechange = function () {
//     // Check if the request is complete and successful (status 200)
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       // Check if the response headers contain the X-Content-Length header
//       // IDM adds this header to intercepted requests
//       if (xhr.getResponseHeader("X-Content-Length")) {
//         // IDM or similar extension is likely active
//         alert(
//           "IDM or similar extension detected. Please disable it for optimal performance."
//         );
//       }
//     }
//   };

//   // Open a GET request to a non-existent URL
//   xhr.open("GET", "https://example.com/non-existent-file", true);

//   // Send the request
//   xhr.send();
// }

// // Call the function to check for IDM on page load
// isIDMActive();

export default Resume;
