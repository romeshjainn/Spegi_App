import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "../pages/auth/login";
import Home from "../pages/home/home";
import SelectCompnay from "../pages/home/select-company";
import Profile from "../pages/profile/profile";
import SwitchCollege from "../pages/home/switch-college";
import Layout from "../pages/layout/layout";
import Setting from "../pages/home/settings";
import { AdmissionsPage } from "../pages/card-details-page/admissions";
import { EnquiriesPage } from "../pages/card-details-page/enquiries";
import { ExpensePage } from "../pages/card-details-page/expenses";
import { IncomePage } from "../pages/card-details-page/income";
import Help from "../pages/help";
import { HashLoader } from "react-spinners";
import useBackButtonHandler from "../hook/useBackButtonHandler";

const RedirectHandler = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token");
    const isDefault = localStorage.getItem("isDefaultCollege");

    console.log(window.history);
    if (isLoggedIn && isLoggedIn !== "undefined") {
      isDefault === "true" ? navigate("/home") : navigate("/select-company");
    } else {
      navigate("/login");
    }

    setLoading(false);
  }, [navigate]);

  if (loading)
    return (
      <div className="grid place-items-center h-screen">
        <HashLoader color="#67217a" size={100} />
      </div>
    );

  return null;
};

export const ProjectRouting = () => {
  useBackButtonHandler();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectHandler />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="switch-college" element={<SwitchCollege />} />
          <Route path="settings" element={<Setting />} />
          <Route path="help" element={<Help />} />
        </Route>
        <Route path="select-company" element={<SelectCompnay />} />
        <Route path="income" element={<IncomePage />} />
        <Route path="expense" element={<ExpensePage />} />
        <Route path="enquiry" element={<EnquiriesPage />} />
        <Route path="admissions" element={<AdmissionsPage />} />
      </Routes>
    </Router>
  );
};
