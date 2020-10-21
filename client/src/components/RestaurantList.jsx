import React, { useContext, useEffect } from "react";
import restaurantFinder from "../axios";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
export default function RestaurantList(props) {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await restaurantFinder.get("/");
        const { data } = response;
        setRestaurants(data.restaurants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setRestaurants]);

  const deleteRestaurant = async (e,id) => {
    e.stopPropagation()
    try {
      const response = await restaurantFinder.delete(`/${id}`);
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (e,id) => {
    e.stopPropagation()
    history.push(`restaurant/${id}/update`);
  };

  const handleDetailPage = (id) => {
    history.push( `restaurants/${id}`)
  }

  return (
    <div>
      <div className="list-group">
        <table className="table table-hover table-dark">
          <thead>
            <tr className="big-primary">
              <th scope="col">Restaurant</th>
              <th scope="col">Location</th>
              <th scope="col">Price Range</th>
              <th scope="col">Rating</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {restaurants &&
              restaurants.map((restaurant) => {
                return (
                  <tr onClick={()=> handleDetailPage(restaurant.id)} key={restaurant.id}>
                    <td>{restaurant.name}</td>
                    <td>{restaurant.localtion}</td>
                    <td>{"$".repeat(restaurant.price_range)}</td>
                    <td>rating</td>
                    <td>
                      <button
                        onClick={(e) => handleUpdate(e,restaurant.id)}
                        className="btn btn-warning"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={(e) => deleteRestaurant(e,restaurant.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
