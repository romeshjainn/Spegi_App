import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../pages/layout/layout";
import Login from "../pages/auth/login";
import Home from "../pages/home/home";

export const ProjectRouting = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};
