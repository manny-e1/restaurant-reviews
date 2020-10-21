import React, { useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import restaurantFinder from "../axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Rated from "../components/Rated";
import Reviews from "../components/Reviews";
import AddReviews from "../components/AddReviews";
function Restaurantdetail(props) {
  const { id } = useParams();
  const {
    selectedRestaurant,
    setSelectedRestaurant,
    totalRating,
    setTotalRating,
  } = useContext(RestaurantsContext);
  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const res = await restaurantFinder.get(`/${id}`)
        const rate = await restaurantFinder.get(`/${id}/rating`)
        setSelectedRestaurant(res.data.restaurant)
        setTotalRating(rate.data.rating)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  },[])
 
  return <div>
 {selectedRestaurant && (
   <>
    <div className="mt-3">
    <h1 className="font-weight-light display-1 text-center">
        {selectedRestaurant.name}
      </h1>
      <p className="text-center"><Rated rated={totalRating}/></p>
      <AddReviews/>
      <Reviews/>
    </div>
   </>
 )}</div>;
}

export default Restaurantdetail;
