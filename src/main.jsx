import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { ProjectRouting } from "./routing/project-routing.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProjectRouting />
  </StrictMode>
);