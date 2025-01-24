import React, { useState } from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import Image2 from '../../src/assets/Image2.png';

function SignUp() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleForgotPassword = () => {
    setIsLogin(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="h-[90vh] bg-gray-50 flex flex-col md:flex-row items-center mb-16 m-8  rounded-2xl">
      <div className="md:w-1/2 h-[90vh] bg-gray-900 hidden md:flex items-center justify-center p-5 rounded-l-2xl">
        <img 
          src={Image2}
          alt="Authentication" 
          className="max-w-[300px] w-full h-auto object-contain rounded-2xl"
        />
      </div>

      <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Log in to Exclusive' : 'Create New Account'}
            </h2>
            <p className="text-gray-600 mb-8">
              {isLogin ? 'Enter your details below' : 'Sign up for a new account'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                  required
                />
              </div>
            )}

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-all duration-200 font-medium"
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </div>
          </form>

          <div className="flex flex-col items-center space-y-4">
            {isLogin ? (
              <>
                <button
                  onClick={handleForgotPassword}
                  className="text-green-600 hover:text-green-700 transition-colors duration-200"
                >
                  Forgot Password?
                </button>
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                  >
                    Sign Up
                  </button>
                </p>
              </>
            ) : (
              <p className="text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                >
                  Login
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;