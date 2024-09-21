import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

export const ProjectRouting = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="" element={<Layout />}>
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
