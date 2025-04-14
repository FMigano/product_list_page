import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import productData from '../data/products'; // Import the products data

function App() {
  const [products] = useState(productData); // Use the imported data
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      ));
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  return (
    <Router>
      <div className="app-container">
        <NavBar cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} isLoggedIn={isLoggedIn} username={username} />
        
        <Routes>
          <Route path="/" element={isLoggedIn ? <ProductListPage products={products} addToCart={addToCart} /> : <Navigate to="/login" />} />
          <Route path="/signup" element={<SignupPage onSignup={handleLogin} />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/products" element={isLoggedIn ? <ProductListPage products={products} addToCart={addToCart} /> : <Navigate to="/login" />} />
          <Route path="/cart" element={isLoggedIn ? <CartPage cartItems={cartItems} removeFromCart={removeFromCart} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
