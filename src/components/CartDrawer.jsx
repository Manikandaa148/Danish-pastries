import React, { useState } from 'react';
import './CartDrawer.css'; // Will create this
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
    const { cartItems, isCartOpen, toggleCart, updateQuantity, removeFromCart, getCartTotal } = useCart();
    const [address, setAddress] = useState('');

    const handleWhatsAppCheckout = () => {
        if (cartItems.length === 0) return;

        const phoneNumber = "919342218062";
        const lineBreak = "%0a";

        let message = `*New Order from Website*${lineBreak}${lineBreak}`;
        message += `*Items:*${lineBreak}`;

        cartItems.forEach(item => {
            message += `- ${item.title} (x${item.quantity}): ₹${item.price * item.quantity}${lineBreak}`;
        });

        message += `${lineBreak}*Total Amount:* ₹${getCartTotal()}${lineBreak}`;
        if (address) message += `*Delivery Address:* ${address}${lineBreak}`;

        // Open WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <div className={`cart-drawer-overlay ${isCartOpen ? 'open' : ''}`} onClick={toggleCart}>
            <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
                <div className="cart-header">
                    <h2>Your Cart ({cartItems.length})</h2>
                    <button className="close-btn" onClick={toggleCart}>&times;</button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <p>Your cart is empty.</p>
                            <button onClick={toggleCart} className="btn btn-secondary">Start Shopping</button>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-img" />
                                <div className="cart-item-details">
                                    <h4>{item.title}</h4>
                                    <p className="item-price">₹{item.price}</p>
                                    <div className="qty-controls">
                                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                    </div>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>&times;</button>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Total:</span>
                            <span>₹{getCartTotal()}</span>
                        </div>

                        <div className="delivery-input">
                            <input
                                type="text"
                                placeholder="Enter delivery address (Optional)"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                        <button className="btn btn-primary checkout-btn" onClick={handleWhatsAppCheckout}>
                            Checkout on WhatsApp
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
