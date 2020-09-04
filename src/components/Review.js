import React from 'react'
import RatingLabel from './RatingLabel'

const Review = (props) => (
    <div className="card border-success mb-1" >
        <div className="card-body" style={{padding: 0}}>
            <div className="row" style={{margin: "20px"}}>
                <div className="col-1 text-center" style={{border: "0px solid black", padding:0}}>
                    <img className="img-responsive" src={`${props.review.user.profile_image}`} style={{borderRadius: "50%" , width: "100vw",maxWidth: "100%", minWidth: 30 ,textAlign: "left"}} alt="" />
                </div>
                <div className="col-11" style={{border: "0px solid black"}}>
                    <h6>{props.review.user.name}</h6>
                    <RatingLabel 
                        aggregate_rating={props.review.user.foodie_level_num}
                        rating_color={props.review.user.foodie_color}
                        rating_text={props.review.user.foodie_level} 
                    />
                </div>
            </div>
            <div className="" style={{margin: "20px"}}>
                <h6 className="text-muted">{props.review.review_time_friendly}</h6>
                <RatingLabel 
                     aggregate_rating={props.review.rating}
                     rating_color={props.review.rating_color}
                     rating_text={props.review.rating_text} 
                />
                <p className="card-text mt-2">
                    {props.review.review_text}
                </p>
            </div>
        </div>
    </div>
)

export default Review