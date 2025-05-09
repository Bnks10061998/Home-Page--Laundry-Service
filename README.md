// App.jsx
import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import ServiceList from "./components/ServiceList";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Header />
      <div className="flex justify-between items-center mt-4">
        <SearchBar />
        <Filters />
      </div>
      <ServiceList />
    </div>
  );
}

export default App;

// components/Header.jsx
const Header = () => (
  <div>
    <h1 className="text-2xl font-bold text-blue-800">Laundry Service</h1>
    <p className="text-sm text-gray-500">Browse and book Laundry services.</p>
  </div>
);

export default Header;

// components/SearchBar.jsx
const SearchBar = () => (
  <input
    type="text"
    placeholder="Search Laundry Services..."
    className="border p-2 rounded w-80 shadow-sm"
  />
);

export default SearchBar;

// components/Filters.jsx
const Filters = () => (
  <div className="flex gap-2">
    <select className="border p-2 rounded shadow-sm">
      <option>All Categories</option>
    </select>
    <button className="border p-2 rounded bg-blue-100 text-blue-700">Filters</button>
  </div>
);

export default Filters;

// components/ServiceCard.jsx
const ServiceCard = ({ image, title, rating, price }) => (
  <div className="bg-white rounded shadow-md p-4 w-80">
    <img src={image} alt={title} className="h-48 w-full object-cover rounded" />
    <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    <p className="text-gray-500 text-sm">Clean Pro Services</p>
    <div className="flex justify-between items-center mt-2 text-sm">
      <span className="text-green-600">★ {rating}</span>
      <span className="text-green-600">₹ {price}/hr</span>
    </div>
    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
      Book Now
    </button>
  </div>
);

export default ServiceCard;

// components/ServiceList.jsx
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Wash & Fold",
    image: "https://via.placeholder.com/300x200?text=Wash+%26+Fold",
    rating: "4.8(200)",
    price: "2.0"
  },
  {
    title: "Wash & Iron",
    image: "https://via.placeholder.com/300x200?text=Wash+%26+Iron",
    rating: "4.8(200)",
    price: "2.0"
  },
  {
    title: "Wash & Iron",
    image: "https://via.placeholder.com/300x200?text=Wash+%26+Iron",
    rating: "4.8(200)",
    price: "2.0"
  }
];

const ServiceList = () => (
  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    {services.map((service, idx) => (
      <ServiceCard key={idx} {...service} />
    ))}
  </div>
);

export default ServiceList;
