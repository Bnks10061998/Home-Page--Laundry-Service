
// import React from "react";
// import ServiceCard from "./ServiceCard";
// import Wash from "../assets/Wash & Iron.jpg";

// const services = [
//   {
//     title: "Wash & Fold",
//     image: Wash,
//     rating: "3.8",
//     reviews: "200",
//   },
//   {
//     title: "Wash & Iron",
//     image: Wash,
//     rating: "3.2",
//     reviews: "200",
//   },
//   {
//     title: "Dry Cleaning",
//     image: Wash,
//     rating: "4.2",
//     reviews: "200",
//   },
//   {
//     title: "Carpet Cleaning",
//     image: Wash,
//     rating: "4.5",
//     reviews: "200",
//   },
//   {
//     title: "Steam iron",
//     image: Wash,
//     rating: "5",
//     reviews: "200",
//   },
//   {
//     title: "Ornamented Wedding Dress",
//     image: Wash,
//     rating: "4.8",
//     reviews: "200",
//   },
// ];

// const ServiceList = ({ filters = {} }) => {
//   const { selectedRatings = [], sortOrder = "" } = filters;

//   const filteredServices = services
//     .filter((service) => {
//       if (selectedRatings.length > 0) {
//         return selectedRatings.includes(parseFloat(service.rating));
//       }
//       return true;
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
//     <div className="mt-16 px-32">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0.5 gap-y-16">
//         {filteredServices.map((service, idx) => (
//           <ServiceCard key={idx} {...service} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceList;


// import React, { useState } from "react";
// import Search from "./Search";
// import ServiceCard from "./ServiceCard";
// import Wash from "../assets/Wash & Iron.jpg";

// const services = [
//   { title: "Wash & Fold", image: Wash, rating: "3.8", reviews: "200" },
//   { title: "Wash & Iron", image: Wash, rating: "3.2", reviews: "200" },
//   { title: "Dry Cleaning", image: Wash, rating: "4.2", reviews: "200" },
//   { title: "Carpet Cleaning", image: Wash, rating: "4.5", reviews: "200" },
//   { title: "Steam iron", image: Wash, rating: "5", reviews: "200" },
//   { title: "Ornamented Wedding Dress", image: Wash, rating: "4.8", reviews: "200" },
// ];

// const ServiceList = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredServices = services.filter((service) =>
//     service.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

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

const services = [
  {
    title: "Wash & Fold",
    image: Wash,
    rating: "3.8",
    reviews: "210",
  },
  {
    title: "Wash & Iron",
    image: Wash,
    rating: "3.2",
    reviews: "600",
  },
  {
    title: "Dry Cleaning",
    image: Wash,
    rating: "4.2",
    reviews: "467",
  },
  {
    title: "Carpet Cleaning",
    image: Wash,
    rating: "4.5",
    reviews: "752",
  },
  {
    title: "Steam iron",
    image: Wash,
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

const ServiceList = ({ filters = {} }) => {
  const { selectedRatings = [], sortOrder = "" } = filters;
  const [searchTerm, setSearchTerm] = useState(""); 

  const filteredServices = services
    .filter((service) => {
      const matchesRating =
        selectedRatings.length === 0 ||
        selectedRatings.includes(parseFloat(service.rating));
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
