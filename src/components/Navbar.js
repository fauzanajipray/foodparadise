import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top ">
        <Link className="navbar-brand" to="/">
            FoodParedise
        </Link>
    </div>
)

export default Navbar;