import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext';
import Rating from './Rating'
import restaurantFinder from "../axios";

export default function AddReviews() {
    const {id} = useParams()
    const {
        addReviews,
        rating,
        setRating,
        updateRating,
    } = useContext(RestaurantsContext);
    
    const [name, setName] = useState("")
    const [review, setReview] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await restaurantFinder.post("/reviews", {
            name,
            review,
            restaurant_id:id,
            rating: parseInt(rating),
        });
        console.log(response.data.insertedData);

        addReviews(response.data.insertedData);
        
        const rate = await restaurantFinder.get(`/${id}/rating`)
        updateRating(rate.data.rating)
        setRating(0)
        setReview("")
        setName("")
        } catch (error) {
        console.log(error);
        }
    };
    
    return (
        <div className="mb-2">
            <form action="">
                <div className="form-row">
                    <div className="form-group col-8">
                        <label htmlFor="name">Name</label>
                        <input className="form-control" type="text" 
                         name="name" id="name" placeholder="name"
                        value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="rating" className="pl-3">Rating</label>
                        <div id="rating" className="form-control border-0">
                        <Rating/>
                        </div>
                       
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="review">Review</label>
                    <textarea name="review" id="review"
                    value={review} onChange={(e)=>setReview(e.target.value)}
                    className="form-control"></textarea>
                </div>
                <button className="btn btn-primary"
                onClick={handleSubmit}>Add Review</button>
            </form>
        </div>
    )
}
