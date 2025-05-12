// import React, { useState, useRef, useEffect } from "react";
// import { FaChevronDown, FaFilter, FaStar } from "react-icons/fa";

// const Filters = ({ onFilterChange }) => {
//   const [showFilters, setShowFilters] = useState(false);
//   const [selectedRatings, setSelectedRatings] = useState([]);
//   const [sortOrder, setSortOrder] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const dropdownRef = useRef(null);

//   const toggleFilters = () => {
//     setShowFilters((prev) => !prev);
//   };

//   const handleRatingChange = (e) => {
//     const ratingValue = parseFloat(e.target.value);
//     setSelectedRatings((prev) =>
//       prev.includes(ratingValue)
//         ? prev.filter((rating) => rating !== ratingValue)
//         : [...prev, ratingValue]
//     );
//   };

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };

//   const applyFilters = () => {
//     onFilterChange(selectedRatings, sortOrder, selectedCategory);
//   };

//   const clearFilters = () => {
//     setSelectedRatings([]);
//     setSortOrder("");
//     setSelectedCategory("all");
//     onFilterChange([], "", "all");
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowFilters(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="flex gap-5 ml-56 mt-4 relative items-center">
//       {/* Category Dropdown */}
//       <div className="relative">
//         <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
//         <select
//           className="appearance-none pl-8 pr-4 py-3 border bg-blue-100 min-w-[200px] rounded shadow-sm text-base"
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//         >
//           <option value="all">All Categories</option>
//           <option value="wash_dry_fold">Wash, Dry, Fold</option>
//           <option value="shoe_laundry">Shoe Laundry</option>
//           <option value="ironing">Ironing</option>
//           <option value="starch_clothes">Starch Clothes</option>
//           <option value="dry_cleaning">Dry Cleaning</option>
//           <option value="dyeing_vats">Dyeing Vats</option>
//         </select>
//       </div>

//       {/* Filters Dropdown */}

//       <div className="relative">
//   {/* Filters Button */}
//   <button
//     className="flex items-center gap-2 border px-8 py-3 rounded bg-blue-100 text-blue-700 text-base"
//   >
//     <FaFilter className="text-blue-700" />
//     Filters
//   </button>

//   {/* Dropdown, shown on hover */}
//   <div
//     className="absolute top-14 right-0 bg-white border rounded shadow-lg w-64 p-4 z-10 opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300 ease-in-out"
//   >
//     {/* Ratings Filter */}
//     <div className="mb-4">
//       <span className="text-gray-700 text-sm mb-2 block font-medium">Ratings</span>
//       {[{ value: 5, label: "Outstanding" },
//         { value: 4.5, label: "Excellent" },
//         { value: 4, label: "Very Good" },
//         { value: 3.5, label: "Good" }].map(({ value, label }) => (
//         <label key={value} className="flex items-center space-x-2 mb-2">
//           <input
//             type="checkbox"
//             value={value}
//             checked={selectedRatings.includes(value)}
//             onChange={handleRatingChange}
//             className="w-4 h-4 border-gray-400"
//           />
//           <span className="text-sm text-gray-800 flex items-center gap-1">
//             {value}
//             <FaStar className="text-yellow-500 text-xs" />
//             <span className="ml-1">{label}</span>
//           </span>
//         </label>
//       ))}
//     </div>
  

 
//       {/* <div className="relative" ref={dropdownRef}>
//         <button
//           onClick={toggleFilters}
//           className="flex items-center gap-2 border px-8 py-3 rounded bg-blue-100 text-blue-700 text-base"
//         >
//           <FaFilter className="text-blue-700" />
//           Filters
//         </button>

//         {showFilters && (
//           <div className="absolute top-14 right-0 bg-white border rounded shadow-lg w-64 p-4 z-10">
//           <div className="mb-4">
//             <span className="text-gray-700 text-sm mb-2 block font-medium">Ratings</span>
//             {[{ value: 5, label: "Outstanding" },
//               { value: 4.5, label: "Excellent" },
//               { value: 4, label: "Very Good" },
//               { value: 3.5, label: "Good" }].map(({ value, label }) => (
//               <label key={value} className="flex items-center space-x-2 mb-2">
//                 <input
//                   type="checkbox"
//                   value={value}
//                   checked={selectedRatings.includes(value)}
//                   onChange={handleRatingChange}
//                   className="w-4 h-4 border-gray-400"
//                 />
//                 <span className="text-sm text-gray-800 flex items-center gap-1">
//                   {value}
//                   <FaStar className="text-yellow-500 text-xs" />
//                   <span className="ml-1">{label}</span>
//                 </span>
//               </label>
//             ))}
//           </div> */}
        
          

//             {/* Sort Order Filter */}
//             <label className="block mb-4">
//               <span className="text-gray-700 text-sm mb-2 block font-medium">Sort by Name</span>
//               <select
//                 value={sortOrder}
//                 onChange={(e) => setSortOrder(e.target.value)}
//                 className="w-full border border-gray-300 bg-white text-gray-700 rounded-md shadow-sm py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100 transition-all"
//               >
//                 <option value="">Select Sorting</option>
//                 <option value="asc">Name (A-Z)</option>
//                 <option value="desc">Name (Z-A)</option>
//               </select>
//             </label>

//             {/* Buttons */}
//             <div className="flex gap-2">
//               <button
//                 onClick={applyFilters}
//                 className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//               >
//                 Apply Filters
//               </button>
//               <button
//                 onClick={clearFilters}
//                 className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300"
//               >
//                 Clear
//               </button>
//             </div>
//           </div>
//         {/* )} */}
//       </div>
//     </div>
//   );
// };

// export default Filters;


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


// import React, { useState } from "react";
// import {
//   FaStar,
//   FaMapMarkerAlt,
//   FaCheckCircle,
//   FaShareAlt,
// } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";
// import laundryImage from "../assets/laundryImage.jpg";
// import { Heart } from "lucide-react";
// import coinImage from "../assets/S Coins.jpg";
// import { motion, AnimatePresence } from "framer-motion";

//   const LaundryServiceDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const passedTitle = location.state?.title || "Premium Wash & Fold Service";
//   const [activeTab, setActiveTab] = useState("details");
//   const [liked, setLiked] = useState(false);
  
//   const handleBookNow = () => {
//     navigate("/booking-confirmation");
//   };
  
//   return (
//     <div className="max-w-6xl mx-auto bg-white mt-20 p-4 rounded-md shadow-md">
//       {/* Image Section */}
//       <div className="relative">
//         <img
//           src={laundryImage}
//           alt="Laundry"
//           className="w-full h-[500px] object-cover rounded-md"
//         />
//         <div className="absolute top-2 right-2 flex gap-2">
//           <button
//             className="bg-white p-2 rounded-full shadow hover:bg-red-100"
//             onClick={() => setLiked(!liked)}
//           >
//             <Heart
//               size={24}
//               stroke="red"
//               fill={liked ? "red" : "none"}
//               className={`transition-transform duration-300 ${
//                 liked ? "scale-125" : "scale-100"
//               }`}
//             />
//           </button>
//           <button className="bg-white p-2 rounded-full shadow hover:bg-blue-100 text-blue-500">
//             <FaShareAlt size={24} />
//           </button>
//         </div>
//       </div>

//       {/* Title & Meta */}
//       <div className="mt-4">
//         <h2 className="text-2xl font-bold text-blue-900">
//           Premium {passedTitle}
//         </h2>
//         <div className="flex items-center gap-3 text-sm mt-2 text-gray-600">
//           <span className="flex items-center gap-1">
//             <FaStar size={16} className="text-yellow-400" /> 4.8 (200) reviews
//           </span>
//           <span className="flex items-center gap-1">
//             <FaMapMarkerAlt size={16} className="text-red-600" /> Vellore
//           </span>
//           <span className="flex items-center gap-1 text-gray-900">
//             <img src={coinImage} alt="coin" className="w-5 h-5" />
//             +5 Coins per Service
//           </span>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="relative mt-4 border rounded overflow-hidden flex">
//         {["details", "reviews"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`flex-1 px-4 py-2 font-medium relative z-10 ${
//               activeTab === tab ? "text-white" : "text-blue-800"
//             }`}
//           >
//             {tab === "details" ? "Details" : "Reviews"}
//           </button>
//         ))}
//         <motion.div
//           layout
//           className="absolute top-0 bottom-0 w-1/2 bg-blue-700 z-0 rounded"
//           animate={{ x: activeTab === "details" ? "0%" : "100%" }}
//           transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         />
//       </div>

//       {/* Tab Content */}
//       <AnimatePresence mode="wait">
//         {activeTab === "details" ? (
//           <motion.div
//             key="details"
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 30 }}
//             transition={{ duration: 0.3 }}
//             className="mt-6"
//           >
//             <div className="flex flex-col md:flex-row gap-6">
//               {/* Left Column (Optional – you can add more info here later) */}
//               <div className="flex-1 hidden md:block"></div>

