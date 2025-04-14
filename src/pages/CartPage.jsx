import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartPage = ({ cartItems, removeFromCart }) => {
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  
  if (cartItems.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>Your Cart is Empty</h2>
        <p className="mt-3">Looks like you haven't added any products to your cart yet.</p>
        <Link to="/products" className="btn btn-primary mt-3">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Your Shopping Cart</h2>
      
      <div className="row">
        <div className="col-lg-8">
          {cartItems.map(item => (
            <div className="card mb-3" key={item.id}>
              <div className="row g-0">
                <div className="col-md-2">
                  <img 
                    src={item.image} 
                    className="img-fluid rounded-start p-2" 
                    alt={item.name}
                    style={{ maxHeight: "100px", objectFit: "contain" }}
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text text-muted small mb-0">{item.description}</p>
                    <div className="d-flex align-items-center mt-2">
                      <p className="card-text mb-0"><small className="text-muted">Quantity: {item.quantity}</small></p>
                      <p className="card-text mb-0 ms-3"><small className="text-muted">Price: ${item.price.toFixed(2)}</small></p>
                      <p className="card-text mb-0 ms-3 fw-bold">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <button 
                    className="btn btn-outline-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <span>Items ({cartItems.reduce((total, item) => total + item.quantity, 0)}):</span>
                <span>${totalAmount}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3 fw-bold">
                <span>Total:</span>
                <span>${totalAmount}</span>
              </div>
              <button className="btn btn-success w-100">Proceed to Checkout</button>
              <Link to="/products" className="btn btn-outline-secondary w-100 mt-2">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
