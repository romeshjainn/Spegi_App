import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { ProjectRouting } from "./routing/project-routing.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <ProjectRouting />
  </StrictMode>
);