//               {/* Right Column (Card) */}
//               <div className="flex-1">
//                 <div className="bg-gray-50 border rounded-md shadow-sm p-5">
//                   <h3 className="text-blue-700 font-semibold text-lg mb-2">
//                     Description
//                   </h3>
//                   <p className="text-gray-700 text-sm">
//                     Say goodbye to laundry day stress! Our professional laundry
//                     service offers convenient, affordable, and hygienic care for your
//                     clothes. From everyday wear to delicate fabrics, we handle it all
//                     with precision and care. Enjoy doorstep pickup and delivery, quick
//                     turnaround times, and clothes that come back fresh, clean, and
//                     perfectly folded.
//                   </p>

//                   <div className="mt-4">
//                     <h3 className="text-green-700 font-semibold text-lg mb-2">
//                       What's Included
//                     </h3>
//                     <ul className="space-y-2 text-gray-700 text-sm">
//                       {[
//                         "Gentle, fabric-safe washing and proper drying for all garments.",
//                         "Pre-treatment for common stains like oil, food, and dirt.",
//                         "Clothes separated by color and fabric to avoid damage or bleeding.",
//                         "Neatly folded or professionally ironed as per your selection.",
//                         "Safe, skin-friendly detergents that are tough on stains but gentle on clothes.",
//                       ].map((item, idx) => (
//                         <li key={idx} className="flex items-start gap-2">
//                           <FaCheckCircle className="text-green-600 mt-1" />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-4 mt-6">
//                   <button
//                     className="w-full sm:w-1/2 py-2 border border-blue-600 text-blue-700 rounded font-medium hover:bg-blue-50"
//                     onClick={() =>
//                       navigate("/cart", { state: { service: passedTitle } })
//                     }
//                   >
//                     Add to Cart
//                   </button>
//                   <button
//                     onClick={handleBookNow}
//                     className="w-full sm:w-1/2 py-2 bg-blue-700 text-white rounded font-medium hover:bg-blue-800"
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ) : (
//           <motion.div
//             key="reviews"
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -30 }}
//             transition={{ duration: 0.3 }}
//             className="mt-4 space-y-4"
//           >
//             {[
//               { name: "Sarah", rating: 4.8, date: "2025-03-11" },
//               { name: "Mike", rating: 4.8, date: "2025-03-24" },
//               { name: "Aarif", rating: 4.9, date: "2025-04-01" },
//               { name: "Jayanil", rating: 4.3, date: "2025-05-05" },
//             ].map((review, idx) => (
//               <div key={idx} className="bg-gray-100 rounded-lg p-4">
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="flex items-center gap-2">
//                     <img
//                       src={`https://randomuser.me/api/portraits/${
//                         idx % 2 === 0 ? "women" : "men"
//                       }/${idx + 10}.jpg`}
//                       alt={review.name}
//                       className="w-8 h-8 rounded-full"
//                     />
//                     <span className="font-semibold">{review.name}</span>
//                   </div>
//                   <span className="text-xs text-gray-500">{review.date}</span>
//                 </div>
//                 <div className="text-yellow-400 mb-1">
//                   {"★".repeat(Math.floor(review.rating))}
//                 </div>
//                 <p className="text-sm text-gray-700">Excellent service!</p>
//                 <p className="text-xs text-gray-500 mt-1">
//                   Clothes returned fresh, clean, and neatly folded. Highly
//                   recommend!
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default LaundryServiceDetail;


// import React, { useState } from "react";
// import {
//   FaStar,
//   FaMapMarkerAlt,
//   FaCheckCircle,
//   FaShareAlt,
// } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";
// import laundryImage from "../assets/laundryImage.jpg";
// import { Heart } from "lucide-react";
// import coinImage from "../assets/S Coins.jpg";
// import { motion, AnimatePresence } from "framer-motion";

// const LaundryServiceDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const passedTitle = location.state?.title || "Premium Wash & Fold Service";
//   const [activeTab, setActiveTab] = useState("details");
//   const [liked, setLiked] = useState(false);

//   const handleBookNow = () => {
//     navigate("/booking-confirmation");
//   };

//   return (
//     <div className="max-w-6xl mx-auto bg-white mt-20 p-4 rounded-md shadow-md">
//       {/* Image Section */}
//       <div className="relative">
//         <img
//           src={laundryImage}
//           alt="Laundry"
//           className="w-full h-[500px] object-cover rounded-md"
//         />
//         <div className="absolute top-2 right-2 flex gap-2">
//           <button
//             className="bg-white p-2 rounded-full shadow hover:bg-red-100"
//             onClick={() => setLiked(!liked)}
//           >
//             <Heart
//               size={24}
//               stroke="red"
//               fill={liked ? "red" : "none"}
//               className={`transition-transform duration-300 ${
//                 liked ? "scale-125" : "scale-100"
//               }`}
//             />
//           </button>
//           <button className="bg-white p-2 rounded-full shadow hover:bg-blue-100 text-blue-500">
//             <FaShareAlt size={24} />
//           </button>
//         </div>
//       </div>

