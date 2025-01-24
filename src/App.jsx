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
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Navbar />
      <Routes >
      <Route path='/' element = {<Home />} />
      <Route path='/favorite' element = {<Favorite />} />
      <Route path='/cart' element = {<Cart />} />
      <Route path='/products' element = {<FilteredProducts />} />
      <Route path='/contact' element = {<Contact />} />
      <Route path='/Signup/Login' element = {<SignUp />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />

      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
