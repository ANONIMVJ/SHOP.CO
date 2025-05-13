import React from "react";
import "./StarRating.scss";

const StarRating = ({ rating, size = "md" }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`star-${i}`} className={`star filled size-${size}`}>
        ★
      </span>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <span key="half-star" className={`star half-filled size-${size}`}>
        ★
      </span>
    );
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} className={`star empty size-${size}`}>
        ★
      </span>
    );
  }

  return <div className="stars-container">{stars}</div>;
};

export default StarRating;