//       {/* Title & Meta */}
//       <div className="mt-4">
//         <h2 className="text-2xl font-bold text-blue-900">
//           Premium {passedTitle}
//         </h2>
//         <div className="flex items-center gap-3 text-sm mt-2 text-gray-600">
//           <span className="flex items-center gap-1">
//             <FaStar size={16} className="text-yellow-400" /> 4.8 (200) reviews
//           </span>
//           <span className="flex items-center gap-1">
//             <FaMapMarkerAlt size={16} className="text-red-600" /> Vellore
//           </span>
//           <span className="flex items-center gap-1 text-gray-900">
//             <img src={coinImage} alt="coin" className="w-5 h-5" />
//             +5 Coins per Service
//           </span>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="relative mt-4 border rounded overflow-hidden flex">
//         {["details", "reviews"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`flex-1 px-4 py-2 font-medium relative z-10 ${
//               activeTab === tab ? "text-white" : "text-blue-800"
//             }`}
//           >
//             {tab === "details" ? "Details" : "Reviews"}
//           </button>
//         ))}
//         <motion.div
//           layout
//           className="absolute top-0 bottom-0 w-1/2 bg-blue-700 z-0 rounded"
//           animate={{ x: activeTab === "details" ? "0%" : "100%" }}
//           transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         />
//       </div>

//       {/* Tab Content */}
//       <AnimatePresence mode="wait">
//         {activeTab === "details" ? (
//           <motion.div
//             key="details"
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 30 }}
//             transition={{ duration: 0.3 }}
//             className="mt-6"
//           >
//             <div className="flex flex-col md:flex-row gap-6">
//               {/* Left Column – Card moved here */}
//               <div className="md:w-[65%] w-full">
//                 <div className="bg-gray-50 border rounded-md shadow-sm p-6 md:p-8">
//                   <h3 className="text-blue-700 font-semibold text-xl mb-4">
//                     Description
//                   </h3>
//                   <p className="text-gray-700 text-base leading-relaxed">
//                     Say goodbye to laundry day stress! Our professional laundry
//                     service offers convenient, affordable, and hygienic care for your
//                     clothes. From everyday wear to delicate fabrics, we handle it all
//                     with precision and care. Enjoy doorstep pickup and delivery, quick
//                     turnaround times, and clothes that come back fresh, clean, and
//                     perfectly folded.
//                   </p>

//                   <div className="mt-6">
//                     <h3 className="text-green-700 font-semibold text-lg mb-3">
//                       What's Included
//                     </h3>
//                     <ul className="space-y-3 text-gray-700 text-base">
//                       {[
//                         "Gentle, fabric-safe washing and proper drying for all garments.",
//                         "Pre-treatment for common stains like oil, food, and dirt.",
//                         "Clothes separated by color and fabric to avoid damage or bleeding.",
//                         "Neatly folded or professionally ironed as per your selection.",
//                         "Safe, skin-friendly detergents that are tough on stains but gentle on clothes.",
//                       ].map((item, idx) => (
//                         <li key={idx} className="flex items-start gap-2">
//                           <FaCheckCircle className="text-green-600 mt-1" />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-4 mt-6">
//                   <button
//                     className="w-196 sm:w-1/2 py-3 border border-blue-600 text-blue-700 rounded font-semibold hover:bg-blue-50"
//                     onClick={() =>
//                       navigate("/cart", { state: { service: passedTitle } })
//                     }
//                   >
//                     Add to Cart
//                   </button>
//                   <button
//                     onClick={handleBookNow}
//                     className="w-full sm:w-1/2 py-3 bg-blue-700 text-white rounded font-semibold hover:bg-blue-800"
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>

