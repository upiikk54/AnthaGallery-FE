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
import { Provider } from 'react-redux';
import store from './Redux/store';
import { SnackbarProvider } from 'notistack';
import ArchivesPageAdmin from './Pages/Admin/ArchivesPages/ArchivesPageAdmin';
import HistoryChatPage from './Pages/Admin/HistoryChatUsersPages/HistoryChatPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={Theme}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/category/:id" element={<CategoryProductPage />} />
              <Route path="/detail-product/:id" element={<DetailProductPages />} />
              <Route path="/admin/dashboard" element={<CategoryAdmin />} />
              <Route path="/admin/product" element={<ProductAdmin />} />
              <Route path="/admin/archives" element={<ArchivesPageAdmin />} />
              <Route path="/admin/history-chat" element={<HistoryChatPage />} />
              <Route path="/admin/dashboard/add-category" element={<AddCategoryAdmin />} />
              <Route path="/admin/dashboard/update-category/:id" element={<UpdateCategoryAdmin />} />
              <Route path="/admin/product/add-product" element={<AddProductAdmin />} />
              <Route path="/admin/product/update-product/:id" element={<UpdateProductAdmin />} />
            </Routes>
        </ThemeProvider>
      </SnackbarProvider>
      </Router>
  </Provider>
);
