import React from 'react'
import RatingLabel from './RatingLabel';

const RestaurantProfile = (props) => (
    <div className="col-12" style={{marginBottom: 20}} >
        <div className="card">
            <div className="card-header">
                <div className="row">
                <div className="col">
                    { props.restaurant ? (
                    <>
                        <h4 className="text-success">
                        {props.restaurant.name}
                        </h4>
                        <h6 style={{fontWeight: 600}}>
                        { props.restaurant.location.locality }
                        </h6>
                        <h6 className="text-muted">
                        {props.restaurant.location.address} }
                        </h6>
                    </>
                    ) : ( <p>Loading ...</p> ) }
                </div>
                </div>
            </div>
            <div className="card-body">
                { props.restaurant ? (
                <div className="row">
                    <div className="col-12 col-md-6">
                    <img className="img-responsive" src={props.restaurant.featured_image} alt="" style={{borderRadius: 5, width: "100%"}} />
                    </div>
                    <div className="col-12 col-md-6">
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>Rating</td>
                            <td>
                                <RatingLabel 
                                    aggregate_rating={props.restaurant.user_rating.aggregate_rating}
                                    rating_color={props.restaurant.user_rating.rating_color}
                                    rating_text={props.restaurant.user_rating.rating_text} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Cuisines</td>
                            <td>{props.restaurant.cuisines}</td>
                        </tr>
                        <tr>
                            <td>Cost for two</td>
                            <td>{props.restaurant.currency + ' ' + props.restaurant.average_cost_for_two }</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                ) : ( <p>Loading ... </p>) }
            </div>
        </div>
  </div>
  
) 

export default RestaurantProfile;