//               {/* Right Column – optional content */}
//               <div className="flex-1 hidden md:block"></div>
//             </div>
//           </motion.div>
//         ) : (
//           <motion.div
//             key="reviews"
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -30 }}
//             transition={{ duration: 0.3 }}
//             className="mt-4 space-y-4"
//           >
//             {[
//               { name: "Sarah", rating: 4.8, date: "2025-03-11" },
//               { name: "Mike", rating: 4.8, date: "2025-03-24" },
//               { name: "Aarif", rating: 4.9, date: "2025-04-01" },
//               { name: "Jayanil", rating: 4.3, date: "2025-05-05" },
//             ].map((review, idx) => (
//               <div key={idx} className="bg-gray-100 rounded-lg p-4">
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="flex items-center gap-2">
//                     <img
//                       src={`https://randomuser.me/api/portraits/${
//                         idx % 2 === 0 ? "women" : "men"
//                       }/${idx + 10}.jpg`}
//                       alt={review.name}
//                       className="w-8 h-8 rounded-full"
//                     />
//                     <span className="font-semibold">{review.name}</span>
//                   </div>
//                   <span className="text-xs text-gray-500">{review.date}</span>
//                 </div>
//                 <div className="text-yellow-400 mb-1">
//                   {"★".repeat(Math.floor(review.rating))}
//                 </div>
//                 <p className="text-sm text-gray-700">Excellent service!</p>
//                 <p className="text-xs text-gray-500 mt-1">
//                   Clothes returned fresh, clean, and neatly folded. Highly
//                   recommend!
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default LaundryServiceDetail;


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
              {/* Left Column – Card moved here */}
              <div className="md:w-[65%] w-full">
                <div className="bg-gray-50 border rounded-md shadow-sm p-6 md:p-7">
                  <h3 className="text-blue-700 font-semibold text-xl mb-4">
                    Description
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Say goodbye to laundry day stress! Our professional laundry
                    service offers convenient, affordable, and hygienic care for your
                    clothes. From everyday wear to delicate fabrics, we handle it all
                    with precision and care. Enjoy doorstep pickup and delivery, quick
                    turnaround times, and clothes that come back fresh, clean, and
                    perfectly folded.
                  </p>

                  <div className="mt-6">
                    <h3 className="text-green-700 font-semibold text-lg mb-3">
                      What's Included
                    </h3>
                    <ul className="space-y-3 text-gray-700 text-base">
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
              {/* Right Column – Sidebar */}
  <div className="md:w-[35%] w-full">
    <div className="bg-white border rounded-lg shadow p-5 space-y-5 sticky top-24">
      <div>
        <h4 className="text-lg font-semibold text-blue-900">Price Summary</h4>
        <p className="text-gray-700 mt-1">Starting at <span className="font-bold text-green-600">₹199</span></p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-blue-900">Current Offer</h4>
        <p className="text-sm text-green-700">✔ 10% OFF on first order</p>
        <p className="text-xs text-gray-500">Use code: <span className="font-mono text-blue-700">WELCOME10</span></p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-blue-900">Service Hours</h4>
        <p className="text-sm text-gray-700">Mon–Sat: 9:00 AM – 7:00 PM</p>
        <p className="text-sm text-gray-700">Sun: Closed</p>
      </div>
    </div>
  </div>
              {/* Right Column – optional */}
              <div className="flex-1 hidden md:block"></div>
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

// import React, { useState } from "react";
// import { FaChevronDown, FaFilter, FaStar } from "react-icons/fa";

// const Filters = ({ onFilterChange }) => {
//   const [selectedRatings, setSelectedRatings] = useState([]);
//   const [sortOrder, setSortOrder] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleRatingChange = (e) => {
//     const ratingValue = parseFloat(e.target.value);
//     setSelectedRatings((prev) =>
//       prev.includes(ratingValue)
//         ? prev.filter((rating) => rating !== ratingValue)
//         : [...prev, ratingValue]
//     );
//   };

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };

