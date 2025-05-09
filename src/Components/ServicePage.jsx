import React, { useState } from "react";
import Filters from "./Filters";
import ServiceList from "./ServiceList";

const ServicePage = () => {
  const [selectedRating, setSelectedRating] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  return (
    <div>
      <Filters
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <ServiceList selectedRating={selectedRating} sortOrder={sortOrder} />
    </div>
  );
};

export default ServicePage;
