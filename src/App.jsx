import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Filters from "./Components/Filters";
import ServiceList from "./Components/ServiceList";
import CartPage from "./Components/CartPage";

import LaundryServiceDetail from "./Components/LaundryServiceDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-white min-h-screen p-4">
              <Header />
              <div className="flex items-center mt-4">
                <Search />
                <Filters />
              </div>
              <ServiceList />
            </div>
          }
        />
        <Route path="/laundry-details" element={<LaundryServiceDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;

