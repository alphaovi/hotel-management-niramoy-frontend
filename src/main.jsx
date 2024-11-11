import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <div>
    <StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </StrictMode>
  </div>
);