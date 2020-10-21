import React, {useState} from 'react'

export default function Rated({rated}) {
    const stars = []
    for (let i = 1;i <= 5;i++){
        if (i <= rated){
            stars.push(<i class="fas fa-star text-warning"></i>)
        }else if (i === Math.ceil(rated) && !Number.isInteger(rated)){
            stars.push(<i class="fas fa-star-half-alt text-warning"></i>)
        }else{
            stars.push(<i class="far fa-star text-warning"></i>)
        }

    }
    return (
        <div>
            {stars}
        </div>
    )
}
