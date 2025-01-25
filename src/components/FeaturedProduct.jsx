import React, { useState, useEffect } from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../Slices/CartSlice";
import { toggleFavorite } from "../Slices/FavoriteSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { incrementCart } from "../Slices/ProductSlice";
import { incrementFav } from "../Slices/ProductSlice";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const FeaturedProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((state) => state.products);
  const [startIndex, setStartIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });
  const [isSliding, setIsSliding] = useState(false);
  const productsToShow = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (totalSeconds < 0) {
          return { hours: 24, minutes: 0, seconds: 0 };
        }
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleFavorite = (data) => {
    dispatch(toggleFavorite(data));
    dispatch(incrementFav())
    toast.success(`${data.title} added to favorites`);
  };

  const handleAddToCart = (data) => {
    dispatch(toggleCart(data));
    dispatch(incrementCart());
    toast.success(`${data.title} added to cart`);
  };

  const handleNext = () => {
    if (startIndex + productsToShow < products?.length) {
      setIsSliding(true);
      setStartIndex(startIndex + productsToShow);
      setTimeout(() => setIsSliding(false), 300);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setIsSliding(true);
      setStartIndex(startIndex - productsToShow);
      setTimeout(() => setIsSliding(false), 300);
    }
  };

  const TimerUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-green-600 text-white px-2 py-1 rounded-md shadow-sm">
        <span className="text-sm font-bold font-mono">{String(value).padStart(2, '0')}</span>
      </div>
      <span className="text-[10px] text-gray-600 mt-1 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto py-6 px-4 mt-3">
      <div className="flex items-center justify-between mb-8 max-sm:flex-col max-sm:space-y-2">
  <div className="flex items-center space-x-4 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2 max-sm:items-start">
    <h2 className="text-2xl font-bold text-gray-900 mr-4 max-sm:mr-0">Featured Products</h2>
    <div className="flex items-center bg-gradient-to-r from-green-50 to-green-100 px-4 py-2 rounded-full shadow-md max-sm:w-full max-sm:justify-between">
      <div className="flex items-center space-x-2 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-1 max-sm:w-full max-sm:items-center">
        <div className="text-xs font-medium text-green-800 mr-2 max-sm:mr-0">Flash Sale</div>
        <div className="flex items-center space-x-1 max-sm:space-x-2">
          <div className="bg-green-600 text-white px-2 py-1 rounded-md text-sm font-bold w-10 text-center">
            {String(timeRemaining.hours).padStart(2, '0')}
          </div>
          <span className="text-green-600 font-bold max-sm:hidden">:</span>
          <div className="bg-green-600 text-white px-2 py-1 rounded-md text-sm font-bold w-10 text-center">
            {String(timeRemaining.minutes).padStart(2, '0')}
          </div>
          <span className="text-green-600 font-bold max-sm:hidden">:</span>
          <div className="bg-green-600 text-white px-2 py-1 rounded-md text-sm font-bold w-10 text-center">
            {String(timeRemaining.seconds).padStart(2, '0')}
          </div>
        </div>
        <div className="text-xs text-green-700 ml-2 max-sm:ml-0">Ends Soon</div>
      </div>
    </div>
  </div>

  <div className="flex gap-3">
    <button
      onClick={handlePrev}
      disabled={startIndex === 0}
      className={`transition-all duration-300 p-3 rounded-full shadow-lg ${
        startIndex === 0
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-white text-green-600 hover:bg-green-600 hover:text-white hover:scale-110"
      }`}
    >
      <FaChevronLeft className="w-6 h-6" />
    </button>
    <button
      onClick={handleNext}
      disabled={startIndex + productsToShow >= (products?.length || 0)}
      className={`transition-all duration-300 p-3 rounded-full shadow-lg ${
        startIndex + productsToShow >= (products?.length || 0)
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-white text-green-600 hover:bg-green-600 hover:text-white hover:scale-110"
      }`}
    >
      <FaChevronRight className="w-6 h-6" />
    </button>
  </div>
</div>

      {isLoading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-600" />
        </div>
      ) : (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-300 ${isSliding ? 'opacity-50' : 'opacity-100'}`}>
          {products?.slice(startIndex, startIndex + productsToShow).map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-square bg-gray-50">
                <img
                  src={product.images?.[0] || product.image}
                  alt={product.title}
                  className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <button
                    onClick={() => handleFavorite(product)}
                    className="p-3 bg-white rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-all duration-200 transform hover:scale-110"
                  >
                    <CiHeart className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="p-3 bg-white rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-all duration-200 transform hover:scale-110"
                  >
                    <CiShoppingCart className="w-6 h-6" />
                  </button>
                </div>
                <div className="absolute bottom-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  ${product.price}
                </div>
              </div>
              
              <div className="p-4">
                <div className="text-xs font-medium text-green-600 mb-2 uppercase tracking-wide">
                  {product.category?.name || product.category}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2 min-h-[3.5rem]">
                  {product.title}
                </h3>
                <button
                  onClick={() => navigate(`/Ecommerce/product/${product.id}`)}
                  className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-green-600 transition-all duration-200 text-sm font-medium"
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedProduct;