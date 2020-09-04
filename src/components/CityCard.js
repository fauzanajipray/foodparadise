import React from 'react'
import {Link} from 'react-router-dom'

const CityCard = (props) => (
    <div className=" col-md-4 col-12">
        <div className="mb-3 card bg-light">
            <div className="card-body">
                <h3 className="card-title">{props.city.name}</h3>
                <p>{props.city.country_name}</p>
                <Link to={`/city/${props.city.id}`} className="card-text">
                See restaurant in {props.city.name}
                </Link>
            </div>
        </div>
    </div>
)

export default CityCard;