import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Your Company</h2>
              <div className="h-1 w-12 bg-green-600 rounded-full mb-4"></div>
              <p className="text-gray-400 leading-relaxed">
                Your one-stop solution for amazing products and services. Connect with us to stay updated with our latest offerings and exclusive deals.
              </p>
            </div>
            <div className="flex gap-4">
              {[
                { icon: FaFacebookF, label: "Facebook" },
                { icon: FaTwitter, label: "Twitter" },
                { icon: FaInstagram, label: "Instagram" },
                { icon: FaLinkedinIn, label: "LinkedIn" }
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="p-2.5 bg-gray-800 rounded-full hover:bg-green-600 transform hover:scale-110 transition-all duration-200 group"
                >
                  <social.icon className="text-lg text-white group-hover:animate-pulse" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-2">Quick Links</h3>
            <div className="h-1 w-12 bg-green-600 rounded-full mb-6"></div>
            <ul className="space-y-4">
              {["Home", "Categories", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors duration-200 flex items-center group text-gray-400"
                  >
                    <span className="transform group-hover:translate-x-2 transition-transform duration-200">
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-2">Stay Connected</h3>
            <div className="h-1 w-12 bg-green-600 rounded-full mb-6"></div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-xl bg-gray-800 text-gray-200 placeholder:text-gray-500 
                           focus:outline-none focus:ring-2 focus:ring-green-600 
                           transition-all duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium
                         transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none 
                         focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Subscribe
              </button>
              
            </form>
          </div>
        </div>

        
      </div>
    </footer>
  );
}

export default Footer;