import { createBrowserRouter } from "react-router";
import Add from "../pages/Add";
import Update from "../pages/Update";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/signUp";
import AboutUS from "../pages/AboutUS";
import AdminPage from "../pages/AdminPage";
import NotAllowed from "../pages/NotAllowed";
import ModAndAdminPage from "../pages/ModAndAdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: (
      <AdminPage>
        <Add />
      </AdminPage>
    ),
  },
  {
    path: "/update/:id",
    element: (
      <ModAndAdminPage>
        <Update />
      </ModAndAdminPage>
    ),
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
    path: "/aboutus",
    element: <AboutUS />,
  },
]);

export default router;
