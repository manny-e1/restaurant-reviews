import React, {useContext} from 'react'
import { RestaurantsContext } from '../context/RestaurantsContext';

export default function Rating(props) {
    const {rating,setRating} = useContext(RestaurantsContext)

    const rateSwitch = (rating)=>{
        switch (rating) {
            case 0:
               return <p>
                    <i class="far fa-star" onClick={(e)=> setRating(1)}></i>
                    <i class="far fa-star" onClick={(e)=> setRating(2)}></i>
                    <i class="far fa-star" onClick={(e)=> setRating(3)}></i>
                    <i class="far fa-star" onClick={(e)=> setRating(4)}></i>
                    <i class="far fa-star" onClick={(e)=> setRating(5)}></i>
                </p>
                break;
            case 1:
                return <p>
                    <i class="fas fa-star" onClick={(e)=> setRating(1)}></i>
                    <i class="far fa-star" onClick={(e)=> setRating(2)}></i>
                    <i class="far fa-star" onClick={(e)=> setRating(3)}></i>
                    <i class="far fa-star" onClick={(e)=> setRating(4)}></i>
                    <i class="far fa-star" onClick={(e)=> setRating(5)}></i>
                </p>
                break;
            case 2:
                return <p>
                    <i class="fas fa-star" onClick={(e)=> setRating(1)}></i>
                    <i class="fas fa-star" onClick={(e)=> setRating(2)}></i>
                    <i class="far fa-star" onClick={(e)=> setRating(3)}></i>
                    <i class="far fa-star" onClick={(e)=> setRating(4)}></i>
                    <i class="far fa-star" onClick={(e)=> setRating(5)}></i>
                </p>
                break;
            case 3:
               return <p>
                    <i class="fas fa-star" onClick={(e)=> setRating(1)}></i>
                    <i class="fas fa-star" onClick={(e)=> setRating(2)}></i>
                    <i class="fas fa-star" onClick={(e)=> setRating(3)}></i>
                    <i class="far fa-star" onClick={(e)=> setRating(4)}></i>
                    <i class="far fa-star" onClick={(e)=> setRating(5)}></i>
                </p>
                break;
            case 4:
                return <p>
                    <i class="fas fa-star" onClick={(e)=> setRating(1)}></i>
                    <i class="fas fa-star" onClick={(e)=> setRating(2)}></i>
                    <i class="fas fa-star" onClick={(e)=> setRating(3)}></i>
                    <i class="fas fa-star" onClick={(e)=> setRating(4)}></i>
                    <i class="far fa-star" onClick={(e)=> setRating(5)}></i>
                </p>
                break;
            case 5:
                return <p>
                    <i class="fas fa-star" onClick={(e)=> setRating(1)}></i>
                    <i class="fas fa-star" onClick={(e)=> setRating(2)}></i>
                    <i class="fas fa-star" onClick={(e)=> setRating(3)}></i>
                    <i class="fas fa-star" onClick={(e)=> setRating(4)}></i>
                    <i class="fas fa-star" onClick={(e)=> setRating(5)}></i>
                </p>
                break;
        
            default:
                break;
        }
    }

    return (
        <div>
            {rateSwitch(rating)}
        </div>
    )
}
