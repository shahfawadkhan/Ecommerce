import React from 'react';
import { incrementCart, setCategory, setSearchQuery } from '../Slices/ProductSlice';
import { CiHeart, CiShoppingCart, CiSearch } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { toggleCart } from '../Slices/CartSlice';
import { toggleFavorite } from '../Slices/FavoriteSlice';
import { incrementFav } from '../Slices/ProductSlice';

const FilteredProducts = () => {
  const { filterProducts, searchQuery, category } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleCategory = (selectedCategory) => {
    if (category === selectedCategory) {
      dispatch(setCategory(""));
    } else {
      dispatch(setCategory(selectedCategory));
    }
  };

  const handleAddToCart = (product) => {
    dispatch(toggleCart(product));
    dispatch(incrementCart())

    toast.success(`${product.name || product.title} added to cart`);
  };

  const handleFavorite = (product) => {
    dispatch(toggleFavorite(product));
    toast.success(`${product.name || product.title} added to favorites`);
    dispatch(incrementFav())

  };

  const categories = [
    { id: 'electronics', label: 'Electronics' },
    { id: 'clothes', label: 'Clothes' },
    { id: 'furniture', label: 'Furniture' }
  ];

  const getProductImage = (product) => {
    if (product.images && Array.isArray(product.images) && product.images.length > 0) {
      return product.images[0];
    }
    if (typeof product.image === 'string') {
      return product.image;
    }
    return '';
  };

  return (
    <section className="max-w-7xl mx-auto py-8 px-4">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h2>
          <div className="h-1 w-20 bg-green-600 rounded-full"></div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="relative mb-6">
            <input
              type="text"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-green-600 transition-colors"
              placeholder="Search products..."
              onChange={handleSearch}
              value={searchQuery}
            />
            <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategory(cat.id)}
                className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium
                  ${category === cat.id
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filterProducts?.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-square bg-gray-50">
                <img
                  src={getProductImage(product)}
                  alt={product.name || product.title}
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
                  {typeof product.category === 'string' ? product.category : product.category?.name || 'Unknown'}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2 min-h-[3.5rem]">
                  {product.name || product.title}
                </h3>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-green-600 transition-all duration-200 text-sm font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {(!filterProducts || filterProducts.length === 0) && (
          <div className="flex flex-col items-center justify-center py-12 px-4">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Products Found</h3>
            <p className="text-gray-600 text-center">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilteredProducts;