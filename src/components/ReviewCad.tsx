import React from "react";

const TestimonialCard = () => {
  const testimonialData = {
    name: "John Doe",
    title: "Startup Founder",
    review: "This is incredible, you don't need an interior designer anymore.",
    rating: 5,
    avatar: "https://via.placeholder.com/50", // Replace with an actual image link
  };

  return (
    <div className="max-w-sm p-6 bg-green-50 border border-green-300 rounded-lg shadow-md">
      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(testimonialData.rating)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            viewBox="0 0 24 24"
            fill="yellow"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-700 italic mb-4">"{testimonialData.review}"</p>

      {/* User Info */}
      <div className="flex items-center">
        <img
          src={testimonialData.avatar}
          alt="Avatar"
          className="w-12 h-12 rounded-full border-2 border-green-500"
        />
        <div className="ml-4">
          <h3 className="font-bold text-gray-800">{testimonialData.name}</h3>
          <p className="text-gray-500 text-sm">{testimonialData.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
