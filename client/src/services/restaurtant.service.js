import api from "./api.js";
const RESTO_API = import.meta.env.VITE_RESTO_API;

// get all restaurants
const getAllRestaurants = async () => {
  return await api.get(`${RESTO_API}`);
};

// ger restaurant by id
const getRestaurantById = async (id) => {
  //return await api.get(RESTO_API + "/" + id);
  return api.get(`${RESTO_API}/${id}`);
};

// update restaurant by id
const updateRestaurantById = async (id, restaurant) => {
  return await api.put(RESTO_API + "/" + id, restaurant);
};

//add restaurant
const insertRestaurant = async (restaurant) => {
  return await api.post(RESTO_API, restaurant);
};

// delete restaurant
const deleteRestaurant = async (id) => {
  return await api.delete(`${RESTO_API}/${id}`);
};

const RestaurantService = {
  getAllRestaurants,
  getRestaurantById,
  updateRestaurantById,
  deleteRestaurant,
  insertRestaurant,
};
export default RestaurantService;
