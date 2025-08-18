import React from "react";
import { useAuthContext } from "../context/AuthContext";
const UserProfile = () => {
  const { logout } = useAuthContext();
  const handleLogOut = () => {
    logout();
  };
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://i.pinimg.com/736x/e1/93/22/e1932207df57edf7a4349c2cdc26f0d0.jpg"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a onClick={handleLogOut}>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
