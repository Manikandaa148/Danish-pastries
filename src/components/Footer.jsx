import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h2 className="footer-logo">Danish<span>.</span></h2>
                        <p>Crafting moments of joy with our premium, artisanal pastries since 2010.</p>
                    </div>
                    <div className="footer-links">
                        <h3>Shop</h3>
                        <ul>
                            <li><a href="#">Cakes</a></li>
                            <li><a href="#">Cookies</a></li>
                            <li><a href="#">Desserts</a></li>
                            <li><a href="#">Hampers</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>Bengaluru, Karnataka</p>
                        <p>+91 93422 18062</p>
                        <p>danishpastries29@gmail.com</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Danish Pastry. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
