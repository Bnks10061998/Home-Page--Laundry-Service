import { React, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const ServiceCard = ({ image, title, rating, reviews, price }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/laundry-details", { state: { title, rating,reviews } });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-80 transition-shadow duration-300 hover:shadow-xl">
      <img src={image} alt={title} className="h-60 w-full object-cover rounded-lg" />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm">Clean Pro Services</p>
      <div className="flex justify-between items-center mt-2 text-sm">
        <span className="flex items-center space-x-1">
          <span className="text-yellow-400 text-xl">★</span>
          <span className="text-black text-base">{rating}</span>
          <span className="text-gray-500">({reviews})</span>
        </span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          onClick={handleBookNow}
        >
          Book Now
        </button>
        <button
          className="px-4 py-2 bg-blue-0 text-blue-700 border border-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
          onClick={() =>
            navigate("/cart", { state: { service: title } })
          }
        >
          {/* Add to Cart */}
          <span className="flex items-center space-x-2">
            <ShoppingCartIcon className="w-5 h-5 stroke-blue-800 fill-white" />
            <span>Cart</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
