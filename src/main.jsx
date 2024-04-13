import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import Home from "./Components/Home.jsx";
import Resume from "./Components/Resume.jsx";
import Projects from "./Components/Projects.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/DeepanshuArya-Resume",
    element: <Resume />,
  },
  {
    path: "/DeepanshuArya-Projects",
    element: <Projects />,
  },
  // Adjust the route path to match your directory structure
  {
    path: "/resume/deepanshu_arya_9210760003.pdf",
    element: <Resume />, // Render the Resume component or any other component you want to use to serve the PDF file
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
