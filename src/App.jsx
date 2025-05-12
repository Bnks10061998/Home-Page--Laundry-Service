import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Filters from "./Components/Filters";
import ServiceList from "./Components/ServiceList";
import CartPage from "./Components/CartPage";
import LaundryServiceDetail from "./Components/LaundryServiceDetail";

function App() {
  const [filters, setFilters] = useState({
    sortOrder: "",
    selectedCategory: "all",
    selectedRatings: [],
  });

  const handleFilterChange = (ratings, sortOrder, category) => {
    setFilters({ selectedRatings: ratings, sortOrder, selectedCategory: category });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-white min-h-screen p-5">
              <Header />
              <div className="flex justify-end mt-1">
                {/* <Search /> */}
                <Filters onFilterChange={handleFilterChange} />
              </div>
              <ServiceList filters={filters} />
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


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Components/Header";
// import Search from "./Components/Search";
// import Filters from "./Components/Filters";
// import ServiceList from "./Components/ServiceList";
// import CartPage from "./Components/CartPage";
// import LaundryServiceDetail from "./Components/LaundryServiceDetail";

// function App() {
//   const [filters, setFilters] = useState({
//     sortOrder: "",
//     selectedCategory: "all",
//     selectedRatings: [],
//   });

//   const handleFilterChange = (ratings, sortOrder, category) => {
//     setFilters({ selectedRatings: ratings, sortOrder, selectedCategory: category });
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div className="bg-white min-h-screen p-4">
//               <Header />
//               <div className="flex justify-end mt-4">
//                 {/* <Search /> */}
//                 <Filters onFilterChange={handleFilterChange} />
//               </div>
//               <ServiceList filters={filters} />
//             </div>
//           }
//         />
//         <Route path="/laundry-details" element={<LaundryServiceDetail />} />
//         <Route path="/cart" element={<CartPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;