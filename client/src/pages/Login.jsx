import React, { useState } from "react";
import { useNavigate } from "react-router";
import AuthService from "../services/auth.service";
import Swal from "sweetalert2";

function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(
        login.username,
        login.password
      );
      if (response && response.status === 200) {
        Swal.fire({
          title: "User Login Successfully",
          text: "login successfully",
          icon: "success",
        }).then(() => {
          navigate("/");
        });
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      Swal.fire({
        title: "Login Failed",
        icon: "error",
        text: error?.response?.data?.message || error.message,
      });
      setError(error?.response?.data?.message || error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-gray-800 px-4">
      <form
        className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 sm:p-10 w-full max-w-md space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white">
          Login to Your Account
        </h2>

        {error && (
          <p className="text-red-500 text-center text-sm font-semibold">
            {error}
          </p>
        )}

        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={login.username}
            onChange={handleChange}
            placeholder="Your username"
            required
            className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={login.password}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
        >
          Login
        </button>

        <button
          type="button"
          className="w-full bg-gray-300 hover:bg-gray-400 dark:bg-red-500 dark:hover:bg-red-600 text-black dark:text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          onClick={() =>
            setLogin({
              username: "",
              password: "",
            })
          }
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Login;
