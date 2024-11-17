import { useEffect } from "react";
import { useState } from "react";

import ClientReviewCarousel from "./ClientReviewCarousel";

const ClientReview = () => {
  const [clientsReviews, setClientReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setClientReviews(data);
      });
  }, []);

  return (
    <div className="px-10 py-5">
      <ClientReviewCarousel clientsReviews={clientsReviews} />
    </div>
  );
};

export default ClientReview;
