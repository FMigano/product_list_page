import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS for navbar toggle functionality
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const NavBar = ({ cartCount, isLoggedIn, username }) => {
  // Initialize Bootstrap components after render
  useEffect(() => {
    // This ensures Bootstrap JS is properly initialized for navbar toggle
    const bootstrap = window.bootstrap;
    if (bootstrap) {
      // Initialize any Bootstrap components that need JS
      const dropdowns = document.querySelectorAll('.dropdown-toggle');
      dropdowns.forEach(dropdown => {
        new bootstrap.Dropdown(dropdown);
      });
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-shop me-2"></i>E-Shop
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">Your Cart</Link>
                </li>
              </>
            )}
          </ul>
          
          <div className="d-flex align-items-center">
            {isLoggedIn ? (
              <>
                <div className="dropdown d-none d-lg-block me-3">
                  <button 
                    className="btn btn-dark dropdown-toggle" 
                    type="button" 
                    id="userMenu" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                  >
                    <span className="text-light">Welcome, {username}</span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                    <li><Link className="dropdown-item" to="/orders">Orders</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/login">Logout</Link></li>
                  </ul>
                </div>
                
                <Link 
                  className="btn btn-warning position-relative me-2" 
                  to="/cart"
                >
                  <i className="bi bi-cart-fill me-1"></i>Cart
                  {cartCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartCount}
                      <span className="visually-hidden">items in cart</span>
                    </span>
                  )}
                </Link>
                
                <Link className="btn btn-outline-light d-none d-lg-block" to="/login">Logout</Link>
                <span className="d-block d-lg-none text-light ms-3">{username}</span>
              </>
            ) : (
              <>
                <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
                <Link className="btn btn-light" to="/signup">Sign up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
