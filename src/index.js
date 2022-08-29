import React from 'react';
import ReactDOM from 'react-dom/client';
import { lazy, Suspense } from 'react';
import { AuthProvider } from './views/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./views/HomePage"
import OrderSummary from './views/OrderSummary';
import NotFound from './views/NotFound';
import FeaturedProduct from './views/FeaturedProducts';
import NewProduct from './views/NewProducts';
import Products from './views/Products';
import Users from './views/Users';
import UserDetails from './views/UserDetails';
import Admin from './views/Admin';
import Profile from './views/Profile';
import Login from './views/Login';
import RequiredAuth from './views/RequiredAuth';
import App from './App';
import './index.css';

const LazyAbout = lazy(() => import('./views/AboutPage'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={
              <Suspense fallback="Loading...">
                <LazyAbout />
              </Suspense>
            }>
            </Route>
            <Route path="order-summary" element={<OrderSummary />}></Route>
            <Route path="products" element={<Products />}>
              <Route index element={<FeaturedProduct />} />
              <Route path="featured" element={<FeaturedProduct />} />
              <Route path="new" element={<NewProduct />} />
            </Route>
            <Route path="users" element={<Users />}>
              <Route path=":userId" element={<UserDetails />}></Route>
              <Route path="admin" element={<Admin />}></Route>
            </Route>
            <Route path="profile" 
              element={
                <RequiredAuth>
                  <Profile />
                </RequiredAuth>
              }>
            </Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="*" element={<NotFound />}></Route>          
          </Route>          
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
