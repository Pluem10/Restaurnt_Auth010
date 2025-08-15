import { createBrowserRouter } from "react-router";
import Add from "../pages/Add";
import Update from "../pages/Update";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/signUp";
import AboutUS from "../pages/AboutUS"; // ✅ import ใหม่

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/aboutus", // ✅ path ใหม่
    element: <AboutUS />,
  },
]);

export default router;
