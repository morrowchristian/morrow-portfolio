// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Home from "./pages/Home";
import ProjectDetail from "./components/ProjectDetail";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          {/* Home */}
          <Route index element={<Home />} />

          {/* Dynamic Project Detail */}
          <Route path="projects/:id" element={<ProjectDetail />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
