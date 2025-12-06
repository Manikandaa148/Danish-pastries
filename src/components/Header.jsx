import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = ({ onSearch }) => { // Accept onSearch prop
    const [scrolled, setScrolled] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const { cartItems, toggleCart } = useCart();

    const bakeryKeywords = [
        "Cakes", "Pastries", "Cookies", "Cupcakes", "Cheesecake",
        "Red Velvet", "Chocolate Truffle", "Fruit Cake", "Birthday Cake",
        "Wedding Cake", "Croissant", "Donuts", "Muffins", "Brownies",
        "Macarons", "Tarts", "Pie", "Baguette", "Sourdough", "Gluten Free",
        "Vegan Cakes", "Black Forest", "Pineapple Cake", "Butterscotch",
        "Vanilla", "Strawberry", "Blueberry", "Custom Cakes", "Anniversary"
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term);

        if (term.length > 0) {
            const filtered = bakeryKeywords.filter(keyword =>
                keyword.toLowerCase().includes(term.toLowerCase())
            );
            setSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        onSearch(suggestion);
        setShowSuggestions(false);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <div className="brand-section">
                    <div className="logo">
                        <a href="/">Danish<span>.</span></a>
                    </div>
                    {/* Location Badge */}
                    <div className="location-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <span>Bengaluru</span>
                    </div>
                </div>

                <nav className="nav-menu">
                    <ul>
                        <li><a href="#home" className="active">Home</a></li>
                        <li><a href="#cakes">Menu</a></li>
                        <li><a href="#desserts">Desserts</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <div className={`search-container ${showSearch ? 'active' : ''}`}>
                        <div className="search-wrapper">
                            <input
                                type="text"
                                placeholder="Search cakes, cookies..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                onFocus={() => searchTerm && setShowSuggestions(true)}
                                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                className="search-input"
                            />
                            {showSuggestions && suggestions.length > 0 && (
                                <ul className="search-suggestions">
                                    {suggestions.map((suggestion, index) => (
                                        <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                            {suggestion}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <button className="icon-btn" onClick={() => setShowSearch(!showSearch)} aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </button>
                    </div>

                    <button className="icon-btn cart-btn" onClick={toggleCart} aria-label="Cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
