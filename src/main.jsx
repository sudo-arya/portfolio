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
  // Update your router configuration accordingly
  {
    path: "dist/resumes/deepanshu_arya_9210760003.pdf",
    element: <Resume />, // Or any other component you want to render when accessing the PDF URL
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
