import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../Slices/FavoriteSlice";
import { toast } from 'react-toastify';

const Favorite = () => {
  const state = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  const handleFavorite = (data) => {
    dispatch(toggleFavorite(data));
  };

  const handleCart = (product) => {
    toast.success("Adding to cart:" + product.title);
  };

  if (!state?.favoriteProducts?.length) {
    return (
      <div className="px-12 py-16 text-center bg-white">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">No Favorite Products</h2>
        <p className="text-black">Click the heart icon on products to add them to your favorites.</p>
      </div>
    );
  }

  return (
    <div className="px-12 py-8 flex flex-col gap-8 bg-white">
      <h1 className="text-3xl font-bold text-green-900">My Favorites</h1>
      
      {state.favoriteProducts.map((product) => (
        <div
          className="w-full flex flex-col md:flex-row gap-6 md:h-[16rem] border border-green-700 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow bg-white"
          key={product.id}
        >
          <div className="w-full md:w-[20%] h-[200px] md:h-full">
            <img 
              src={product.images?.[0]} 
              className="w-full h-full object-contain rounded-md" 
              alt={product.name || 'Product image'} 
            />
          </div>
          
          <div className="w-full md:w-[70%] flex flex-col justify-center gap-3">
            <h2 className="text-2xl md:text-4xl font-bold text-green-900 capitalize">
              {product.name}
            </h2>
            
            <div className="flex gap-5 items-center">
              <span className="text-xl font-semibold text-green-700">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="line-through text-black">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            
            <p className="text-black line-clamp-3">
              {product.description || 'No description available'}
            </p>
            
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => handleFavorite(product)}
                className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-md hover:bg-green-100 transition-colors"
              >
                <FaHeart className="text-green-700 text-xl" />
                <span className="text-green-800">Remove from Favorites</span>
              </button>
              
              <button
                onClick={() => handleCart(product)}
                className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-5 border border-black border-opacity-10 rounded-md hover:bg-black hover:bg-opacity-10 transition-colors"
              >
                <CiShoppingCart className="text-black text-xl" />
                <span className="text-black">Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorite;