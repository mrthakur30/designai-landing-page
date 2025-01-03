import image1 from "/image1.jpg"
import image2 from "/image2.jpg"
import image3 from "/image3.jpg"
import image4 from "/image4.jpg"
import image5 from "/image5.jpg"


import  { useState, useEffect } from 'react';




const images = [image1, image2, image3, image4]
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  

  const getVisibleImages = () => {
    const lastIndex = images.length - 1;
    if (currentIndex === 0) {
      return [lastIndex, 0, 1];
    } else if (currentIndex === lastIndex) {
      return [lastIndex - 1, lastIndex, 0];
    }
    return [currentIndex - 1, currentIndex, currentIndex + 1];
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const visibleImages = getVisibleImages();

  return (
    <div className="relative w-full max-w-6xl md:max-w-8xl mx-auto h-96 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {visibleImages.map((imgIndex, i) => (
          <div
            key={imgIndex}
            className={`absolute transition-all duration-500 ease-in-out ${
              i === 0 ? 'transform -translate-x-3/4 scale-75 opacity-50' :
              i === 2 ? 'transform translate-x-3/4 scale-75 opacity-50' :
              'transform scale-100 z-10'
            }`}
          >
            <img
              src={images[imgIndex]}
              alt={`Slide ${imgIndex + 1}`}
              className="rounded-lg shadow-xl max-h-80 w-auto"
            />
          </div>
        ))}
      </div>
      
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-20 hover:bg-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-20 hover:bg-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ImageSlider;