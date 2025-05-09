import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaFilter, FaStar } from "react-icons/fa";

const Filters = ({ onFilterChange }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const dropdownRef = useRef(null);

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  const handleRatingChange = (e) => {
    const ratingValue = parseFloat(e.target.value);
    setSelectedRatings((prev) =>
      prev.includes(ratingValue)
        ? prev.filter((rating) => rating !== ratingValue)
        : [...prev, ratingValue]
    );
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const applyFilters = () => {
    onFilterChange(selectedRatings, sortOrder, selectedCategory);
  };

  const clearFilters = () => {
    setSelectedRatings([]);
    setSortOrder("");
    setSelectedCategory("all");
    onFilterChange([], "", "all");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFilters(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex gap-5 ml-56 mt-4 relative items-center">
      {/* Category Dropdown */}
      <div className="relative">
        <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
        <select
          className="appearance-none pl-8 pr-4 py-3 border bg-blue-100 min-w-[200px] rounded shadow-sm text-base"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all">All Categories</option>
          <option value="wash_dry_fold">Wash, Dry, Fold</option>
          <option value="shoe_laundry">Shoe Laundry</option>
          <option value="ironing">Ironing</option>
          <option value="starch_clothes">Starch Clothes</option>
          <option value="dry_cleaning">Dry Cleaning</option>
          <option value="dyeing_vats">Dyeing Vats</option>
        </select>
      </div>

      {/* Filters Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleFilters}
          className="flex items-center gap-2 border px-8 py-3 rounded bg-blue-100 text-blue-700 text-base"
        >
          <FaFilter className="text-blue-700" />
          Filters
        </button>

        {showFilters && (
          <div className="absolute top-14 right-0 bg-white border rounded shadow-lg w-64 p-4 z-10">
            {/* Ratings Filter */}
            <div className="mb-4">
              <span className="text-gray-700 text-sm mb-2 block font-medium">Ratings</span>
              {[5, 4.5, 4, 3.5].map((rating) => (
                <label key={rating} className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    value={rating}
                    checked={selectedRatings.includes(rating)}
                    onChange={handleRatingChange}
                    className="w-4 h-4 border-gray-400"
                  />
                  <span className="text-sm text-gray-800 flex items-center gap-1">
                    {rating}
                    <FaStar className="text-yellow-500 text-xs" />
                    Stars
                  </span>
                </label>
              ))}
            </div>

            {/* Sort Order Filter */}
            <label className="block mb-4">
              <span className="text-gray-700 text-sm mb-1 block">Sort by Name</span>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full border px-2 py-1 rounded text-sm"
              >
                <option value="">None</option>
                <option value="asc">Name (A-Z)</option>
                <option value="desc">Name (Z-A)</option>
              </select>
            </label>

            {/* Buttons */}
            <div className="flex gap-2">
              <button
                onClick={applyFilters}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Apply Filters
              </button>
              <button
                onClick={clearFilters}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
