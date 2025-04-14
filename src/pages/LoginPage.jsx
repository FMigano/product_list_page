import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      onLogin(username);
      navigate('/products');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 py-4">
      <div className="row justify-content-center w-100">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card border-0 shadow-lg">
            <div className="row g-0">
              {/* Left side - Logo/Brand */}
              <div className="col-md-5 bg-primary d-flex flex-column justify-content-center align-items-center text-white p-4">
                <i className="bi bi-shop-window" style={{ fontSize: '4rem' }}></i>
                <h2 className="mt-3 mb-2">E-Shop</h2>
                <p className="text-center mb-0">Welcome to our online store. Please login to continue shopping.</p>
              </div>
              
              {/* Right side - Login Form */}
              <div className="col-md-7">
                <div className="card-body p-4">
                  <h4 className="mb-4 text-primary text-center">User Login</h4>
                  
                  {error && (
                    <div className="alert alert-danger d-flex align-items-center" role="alert">
                      <i className="bi bi-exclamation-triangle-fill me-2"></i>
                      <div>{error}</div>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        <i className="bi bi-person me-2"></i>Username
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light">
                          <i className="bi bi-person-fill text-secondary"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder="Enter your username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          disabled={isLoading}
                          required
                          autoFocus
                        />
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <label htmlFor="password" className="form-label">
                          <i className="bi bi-lock me-2"></i>Password
                        </label>
                        <Link to="/forgot-password" className="text-primary small text-decoration-none">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="input-group">
                        <span className="input-group-text bg-light">
                          <i className="bi bi-lock-fill text-secondary"></i>
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          disabled={isLoading}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        disabled={isLoading}
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    
                    <div className="d-grid gap-2">
                      <button 
                        type="submit" 
                        className="btn btn-primary py-2" 
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Logging In...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-box-arrow-in-right me-2"></i>
                            Login
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                  
                  <div className="text-center mt-4">
                    <p className="mb-0">
                      Don't have an account? <Link to="/signup" className="text-primary fw-bold text-decoration-none">Sign up</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
