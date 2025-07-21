import React from 'react'
import { useCart } from '../context/CartContext'

const Cart = ({ onClose }) => {
    const { cartItems, cartTotal, removeFromCart, updateQuantity, clearCart } = useCart()


    return (
        <div
            data-node-type="commerce-cart-container"
            role="dialog"
            className="w-commerce-commercecartcontainer cart-container"
            style={{
                transition: "all, transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                transform: "translateX(0px)",
                height: "100%",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <div className="w-commerce-commercecartheader">
                <h4 className="w-commerce-commercecartheading">Your Cart</h4>
                <a
                    className="w-commerce-commercecartcloselink w-inline-block"
                    role="button"
                    aria-label="Close cart"
                    data-node-type="commerce-cart-close-link"
                    onClick={onClose}
                    style={{ cursor: 'pointer' }}
                >
                    <svg width="16px" height="16px" viewBox="0 0 16 16">
                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g fillRule="nonzero" fill="#333333">
                                <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8" />
                            </g>
                        </g>
                    </svg>
                </a>
            </div>
            <div className="w-commerce-commercecartformwrapper" style={{ flex: 1, overflow: 'auto' }}>
                <form
                    style={{}}
                    className="w-commerce-commercecartform"
                    data-node-type="commerce-cart-form"
                >
                    <div
                        className="w-commerce-commercecartlist"
                        data-wf-collection="database.commerceOrder.userItems"
                        data-wf-template-id="wf-template-5a5459de-ecb3-cb62-b9cf-51a6875e33bc"
                    >
                        {cartItems.length === 0 ? (
                            <div className="w-commerce-commercecartemptystate">
                                <div aria-label="This cart is empty" aria-live="polite">
                                    No items found.
                                </div>
                                
                            </div>
                        ) : (
                            <>
                                {cartItems.map((item) => (
                                    <div key={item.id} className="w-commerce-commercecartitem">
                                        <img
                                            src={item.image || "https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b5fee6b82b615546f3ac2_Argentina%20Four.webp"}
                                            alt={item.name}
                                            className="w-commerce-commercecartitemimage"
                                        />
                                        <div className="w-commerce-commercecartiteminfo">
                                            <div className="w-commerce-commercecartproductname heading-style-h6">
                                                {item.name}
                                            </div>
                                            <div className="w-commerce-commercecartordervalue">
                                                ${item.price.toFixed(2)} USD
                                            </div>
                                            <a
                                                href="#"
                                                role="button"
                                                className="w-inline-block"
                                                onClick={() => removeFromCart(item.id)}
                                                aria-label="Remove item from cart"
                                            >
                                                <div className="body-small-text">Remove</div>
                                            </a>
                                        </div>
                                        <input
                                            aria-label="Update quantity"
                                            className="w-commerce-commercecartquantity"
                                            required=""
                                            pattern="^[0-9]+$"
                                            inputMode="numeric"
                                            type="number"
                                            name="quantity"
                                            autoComplete="off"
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                                            min="1"
                                        />
                                    </div>
                                ))}
                                <div style={{ padding: '10px', textAlign: 'center' }}>
                                    <button
                                        type="button"
                                        onClick={clearCart}
                                        style={{
                                            background: 'none',
                                            border: '1px solid #ccc',
                                            padding: '8px 16px',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            color: '#666',
                                            marginRight: '10px'
                                        }}
                                    >
                                        Clear All Items
                                    </button>
                                    {/* Debug button */}
                                    
                                </div>
                            </>
                        )}
                    </div>
                    <div className="w-commerce-commercecartfooter">
                        <div
                            aria-atomic="true"
                            aria-live="polite"
                            className="w-commerce-commercecartlineitem"
                        >
                            <div>Subtotal</div>
                            <div className="w-commerce-commercecartordervalue heading-style-h6">
                                ${cartTotal.toFixed(2)} USD
                            </div>
                        </div>
                        <div>
                            <a
                                href="#"
                                value="Continue to Checkout"
                                className="w-commerce-commercecartcheckoutbutton button"
                                data-loading-text="Hang Tight..."
                                data-node-type="cart-checkout-button"
                            >
                                Continue to Checkout
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cart
