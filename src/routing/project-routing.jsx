import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/login";
import Home from "../pages/home/home";
import SelectCompnay from "../pages/home/select-company";
import Profile from "../pages/profile/profile";

export const ProjectRouting = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/select-company" element={<SelectCompnay />} />
        <Route path="/forgot-password" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};
