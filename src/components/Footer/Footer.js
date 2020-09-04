import React from 'react'
import './Footer.css'

const Footer = () => (
    <footer className="my-footer text-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4 text-center footer-menu">
                    <h5>About FoodParadise</h5>
                    <ul>
                        <li><a href="/#">About Us</a></li>
                        <li><a href="/#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-sm-4 text-center footer-menu">
                <h5>Support</h5>
                <ul>
                    <li><a href="/#">FAQ</a></li>
                    <li><a href="/#">Help desk</a></li>
                    <li><a href="/#">Forums</a></li>
                </ul>
                </div>
                <div className="col-sm-4 text-center footer-menu">
                <h5>Download App</h5>
                <ul>
                    <li><a href="/#">Google Play</a></li>
                    <li><a href="/#">App Store</a></li>
                </ul>
                </div>
            </div>
            <div className="social-networks">
                <a href="/#" className="twitter"><i className="fa fa-twitter"></i></a>
                <a href="/#" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="/#" className="google"><i className="fa fa-google"></i></a>
            </div>
        </div>
        <p className="footer-copyright">Copyright &copy; 2020 FoodParadise </p>
    </footer>

)

export default Footer