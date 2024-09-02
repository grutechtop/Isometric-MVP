import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Isometric from "../Isometric";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Isometric />
  </StrictMode>
);
