import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartProducts } = useSelector((state) => state.cart);
  const { addFav } = useSelector((state) => state.products); 
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkStyle = ({ isActive }) => `
    hover:text-green-600 cursor-pointer transition-all duration-300 font-medium relative group
    ${isActive ? 'text-green-600' : 'text-gray-800'}
  `;

  const navLinkUnderlineStyle = ({ isActive }) => `
    absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300
    ${isActive ? 'w-full' : 'w-0'}
    group-hover:w-full
  `;

  return (
    <nav className="w-full bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="px-6 py-4 md:h-20 mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          <h1 className="bg-gradient-to-r from-green-600 to-black bg-clip-text text-transparent font-bold text-2xl">
          ShopNow          </h1>

          <ul className="hidden lg:flex gap-8 items-center text-gray-800">
            <NavLink to={"/Ecommerce/home"} className={navLinkStyle}>
              {({ isActive }) => (
                <>
                  <span>Home</span>
                  <span className={navLinkUnderlineStyle({ isActive })}></span>
                </>
              )}
            </NavLink>
            <NavLink to={"/Ecommerce/contact"} className={navLinkStyle}>
              {({ isActive }) => (
                <>
                  <span>Contact</span>
                  <span className={navLinkUnderlineStyle({ isActive })}></span>
                </>
              )}
            </NavLink>
            <NavLink to={"/Ecommerce/products"} className={navLinkStyle}>
              {({ isActive }) => (
                <>
                  <span>Products</span>
                  <span className={navLinkUnderlineStyle({ isActive })}></span>
                </>
              )}
            </NavLink>
            <NavLink to={"/Ecommerce/Signup/Login"} className={navLinkStyle}>
              {({ isActive }) => (
                <>
                  <span>Sign Up</span>
                  <span className={navLinkUnderlineStyle({ isActive })}></span>
                </>
              )}
            </NavLink>
          </ul>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center border border-gray-200 p-2.5 rounded-xl bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group">
              <input 
                type="search" 
                placeholder="What are you looking for?"
                className="w-[250px] focus:outline-none text-gray-900 placeholder-gray-400 bg-transparent"
              />
              <AiOutlineSearch className="w-5 h-5 text-gray-400 group-hover:text-gray-600 cursor-pointer transition-colors duration-300" />
            </div>
            <div className="flex gap-6">
              <Link to={"/Ecommerce/favorite"}>
                <div className="relative group">
                  <AiOutlineHeart 
                    className="w-6 h-6 cursor-pointer text-gray-700 hover:text-green-600 transition-all duration-300 transform group-hover:scale-110"
                  />
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {addFav}
                  </span>
                </div>
              </Link>
              <Link to={"/Ecommerce/cart"}>
                <div className="relative group">
                  <AiOutlineShoppingCart 
                    className="w-6 h-6 cursor-pointer text-gray-700 hover:text-green-600 transition-all duration-300 transform group-hover:scale-110"
                  />
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {cartProducts.length}
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-800 hover:text-green-600 transition-all duration-300"
          >
            {isOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <AiOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-6 py-6 border-t border-gray-100">
            <div className="flex items-center border border-gray-200 p-2.5 rounded-xl bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 mb-6">
              <input 
                type="search" 
                placeholder="What are you looking for?"
                className="flex-1 focus:outline-none text-gray-900 placeholder-gray-400 bg-transparent"
              />
              <AiOutlineSearch className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors duration-300" />
            </div>

            <ul className="flex flex-col gap-6 text-gray-800">
              <NavLink to="/" className="block">
                {({ isActive }) => (
                  <li className={`
                    hover:text-green-600 cursor-pointer transform transition-all duration-300 hover:translate-x-2 font-medium
                    ${isActive ? 'text-green-600' : ''}
                  `}>
                    Home
                  </li>
                )}
              </NavLink>
              <NavLink to="/contact" className="block">
                {({ isActive }) => (
                  <li className={`
                    hover:text-green-600 cursor-pointer transform transition-all duration-300 hover:translate-x-2 font-medium
                    ${isActive ? 'text-green-600' : ''}
                  `}>
                    Contact
                  </li>
                )}
              </NavLink>
              <NavLink to="/products" className="block">
                {({ isActive }) => (
                  <li className={`
                    hover:text-green-600 cursor-pointer transform transition-all duration-300 hover:translate-x-2 font-medium
                    ${isActive ? 'text-green-600' : ''}
                  `}>
                    Products
                  </li>
                )}
              </NavLink>
              <NavLink to="/Signup/Login" className="block">
                {({ isActive }) => (
                  <li className={`
                    hover:text-green-600 cursor-pointer transform transition-all duration-300 hover:translate-x-2 font-medium
                    ${isActive ? 'text-green-600' : ''}
                  `}>
                    Sign Up
                  </li>
                )}
              </NavLink>
              <NavLink to="/favorite" className="block">
                {({ isActive }) => (
                  <li className={`
                    hover:text-green-600 cursor-pointer flex items-center gap-3 transform transition-all duration-300 hover:translate-x-2 font-medium
                    ${isActive ? 'text-green-600' : ''}
                  `}>
                    <div className="relative">
                      <AiOutlineHeart className="w-5 h-5" />
                      <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                        {addFav}
                      </span>
                    </div>
                    Favorites
                  </li>
                )}
              </NavLink>
              <NavLink to="/cart" className="block">
                {({ isActive }) => (
                  <li className={`
                    hover:text-green-600 cursor-pointer flex items-center gap-3 transform transition-all duration-300 hover:translate-x-2 font-medium
                    ${isActive ? 'text-green-600' : ''}
                  `}>
                    <div className="relative">
                      <AiOutlineShoppingCart className="w-5 h-5" />
                      <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                        {cartProducts.length}
                      </span>
                    </div>
                    Cart
                  </li>
                )}
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;