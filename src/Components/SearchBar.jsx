import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex items-center w-[700px] ml-20 max-w-3xl mt-4 p-2 border border-blue-100 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)] bg-white">
      <FaSearch
        className={`text-gray-400 ml-3 transition-all duration-300 transform ${
          isFocused ? "text-blue-500 scale-125" : "text-gray-400 scale-100"
        } hover:scale-110 hover:text-blue-400`}
      />
      <input
        type="text"
        placeholder="Search Laundry Services...."
        className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-sm text-gray-700"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};
export default SearchBar;




