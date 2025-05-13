import React from "react";
import StarRating from "../StarRating";
import "./ReviewCard.scss";

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <div className="review-stars">
          <StarRating rating={review.rating} size="md" />
        </div>
        <button className="review-options-btn">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 3.5C8.82843 3.5 9.5 2.82843 9.5 2C9.5 1.17157 8.82843 0.5 8 0.5C7.17157 0.5 6.5 1.17157 6.5 2C6.5 2.82843 7.17157 3.5 8 3.5Z"
              fill="#6F767E"
            />
            <path
              d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z"
              fill="#6F767E"
            />
            <path
              d="M8 15.5C8.82843 15.5 9.5 14.8284 9.5 14C9.5 13.1716 8.82843 12.5 8 12.5C7.17157 12.5 6.5 13.1716 6.5 14C6.5 14.8284 7.17157 15.5 8 15.5Z"
              fill="#6F767E"
            />
          </svg>
        </button>
      </div>

      <div className="reviewer-info">
        <span className="reviewer-name">{review.name}</span>
        {review.verified && <span className="verified-badge"></span>}
      </div>

      <p className="review-text">{review.text}</p>

      <div className="review-date">Posted on {review.date}</div>
    </div>
  );
};

export default ReviewCard;
