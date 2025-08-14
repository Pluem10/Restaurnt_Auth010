import React, { useState } from "react";
import NavBar from "../components/NavBar";

export const Add = () => {
  const [restaurant, setRestaurants] = useState({
    name: "",
    type: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurants({ ...restaurant, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/restaurants", {
        method: "POST",
        body: JSON.stringify(restaurant),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status) {
        alert("Restaurant added successfully");
        setRestaurant({
          name: "",
          type: "",
          imageUrl: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
          <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Add Item
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="label">
                <span className="text-base label-text">Title</span>
              </label>

              <input
                type="text"
                placeholder="Enter name"
                className="w-full input input-bordered"
                name="name"
                value={restaurant.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Type</span>
              </label>
              <input
                type="text"
                placeholder="Enter type"
                className="w-full input input-bordered"
                name="type"
                value={restaurant.type}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Image URL</span>
              </label>
              <input
                type="text"
                className="w-full input input-bordered"
                value={restaurant.imageUrl}
                onChange={handleChange}
                placeholder="Restaurant imageUrl"
                name="imageUrl"
              />

              {restaurant.imageUrl && (
                <div className="flex items-center gap-2">
                  <img
                    className="h-32"
                    src={restaurant.imageUrl}
                    alt="Preview"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-center items-center my-6 space-x-4">
              <button
                type="submit"
                className="btn bg-green-500 text-white px-6"
              >
                Add
              </button>
              <a href="/" className="btn bg-red-500 text-white px-6">
                Cancel
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Add;
