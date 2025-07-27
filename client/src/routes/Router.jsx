import { createBrowserRouter } from "react-router";
import { Add } from "../pages/Add";
import Update from "../pages/Update";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/signUp";

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
]);
export default router;
