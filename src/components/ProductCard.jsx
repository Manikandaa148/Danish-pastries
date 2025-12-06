import React, { useContext } from 'react';
import './ProductCard.css';
import { useCart } from '../context/CartContext';

const ProductCard = ({ id, image, title, price, rating, category }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({ id, image, title, price, rating, category });
    };

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={image} alt={title} className="product-image" />
                <span className="product-category">{category}</span>
                <button className="wishlist-btn" aria-label="Add to wishlist">♥</button>
            </div>
            <div className="product-info">
                <div className="product-rating">
                    <span className="star">★</span> {rating}
                </div>
                <h3 className="product-title">{title}</h3>
                <div className="product-bottom">
                    <span className="product-price">₹{price}</span>
                    <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
