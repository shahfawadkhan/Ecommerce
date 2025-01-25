import React, { useState, useEffect } from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../Slices/CartSlice";
import { toggleFavorite } from "../Slices/FavoriteSlice";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import { incrementCart , incrementFav } from "../Slices/ProductSlice";

const FeaturedProduct = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((state) => state.products);
 
  const [isSliding, setIsSliding] = useState(false);


  const handleFavorite = (data) => {
    dispatch(toggleFavorite(data));
    dispatch(incrementFav())
    toast.success(`${data.title} added to favorites`);
  };

  const handleAddToCart = (data) => {
    dispatch(toggleCart(data));
    dispatch(incrementCart())
    toast.success(`${data.title} added to cart`);
  };



  return (
    <section className="max-w-7xl mx-auto py-6 px-4">
      <div className="flex flex-col md:flex-row items-start justify-between mb-8">
       
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Products</h2>
          <div className="h-1 w-20 bg-green-600 rounded-full mb-4"></div>
          
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-600" />
        </div>
      ) : (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-300 ${isSliding ? 'opacity-50' : 'opacity-100'}`}>
          {products?.slice(22,30).map((product) => (
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