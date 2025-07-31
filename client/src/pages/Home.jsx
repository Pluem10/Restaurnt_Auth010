import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Restaurants from "../components/Restaurants";
import Swal from "sweetalert2";
import RestaurantsService from "../services/restaurtant.service";
const Home = () => {
  const [restaurant, setRestaurants] = useState([]);
  // const [keyword, setKeyword] = useState("");
  const [filetedRestarant, setFiletedRestarant] = useState([]);
  const handleSearch = (keyword) => {
    if (keyword === "") {
      setFiletedRestarant(restaurant);
      return;
    }
    const result = restaurant.filter((restaurant) => {
      return (
        restaurant.name.toLowerCase().includes(keyword.toLowerCase()) ||
        restaurant.type.toLowerCase().includes(keyword.toLowerCase())
      );
    });
    setFiletedRestarant(result);
    console.log("keyword", keyword);
  };
  useEffect(() => {
    // call api : getAllRestaurants
    const getAllRestaurants = async () => {
      try {
        const response = await RestaurantsService.getAllRestaurant();
        if (response.status === 200) {
          setRestaurants(response.data);
          setFiletedRestarant(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Get Restaurants Failed",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };
    getAllRestaurants();
  }, []);

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="title justify-center text-3xl text-center m-5 gap-x-5">
          Grab Restaurant
        </h1>
      </div>
      <div className="mb-5 flex justify-center items-center max-w">
        <label className="input flex items-center gap-2 w-5xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            name="keyword"
            onChange={(e) => handleSearch(e.target.value)}
            required
            placeholder="Search"
          />
        </label>
      </div>
      <div></div>
      <Restaurants restaurants={filetedRestarant} />
    </div>
  );
};

export default Home;
