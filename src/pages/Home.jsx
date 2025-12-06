import React, { useState } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

// Import images
import cake1 from '../assets/cake1.png';
import cake2 from '../assets/cake2.png';
import cake3 from '../assets/cake3.png';
import cake4 from '../assets/cake4.png';
import cookies from '../assets/cookies.png';
import cupcakes from '../assets/cupcakes.png';

const Home = ({ searchTerm }) => {
    const allProducts = [
        {
            id: 1,
            title: "Red Velvet Bliss",
            price: 899,
            rating: 4.8,
            category: "Bestseller",
            image: cake1
        },
        {
            id: 2,
            title: "Royal Chocolate Truffle",
            price: 1299,
            rating: 4.9,
            category: "Premium",
            image: cake2
        },
        {
            id: 3,
            title: "Fresh Fruit Gateau",
            price: 950,
            rating: 4.7,
            category: "Seasonal",
            image: cake3
        },
        {
            id: 4,
            title: "Blueberry Cheesecake",
            price: 1400,
            rating: 4.9,
            category: "Cheesecake",
            image: cake4
        },
        {
            id: 5,
            title: "Assorted Gourmet Cookies",
            price: 450,
            rating: 4.6,
            category: "Cookies",
            image: cookies
        },
        {
            id: 6,
            title: "Pastel Dream Cupcakes (Pack of 6)",
            price: 599,
            rating: 4.8,
            category: "Cupcakes",
            image: cupcakes
        }
    ];

    // Filter products based on search term
    const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="home-page">
            <Hero />

            <section className="section featured-section" id="cakes">
                <div className="container">
                    <div className="text-center">
                        <span className="section-subtitle">Our Masterpieces</span>
                        <h2 className="section-title">Menu Highlights</h2>
                    </div>

                    <div className="products-grid">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <ProductCard key={product.id} {...product} />
                            ))
                        ) : (
                            <div className="text-center" style={{ gridColumn: '1/-1', padding: '40px' }}>
                                <p>No delicious items found matching "{searchTerm}".</p>
                            </div>
                        )}
                    </div>

                    <div className="text-center" style={{ marginTop: '4rem' }}>
                        <a href="#" className="btn btn-secondary">View Complete Menu</a>
                    </div>
                </div>
            </section>

            <section className="section about-section" style={{ background: 'var(--bg-white)', padding: '80px 0' }} id="about">
                <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
                    <div style={{ flex: 1 }}>
                        <img src={cake1} alt="About Us" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <span className="section-subtitle">Our Story</span>
                        <h2 className="section-title">Baked with Love in Bengaluru</h2>
                        <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--text-light)' }}>
                            At Danish, we believe that every celebration deserves a centerpiece that tastes as amazing as it looks.
                            Our journey started with a simple passion for baking and quality ingredients.
                        </p>
                        <p style={{ marginBottom: '30px', fontSize: '1.1rem', color: 'var(--text-light)' }}>
                            Today, we are proud to serve Bengaluru with our handcrafted pastries, cakes, and desserts.
                        </p>
                        <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
