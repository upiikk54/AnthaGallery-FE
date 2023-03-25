import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/system';
import { Theme } from './Theme/Theme';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPages/LandingPage';
import CategoryProductPage from './Pages/CategoryProductPages/CategoryProductPage';
import DetailProductPages from './Pages/DetailProductPages/DetailProductPages';
import CategoryAdmin from './Pages/Admin/CategoryPages/CategoryAdmin';
import ProductAdmin from './Pages/Admin/ProductPages/ProductAdmin';
import AddCategoryAdmin from './Pages/Admin/CategoryPages/AddCategoryAdmin';
import UpdateCategoryAdmin from './Pages/Admin/CategoryPages/UpdateCategoryAdmin';
import AddProductAdmin from './Pages/Admin/ProductPages/AddProductAdmin';
import UpdateProductAdmin from './Pages/Admin/ProductPages/UpdateProductAdmin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={Theme}>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category" element={<CategoryProductPage />} />
        <Route path="/detail-product" element={<DetailProductPages />} />
        <Route path="/admin/dashboard" element={<CategoryAdmin />} />
        <Route path="/admin/product" element={<ProductAdmin />} />
        <Route path="/admin/dashboard/add-category" element={<AddCategoryAdmin />} />
        <Route path="/admin/dashboard/update-category" element={<UpdateCategoryAdmin />} />
        <Route path="/admin/product/add-product" element={<AddProductAdmin />} />
        <Route path="/admin/product/update-product" element={<UpdateProductAdmin />} />
      </Routes>
    </Router>
  </ThemeProvider>
);
