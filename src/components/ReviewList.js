import React from 'react'
import Review from './Review';

const ReviewList = (props) => (
    <div className="col-12" style={{marginBottom: 20}} >
        <div className="card">
            <div className="card-body">
                <h4 className="text-success" style={{fontWeight: 800}}>Reviews</h4>
                {props.reviews ? (
                    props.reviews.map( ({review}) => (
                    <Review key={review.id} review={review} />
                ))) : ( <p>Loading ..</p>)} 
            </div>
        </div>
    </div>
)

export default ReviewList;