import image1 from "../assets/reviews/image1.png";
import image2 from "../assets/reviews/image2.png";
import image3 from "../assets/reviews/image3.png";
import image4 from "../assets/reviews/image4.png";
import image5 from "../assets/reviews/image5.png";
import image6 from "../assets/reviews/image6.png";

const TestimonialCard = () => {
  const testimonialData = [
    {
      name: "Ananya Rao",
      title: "Bengaluru",
      review:
        "Design AI made decorating my living room so easy! The results were modern and stunning—perfect for a beginner like me.",
      rating: 4,
      avatar: image1,
    },
    {
      name: "Rohan Patel",
      title: "Mumbai",
      review:
        "As a new homeowner, this tool saved me! Scanning my room and getting instant designs was a game-changer.",
      rating: 5,
      avatar: image2,
    },
    {
      name: "Arjun Mehta",
      title: "Pune",
      review:
        "This tool is a must for real estate. Virtual staging is so easy, and my clients love it!",
      rating: 4,
      avatar: image3,
    },
    {
      name: "Sanjana Iyer",
      title: "Chennai",
      review:
        "I wanted a cozy look, and Design AI nailed it! The suggestions were on-point and fit my budget.",
      rating: 4,
      avatar: image4,
    },
    {
      name: "Kunal Desai",
      title: "Ahmedabad",
      review:
        "Redesigning my studio was effortless. Practical, stylish, and budget-friendly ideas in minutes!",
      rating: 3,
      avatar: image5,
    },
    {
      name: "Neha Kapoor",
      title: "Jaipur",
      review:
        "Design AI gave me royal-inspired dining room designs that matched my taste perfectly. Loved it!",
      rating: 5,
      avatar: image6,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonialData.map((testimonial, index) => (
        <div
          key={index}
          className="max-w-sm flex flex-col justify-center items-center p-6 bg-green-50 border border-green-300 rounded-lg shadow-md"
        >
           {/* User Info */}
           <img
              src={testimonial.avatar}
              alt={`${testimonial.name}'s Avatar`}
              className="w-14 h-14 rounded-full border-2 border-green-500"
            />
           <div className="flex justify-center items-center">
          
            <div className="ml-4">
              <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-500 text-center text-sm">{testimonial.title}</p>
            </div>
          </div>
          {/* Rating */}
          <div className="flex items-center mb-4">
            {Array.from({ length: Math.floor(testimonial.rating) }, (_, idx) => (
              <svg
                key={idx}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            {testimonial.rating % 1 !== 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03 5.46-4.73z" />
              </svg>
            )}
          </div>

          {/* Review */}
          <p className="text-gray-700 text-center italic mb-4">"{testimonial.review}"</p>

         
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
