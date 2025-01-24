import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { toggleCart, updateQuantity } from "../Slices/CartSlice";

const Cart = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (product) => {
    dispatch(toggleCart(product));
  };

  const handleIncreaseQuantity = (product) => {
    dispatch(updateQuantity({ 
      ...product, 
      quantity: (product.quantity || 1) + 1 
    }));
  };

  const handleDecreaseQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch(updateQuantity({ 
        ...product, 
        quantity: product.quantity - 1 
      }));
    } else {
      dispatch(toggleCart(product));
    }
  };

  const calculateTotal = (price, quantity = 1) => {
    return (price * quantity).toFixed(2);
  };

  if (!cartProducts?.length) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] px-10 bg-white">
        <div className="text-6xl text-green-300 mb-4">🛒</div>
        <h2 className="text-2xl font-semibold text-green-800 mb-2">Your cart is empty</h2>
        <p className="text-black">Add some products to your cart to see them here.</p>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 py-8 max-w-7xl mx-auto bg-white">
      <h1 className="text-3xl font-bold text-green-900 mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col gap-6">
        <div className="hidden md:flex border-b pb-2 text-black font-semibold">
          <div className="w-2/5">Product</div>
          <div className="w-1/5 text-center">Price</div>
          <div className="w-1/5 text-center">Quantity</div>
          <div className="w-1/5 text-right">Total</div>
        </div>

        {cartProducts.map((product) => (
          <div 
            key={product.id}
            className="flex flex-col md:flex-row items-center border border-green-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <div className="w-full md:w-2/5 flex items-center gap-6 mb-4 md:mb-0">
              <div className="w-48 h-48 flex-shrink-0 rounded-md overflow-hidden">
                <img 
                  src={product.images?.[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <h2 className="font-semibold text-xl text-green-900 mb-2">{product.name}</h2>
                <p className="text-black text-sm line-clamp-2 max-w-xs">
                  {product.description || 'No description available'}
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/5 text-center mb-4 md:mb-0">
              <span className="text-black font-semibold">${product.price}</span>
            </div>

            <div className="w-full md:w-1/5 flex justify-center items-center gap-3 mb-4 md:mb-0">
              <button 
                onClick={() => handleDecreaseQuantity(product)}
                className="p-1 bg-green-50 rounded-full border border-green-200"
              >
                <FiMinus className="w-4 h-4 text-green-800" />
              </button>
              <span className="w-12 text-center font-semibold text-black">
                {product.quantity || 1}
              </span>
              <button 
                onClick={() => handleIncreaseQuantity(product)}
                className="p-1 bg-green-50 rounded-full border border-green-200"
              >
                <FiPlus className="w-4 h-4 text-green-800" />
              </button>
            </div>

            <div className="w-full md:w-1/5 flex justify-between md:justify-end items-center gap-4">
              <span className="font-semibold text-green-700">
                ${calculateTotal(product.price, product.quantity)}
              </span>
              <button
                onClick={() => handleRemoveItem(product)}
                className="p-2 text-black hover:bg-green-50 rounded-full transition-colors"
              >
                <FiTrash2 />
              </button>
            </div>
          </div>
        ))}

        <div className="mt-8 border-t pt-6">
          <div className="flex justify-end">
            <div className="w-full md:w-1/3">
              <div className="flex justify-between mb-4">
                <span className="text-black">Subtotal</span>
                <span className="font-semibold text-black">
                  ${cartProducts.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0).toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;