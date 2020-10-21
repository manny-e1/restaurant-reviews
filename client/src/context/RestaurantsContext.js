import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [reviews,setReviews] = useState([])
  const [rating,setRating] = useState(0)
  const [totalRating,setTotalRating] = useState(0)

  const addRestaurants = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  const addReviews = (review) => {
    setReviews([...reviews, review]);
  };
  
  const updateRating = (rating) => {
    setTotalRating(rating);
  };

  return (
    <RestaurantsContext.Provider
      value={{ 
        restaurants,
        setRestaurants,
        addRestaurants,
        selectedRestaurant,
        selectedRestaurant,
        setSelectedRestaurant,
        reviews,
        setReviews,
        addReviews,
        rating,
        setRating,
        totalRating,
        setTotalRating,
        updateRating
       }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};
