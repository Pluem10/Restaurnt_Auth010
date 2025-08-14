import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/Router.jsx";
import NavBar from "./components/NavBar.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <NavBar />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
