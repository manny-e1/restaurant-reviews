import React, { useState, useEffect } from "react";
import restaurantFinder from "../axios";
import { useParams, useHistory } from "react-router-dom";

function UpdateRestaurant(props) {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setpriceRange] = useState("");
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await restaurantFinder.get(`/${id}`);
        const { data } = response;
        console.log(data);
        setName(data.restaurant.name);
        setLocation(data.restaurant.localtion);
        setpriceRange(data.restaurant.price_range);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await restaurantFinder.put(`/${id}`, {
        name,
        location,
        price_range: parseInt(priceRange),
      });
      console.log(response);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lacation">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            id="location"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input
            value={priceRange}
            onChange={(e) => setpriceRange(e.target.value)}
            type="number"
            id="price_range"
            className="form-control"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="btn btn-primary"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateRestaurant;
