import React,{ useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext'
import Rated from './Rated'
import restaurantFinder from "../axios";

export default function Reviews(props) {
    const {id} = useParams() 
    const {reviews, setReviews} = useContext(RestaurantsContext)
    
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await restaurantFinder(`/reviews/${id}`)
                const { data } = response;
                console.log(data.review)
                setReviews(data.review);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    },[setReviews])
    return (
        <div className="row row-cols-3 mt-4">
            {reviews &&
            reviews.map((review) => {
            return (
                <div className="card text-white bg-primary mb-3 mr-4"
                key={review.id}
                 style={{maxWidth:"30%"}}>
                    <div className="card-header d-flex justify-content-between">
                        <span>{review.name}</span>
                        <span><Rated rated={review.rating}/></span>
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                            {review.review}
                        </p>
                    </div>
                </div>
            )
           })
        }
        </div>
        
    )
    
 
}
