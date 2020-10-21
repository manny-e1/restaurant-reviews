import React, { useContext, useState } from "react";
import restaurantFinder from "../axios";
import { RestaurantsContext } from "../context/RestaurantsContext";

export default function AddRestaurant() {
  const { addRestaurants } = useContext(RestaurantsContext);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setpriceRange] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await restaurantFinder.post("/", {
        name,
        location,
        price_range: parseInt(priceRange),
      });
      console.log(response.data.insertedData);

      addRestaurants(response.data.insertedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              type="text"
              placeholder="name"
            />
          </div>
          <div className="col">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select
              value={priceRange}
              onChange={(e) => setpriceRange(e.target.value)}
              className="custom-select mr-sm-2"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
