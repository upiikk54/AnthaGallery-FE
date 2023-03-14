import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPages/LandingPage';
import CategoryProductPage from './Pages/CategoryProductPages/CategoryProductPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/category" element={<CategoryProductPage />} />
    </Routes>
  </Router>
);
