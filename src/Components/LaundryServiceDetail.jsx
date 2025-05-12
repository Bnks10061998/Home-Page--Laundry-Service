
import React, { useState } from "react";
import { FaStar, FaMapMarkerAlt, FaCheckCircle, FaShareAlt } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import laundryImage from "../assets/laundryImage.jpg";
import { Heart } from "lucide-react";
import coinImage from "../assets/S Coins.jpg";
import { motion, AnimatePresence } from "framer-motion";
import BookingConfirmation from "./BookingConfirmation";

const LaundryServiceDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract title and rating from state
  const { title, rating } = location.state || {};
  const passedTitle = title || "Premium Wash & Fold Service";
  const [activeTab, setActiveTab] = useState("details");
  const [liked, setLiked] = useState(false);

  const handleBookNow = () => {
    navigate("/booking-confirmation");
  };

  return (
    <div className="max-w-6xl mx-auto bg-white mt-20 p-4 rounded-md shadow-md">
      {/* Image Section */}
      <div className="relative">
        <img
          src={laundryImage}
          alt="Laundry"
          className="w-full h-[500px] object-cover rounded-md"
        />
        <div className="absolute top-5 right-12 flex gap-4">
          <button
            className="bg-white p-2 rounded-full shadow hover:bg-red-100"
            onClick={() => setLiked(!liked)}
          >
            <Heart
              size={24}
              stroke="red"
              fill={liked ? "red" : "none"}
              className={`transition-transform duration-300 ${liked ? "scale-125" : "scale-100"}`}
            />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-blue-100 text-blue-500">
            <FaShareAlt size={24} />
          </button>
        </div>
      </div>

      {/* Title & Meta */}
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-blue-900">
          Premium {passedTitle}
        </h2>
        <div className="flex items-center gap-3 text-sm mt-2 text-gray-600">
          <span className="flex items-center gap-1">
            <FaStar size={16} className="text-yellow-400" /> {rating} (200) reviews
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt size={16} className="text-red-600" /> Vellore
          </span>
          <span className="flex items-center gap-1 text-gray-900">
            <img src={coinImage} alt="coin" className="w-5 h-5" />
            +5 Coins per Service
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="relative mt-4 border rounded overflow-hidden flex">
        {["details", "reviews"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-4 py-2 font-medium relative z-10 ${activeTab === tab ? "text-white" : "text-blue-800"}`}
          >
            {tab === "details" ? "Details" : "Reviews"}
          </button>
        ))}
        <motion.div
          layout
          className="absolute top-0 bottom-0 w-1/2 bg-blue-700 z-0 rounded"
          animate={{ x: activeTab === "details" ? "0%" : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "details" ? (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            <div className="flex flex-col gap-6">
              {/* Left Column (Description and What's Included) */}
              <div className="flex-1">
                <div className="bg-gray-50 border rounded-md shadow-sm p-5">
                  <h3 className="text-blue-700 font-semibold text-lg mb-2">Description</h3>
                  <p className="text-gray-700 text-sm">
                    Say goodbye to laundry day stress! Our professional laundry service offers
                    convenient, affordable, and hygienic care for your clothes. From everyday wear
                    to delicate fabrics, we handle it all with precision and care. Enjoy doorstep
                    pickup and delivery, quick turnaround times, and clothes that come back fresh,
                    clean, and perfectly folded.
                  </p>

                  <div className="mt-4">
                    <h3 className="text-green-700 font-semibold text-lg mb-2">What's Included</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      {[
                        "Gentle, fabric-safe washing and proper drying for all garments.",
                        "Pre-treatment for common stains like oil, food, and dirt.",
                        "Clothes separated by color and fabric to avoid damage or bleeding.",
                        "Neatly folded or professionally ironed as per your selection.",
                        "Safe, skin-friendly detergents that are tough on stains but gentle on clothes.",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <FaCheckCircle className="text-green-600 mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <button
                    className="w-full sm:w-1/2 py-2 border border-blue-600 text-blue-700 rounded font-medium hover:bg-blue-50"
                    onClick={() => navigate("/cart", { state: { service: passedTitle } })}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={handleBookNow}
                    className="w-full sm:w-1/2 py-2 bg-blue-700 text-white rounded font-medium hover:bg-blue-800"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="reviews"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            {/* Review Content */}
            {/* Add your review section here */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LaundryServiceDetail;
