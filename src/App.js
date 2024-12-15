import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CartPage from './components/CartPage';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import ProductPage from './components/ProductPage';
import SearchPage from './components/SearchPage';
import SignupPage from './components/SignupPage';
import WishlistPage from './components/WishlistPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ProductPage" element={<ProductPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;

