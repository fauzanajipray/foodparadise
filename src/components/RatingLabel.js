import React from 'react'

const RatingLabel = (props) => (
    
    <div className="btn btn-sm" 
        style={{
        color: "white",
        backgroundColor: `#${props.rating_color}`,
        borderColor: `#${props.rating_color}`
        }} 
    > 
        {props.aggregate_rating} {props.rating_text}
    </div>

)

export default  RatingLabel