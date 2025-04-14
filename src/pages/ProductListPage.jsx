import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductListPage = ({ products, addToCart }) => {
  const [imgErrors, setImgErrors] = useState({});
  
  const handleImageError = (productId) => {
    setImgErrors(prev => ({
      ...prev,
      [productId]: true
    }));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Products</h2>
      
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 col-lg-3 mb-4" key={product.id}>
            <div className="card h-100">
              {imgErrors[product.id] ? (
                <div className="card-img-top d-flex align-items-center justify-content-center bg-light p-3" style={{height: '200px'}}>
                  <p className="text-muted">Image unavailable</p>
                </div>
              ) : (
                <img 
                  src={product.image} 
                  className="card-img-top p-3" 
                  alt={product.name} 
                  onError={() => handleImageError(product.id)}
                  style={{height: '200px', objectFit: 'contain'}}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted small">{product.description}</p>
                <p className="card-text fw-bold">${product.price.toFixed(2)}</p>
              </div>
              <div className="card-footer bg-white border-top-0">
                <button 
                  className="btn btn-primary w-100"
                  onClick={() => {
                    addToCart(product);
                    alert(`${product.name} added to cart!`);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
