import React, { useState, useEffect } from 'react';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      image: image2,
      title: "Elegant Collection",
      subtitle: "New Season Arrivals",
      description: "Discover timeless pieces crafted with precision and style. Each item tells a unique story of sophistication.",
      cta: "View Collection",
    },
    {
      image: image3,
      title: "Premium Selection",
      subtitle: "Limited Edition",
      description: "Experience luxury redefined with our carefully curated premium collection. Exclusive designs await.",
      cta: "Shop Now",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="flex justify-center min-h-[70vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh]">
        <div className="w-full h-full relative">
          <div className="w-full h-full flex flex-col lg:flex-row relative overflow-hidden">
            <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-10 lg:p-16 flex flex-col justify-center z-10 bg-gray-50/30">
              <div className={`space-y-3 sm:space-y-4 md:space-y-6 transform transition-all duration-700 ease-out ${
                isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}>
                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base md:text-lg font-medium text-green-600">
                    {slides[currentIndex].subtitle}
                  </h3>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                    {slides[currentIndex].title}
                  </h2>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  {slides[currentIndex].description}
                </p>
                <div className="pt-2 sm:pt-4">
                <button className="group relative inline-flex items-center justify-center bg-green-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl font-medium text-sm sm:text-base md:text-lg transition-all duration-300 ease-out hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5">
    {slides[currentIndex].cta}
    <FaArrowRight 
        className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" 
    />
</button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 h-[50vh] sm:h-[40vh] lg:h-full relative overflow-hidden bg-gray-50/50">
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="relative w-full h-full">
                  <img
                    src={slides[currentIndex].image}
                    alt={`Slide ${currentIndex + 1}`}
                    className={`object-contain w-full h-full transform transition-all duration-700 ease-out rounded-2xl
                      ${isAnimating 
                        ? 'opacity-0 scale-95 rotate-2' 
                        : 'opacity-100 scale-100 rotate-0'}`}
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 left-0 right-0 flex items-center justify-center space-x-2 sm:space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`h-1 rounded-full transition-all duration-300 ease-out
                    ${index === currentIndex 
                      ? 'bg-green-600 w-10 sm:w-16 md:w-20' 
                      : 'bg-gray-200 w-6 sm:w-8 md:w-12 hover:bg-gray-300'}`}
                 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;