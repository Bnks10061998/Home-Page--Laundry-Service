// import React, { useState } from "react";
// import ServiceCard from "./ServiceCard";
// import Search from "./Search"; 
// import Wash from "../assets/Wash & Iron.jpg";

// const services = [
//   {
//     title: "Wash & Fold",
//     image: Wash,
//     rating: "3.8",
//     reviews: "210",
//   },
//   {
//     title: "Wash & Iron",
//     image: Wash,
//     rating: "3.2",
//     reviews: "600",
//   },
//   {
//     title: "Dry Cleaning",
//     image: Wash,
//     rating: "4.2",
//     reviews: "467",
//   },
//   {
//     title: "Carpet Cleaning",
//     image: Wash,
//     rating: "4.5",
//     reviews: "752",
//   },
//   {
//     title: "Steam iron",
//     image: Wash,
//     rating: "5",
//     reviews: "226",
//   },
//   {
//     title: "Ornamented Wedding Dress",
//     image: Wash,
//     rating: "4.8",
//     reviews: "267",
//   },
// ];

// const ServiceList = ({ filters = {} }) => {
//   const { selectedRatings = [], sortOrder = "" } = filters;
//   const [searchTerm, setSearchTerm] = useState(""); 

//   const filteredServices = services
//     .filter((service) => {
//       const matchesRating =
//         selectedRatings.length === 0 ||
//         selectedRatings.includes(parseFloat(service.rating));
//       const matchesSearch = service.title
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase());
//       return matchesRating && matchesSearch;
//     })
//     .sort((a, b) => {
//       if (sortOrder === "asc") {
//         return a.title.localeCompare(b.title);
//       } else if (sortOrder === "desc") {
//         return b.title.localeCompare(a.title);
//       }
//       return 0;
//     });

//   return (
//     <div>
//       <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} /> 
//       <div className="mt-16 px-32">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0.5 gap-y-16">
//           {filteredServices.map((service, idx) => (
//             <ServiceCard key={idx} {...service} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceList;


import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import Search from "./Search";
import Wash from "../assets/Wash & Iron.jpg";
import iron from "../assets/Iron.jpg";
import fold from "../assets/Fold.jpg";
import dry from "../assets/Dry.jpg";
import carpet from "../assets/Carpet.jpg";
import Steam from "../assets/steam1.jpg";
const services = [
  {
    title: "Wash & Fold",
    image: fold,
    rating: "3.8",
    reviews: "210",
  },
  {
    title: "Wash & Iron",
    image: iron,
    rating: "3.2",
    reviews: "600",
  },
  {
    title: "Dry Cleaning",
    image: dry,
    rating: "4.2",
    reviews: "467",
  },
  {
    title: "Carpet Cleaning",
    image: carpet,
    rating: "4.5",
    reviews: "752",
  },
  {
    title: "Steam iron",
    image: Steam,
    rating: "5",
    reviews: "226",
  },
  {
    title: "Ornamented Wedding Dress",
    image: Wash,
    rating: "4.8",
    reviews: "267",
  },
];


const ratingRanges = {
  5: [4.6, 5],
  4.5: [4.1, 4.5],
  4: [3.6, 4.0],
  3.5: [3.1, 3.5],
};

const ServiceList = ({ filters = {} }) => {
  const { selectedRatings = [], sortOrder = "" } = filters;
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services
    .filter((service) => {
      const serviceRating = parseFloat(service.rating);

      // Match any selected rating range
      const matchesRating =
        selectedRatings.length === 0 ||
        selectedRatings.some((r) => {
          const [min, max] = ratingRanges[r];
          return serviceRating >= min && serviceRating <= max;
        });

      const matchesSearch = service.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesRating && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title);
      } else if (sortOrder === "desc") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

  return (
    <div>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="mt-16 px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0.5 gap-y-16">
          {filteredServices.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
