import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import FeaturedProduct from './components/FeaturedProduct';
import { fetchProducts , setProduct } from './Slices/ProductSlice';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from './Pages/Home';
import { Route ,Routes} from 'react-router-dom';
import Favorite from './Pages/Favorite';
import Cart from './Pages/Cart';
import FilteredProducts from './components/FilteredProducts';
import Footer from './components/Footer';
import '@mantine/notifications/styles.css';
import Contact from './Pages/Contact';
import SignUp from './Pages/SignUp';
import ProductDetailPage from './Pages/ProductDetailsPage';
import { Navigate } from 'react-router-dom';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Ecommerce" element={<Navigate to="/Ecommerce/home" replace />} />
        <Route path='/Ecommerce/home' element={<Home />} />
        <Route path='/Ecommerce/favorite' element={<Favorite />} />
        <Route path='/Ecommerce/cart' element={<Cart />} />
        <Route path='/Ecommerce/products' element={<FilteredProducts />} />
        <Route path='/Ecommerce/contact' element={<Contact />} />
        <Route path='/Ecommerce/Signup/Login' element={<SignUp />} />
        <Route path="/Ecommerce/product/:id" element={<ProductDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
