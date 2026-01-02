// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Home from "./pages/Home";
import ProjectA from "./pages/ProjectA";
import ProjectB from "./pages/ProjectB";
import ProjectC from "./pages/ProjectC";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="project-a" element={<ProjectA />} />
          <Route path="project-b" element={<ProjectB />} />
          <Route path="project-c" element={<ProjectC />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
