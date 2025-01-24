import React from 'react';
import { FiPhone, FiMail, FiUser, FiMessageCircle } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

function Contact() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <div className='bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row gap-8'>
        {/* Left Section */}
        <div className="md:w-2/5 bg-gray-900 p-8 text-white">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-600 p-3 rounded-full">
                <FiPhone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Call to Us</h3>
                <p className="text-gray-300 text-sm mb-1">Available 24/7</p>
                <p className="text-green-400 font-medium">Phone: 0300000000</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-600 p-3 rounded-full">
                <HiOutlineMail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Write To Us</h3>
                <p className="text-gray-300 text-sm">Fill out the form and we will contact you within 24 hours</p>
              </div>
            </div>
          </div>

          
        </div>

        <div className="md:w-3/5 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              <div className="relative md:col-span-2">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiPhone className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              <div className="relative md:col-span-2">
                <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                  <FiMessageCircle className="h-5 w-5 text-gray-400" />
                </div>
                <textarea 
                  placeholder="Your Message"
                  rows="4"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                ></textarea>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-all duration-200 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;