import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero.png';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <div className="hero-content animate-fade-in">
                    <span className="hero-subtitle">Premium Handcrafted Pastries</span>
                    <h1 className="hero-title">Experience the <br />Taste of Luxury</h1>
                    <p className="hero-description">
                        Artisanal cakes and desserts made with the finest ingredients.
                        Perfect for your special moments.
                    </p>
                    <div className="hero-buttons">
                        <a href="#cakes" className="btn btn-primary">Order Now</a>
                        <a href="#about" className="btn btn-secondary">Our Menu</a>
                    </div>
                </div>
                <div className="hero-image-wrapper animate-fade-in">
                    <img src={heroImage} alt="Delicious Chocolate Cake" className="hero-image" />
                    <div className="hero-badge">
                        <span>Best Seller</span>
                        <small>Chocolate Truffle</small>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
