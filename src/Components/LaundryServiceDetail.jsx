import React, { useState } from "react";
import {
  FaStar,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaShareAlt,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import laundryImage from "../assets/laundryImage.jpg";
import { Heart } from "lucide-react";
import coinImage from "../assets/S Coins.jpg";
import { motion, AnimatePresence } from "framer-motion";

const LaundryServiceDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const passedTitle = location.state?.title || "Premium Wash & Fold Service";
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
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            className="bg-white p-2 rounded-full shadow hover:bg-red-100"
            onClick={() => setLiked(!liked)}
          >
            <Heart
              size={24}
              stroke="red"
              fill={liked ? "red" : "none"}
              className={`transition-transform duration-300 ${
                liked ? "scale-125" : "scale-100"
              }`}
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
            <FaStar size={16} className="text-yellow-400" /> 4.8 (200) reviews
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
            className={`flex-1 px-4 py-2 font-medium relative z-10 ${
              activeTab === tab ? "text-white" : "text-blue-800"
            }`}
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
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Column (Optional – you can add more info here later) */}
              <div className="flex-1 hidden md:block"></div>

              {/* Right Column (Card) */}
              <div className="flex-1">
                <div className="bg-gray-50 border rounded-md shadow-sm p-5">
                  <h3 className="text-blue-700 font-semibold text-lg mb-2">
                    Description
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Say goodbye to laundry day stress! Our professional laundry
                    service offers convenient, affordable, and hygienic care for your
                    clothes. From everyday wear to delicate fabrics, we handle it all
                    with precision and care. Enjoy doorstep pickup and delivery, quick
                    turnaround times, and clothes that come back fresh, clean, and
                    perfectly folded.
                  </p>

                  <div className="mt-4">
                    <h3 className="text-green-700 font-semibold text-lg mb-2">
                      What's Included
                    </h3>
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
                    onClick={() =>
                      navigate("/cart", { state: { service: passedTitle } })
                    }
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
            className="mt-4 space-y-4"
          >
            {[
              { name: "Sarah", rating: 4.8, date: "2025-03-11" },
              { name: "Mike", rating: 4.8, date: "2025-03-24" },
              { name: "Aarif", rating: 4.9, date: "2025-04-01" },
              { name: "Jayanil", rating: 4.3, date: "2025-05-05" },
            ].map((review, idx) => (
              <div key={idx} className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={`https://randomuser.me/api/portraits/${
                        idx % 2 === 0 ? "women" : "men"
                      }/${idx + 10}.jpg`}
                      alt={review.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-semibold">{review.name}</span>
                  </div>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
                <div className="text-yellow-400 mb-1">
                  {"★".repeat(Math.floor(review.rating))}
                </div>
                <p className="text-sm text-gray-700">Excellent service!</p>
                <p className="text-xs text-gray-500 mt-1">
                  Clothes returned fresh, clean, and neatly folded. Highly
                  recommend!
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LaundryServiceDetail;
