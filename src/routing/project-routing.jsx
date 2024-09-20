import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/login";
import Home from "../pages/home/home";
import SelectCompnay from "../pages/home/select-company";
import Profile from "../pages/profile/profile";
import SwitchCollege from "../pages/home/switchCollege";
import Layout from "../pages/layout/layout";
import Setting from "../pages/home/settings";
import { AdmissionsPage } from "../pages/card-details-page/admissions";
import { EnquiriesPage } from "../pages/card-details-page/enquiries";
import { ExpensePage } from "../pages/card-details-page/expenses";
import { ProfilePage } from "../pages/card-details-page/profit";

export const ProjectRouting = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="select-company" element={<SelectCompnay />} />
          <Route path="switch-college" element={<SwitchCollege />} />
          <Route path="forgot-password" element={<Login />} />
          <Route path="settings" element={<Setting />} />
        </Route>
        <Route path="income" element={<ProfilePage />} />
        <Route path="expense" element={<ExpensePage />} />
        <Route path="enquiry" element={<EnquiriesPage />} />
        <Route path="admissions" element={<AdmissionsPage />} />
      </Routes>
    </Router>
  );
};