//   const applyFilters = () => {
//     onFilterChange(selectedRatings, sortOrder, selectedCategory);
//   };

//   const clearFilters = () => {
//     setSelectedRatings([]);
//     setSortOrder("");
//     setSelectedCategory("all");
//     onFilterChange([], "", "all");
//   };

//   // Manage the dropdown open/close state
//   const handleMouseEnter = () => {
//     setIsDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsDropdownOpen(false);
//   };

//   return (
//     <div className="flex gap-5 ml-56 mt-4 relative items-center">
//       <div className="relative">
//         <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
//         <select
//           className="appearance-none pl-8 pr-4 py-3 border bg-blue-100 min-w-[200px] rounded shadow-sm text-base"
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//         >
//           <option value="all">All Categories</option>
//           <option value="wash_dry_fold">Wash, Dry, Fold</option>
//           <option value="shoe_laundry">Shoe Laundry</option>
//           <option value="ironing">Ironing</option>
//           <option value="starch_clothes">Starch Clothes</option>
//           <option value="dry_cleaning">Dry Cleaning</option>
//           <option value="dyeing_vats">Dyeing Vats</option>
//         </select>
//       </div>

//       {/* Filters Button with hover effect to show dropdown */}
//       <div
//         className="relative"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <button
//           className="flex items-center gap-2 border px-8 py-3 rounded bg-blue-100 text-blue-700 text-base"
//         >
//           <FaFilter className="text-blue-700" />
//           Filters
//         </button>

//         {/* Filters Dropdown */}
//         {isDropdownOpen && (
//           <div className="absolute top-14 right-0 bg-white border rounded shadow-lg w-64 p-4 z-20">
//             {/* Ratings Filter */}
//             <div className="mb-4">
//               <span className="text-gray-700 text-sm mb-2 block font-medium">Ratings</span>
//               {[{ value: 5, label: "Outstanding" },
//                 { value: 4.5, label: "Excellent" },
//                 { value: 4, label: "Very Good" },
//                 { value: 3.5, label: "Good" }].map(({ value, label }) => (
//                 <label key={value} className="flex items-center space-x-2 mb-2">
//                   <input
//                     type="checkbox"
//                     value={value}
//                     checked={selectedRatings.includes(value)}
//                     onChange={handleRatingChange}
//                     className="w-4 h-4 border-gray-400"
//                   />
//                   <span className="text-sm text-gray-800 flex items-center gap-1">
//                     {value}
//                     <FaStar className="text-yellow-500 text-xs" />
//                     <span className="ml-1">{label}</span>
//                   </span>
//                 </label>
//               ))}
//             </div>

//             {/* Sort Order Filter */}
//             <label className="block mb-4">
//               <span className="text-gray-700 text-sm mb-2 block font-medium">Sort by Name</span>
//               <select
//                 value={sortOrder}
//                 onChange={(e) => setSortOrder(e.target.value)}
//                 className="w-full border border-gray-300 bg-white text-gray-700 rounded-md shadow-sm py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100 transition-all"
//               >
//                 <option value="">Select Sorting</option>
//                 <option value="asc">Name (A-Z)</option>
//                 <option value="desc">Name (Z-A)</option>
//               </select>
//             </label>

//             {/* Buttons */}
//             <div className="flex gap-2">
//               <button
//                 onClick={applyFilters}
//                 className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//               >
//                 Apply Filters
//               </button>
//               <button
//                 onClick={clearFilters}
//                 className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300"
//               >
//                 Clear
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Filters;



// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";

// const Search = () => {
//   const [isFocused, setIsFocused] = useState(false);

//   return (
//     <div className="flex items-center w-[700px] ml-20 max-w-3xl mt-4 p-2 border border-blue-100 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)] bg-white">
//       <FaSearch
//         className={`ml-3 transition-all duration-300 transform cursor-pointer ${
//           isFocused ? "text-blue-500 scale-125" : "text-gray-400 scale-100"
//         } hover:text-blue-400 hover:scale-110`}
//       />
//       <input
//         type="text"
//         placeholder="Search Laundry Services...."
//         className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-sm text-gray-700"
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//       />
//     </div>
//   );
// };

// export default Search;



