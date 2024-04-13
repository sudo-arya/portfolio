// Inside App.jsx
import { Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";


function App() {
  return (
    <div>
      <Routes>
        {" "}
        {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} />{" "}
        {/* Use element prop instead of component */}
        <Route path="/DeepanshuArya-Resume" element={<Resume />} />
        <Route path="/DeepanshuArya-Projects" element={<Projects />} />
        {/* Add more routes here */}
      </Routes>
    </div>
  );
}

export default App;
