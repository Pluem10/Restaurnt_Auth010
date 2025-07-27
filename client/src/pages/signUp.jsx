import React, { useState } from "react";

function SignUp() {
  const [register, setRegister] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // เพิ่ม state สำหรับ success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (register.password !== register.repeatPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: register.username,
            name: register.name,
            email: register.email,
            password: register.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess("Register successful!");
        setRegister({
          username: "",
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
        });
      } else {
        setError(data.message || "Register failed.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again. " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-gray-800 px-4">
      <form
        className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 sm:p-10 w-full max-w-md space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white">
          Register New Account
        </h2>

        {error && (
          <p className="text-red-500 text-center text-sm font-semibold">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-500 text-center text-sm font-semibold">
            {success}
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
            value={register.username}
            onChange={handleChange}
            placeholder="Your username"
            required
            className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={register.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={register.email}
            onChange={handleChange}
            placeholder="you@example.com"
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
            value={register.password}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            htmlFor="repeatPassword"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Repeat Password
          </label>
          <input
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            value={register.repeatPassword}
            onChange={handleChange}
            required
            className={`mt-1 w-full px-4 py-2 rounded-lg border ${
              register.password !== register.repeatPassword
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400`}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
        >
          Register
        </button>
        <button
          type="button"
          className="w-full bg-gray-300 hover:bg-gray-400 dark:bg-red-500 dark:hover:bg-red-600 text-black dark:text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          onClick={() =>
            setRegister({
              username: "",
              name: "",
              email: "",
              password: "",
              repeatPassword: "",
            })
          }
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default SignUp;