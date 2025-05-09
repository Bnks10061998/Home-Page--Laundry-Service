import ServiceCard from "./ServiceCard";
import React from "react";
import Wash from "../assets/Wash & Iron.jpg"
const services = [
  {
    title: "Wash & Fold",
    image: Wash,
    rating: "4.8",
    reviews: "200",
   
  },
  {
    title: "Wash & Iron",
    image: Wash,
    rating: "4.8",
    reviews: "200",
    
  },
  {
    title: "Wash & Irons",
    image: Wash,
    rating: "4.8",
    reviews: "200",
   
  },
  {
    title: "Carpet Cleaning",
    image: Wash,
    rating: "4.8",
    reviews: "200",
    
  },
  {
    title: "Steam iron",
    image: Wash,
    rating: "4.8",
    reviews: "200",
    
  },
  {
    title: "Ornamented Wedding Dress",
    image: Wash,
    rating: "4.8",
    reviews: "200",
  },
];

const ServiceList = () => (
  <div className="mt-16 px-32">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0.5 gap-y-16">
      {services.map((service, idx) => (
        <ServiceCard key={idx} {...service} />
      ))}
    </div>
  </div>
);

export default ServiceList;