import React from "react";
import StarRating from "../StarRating";
import "./ProductCard.scss";

const ProductCard = ({ product, image }) => {
  if (!product) {
    return null;
  }

  const calculateDiscount = (price, originalPrice) => {
    if (!originalPrice) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  const originalPrice = product.originalPrice || product.oldPrice;
  const totalRatings = product.totalRatings || product.count;
  const discount = calculateDiscount(product.price, originalPrice);

  return (
    <div className="product-card">

      <div className="product-image-container">
        <img
          src={image || product.images?.[0]}
          alt={product?.title || "Product"}
          className="product-image"
        />
      </div>

      <h3 className="product-title">{product?.title || "Unnamed Product"}</h3>

      <div className="product-rating">
        <StarRating rating={product?.rating || 0} size="sm" />
        <span className="total-ratings">{totalRatings || 0}</span>
      </div>

      <div className="product-price">
        <span className="current-price">${product?.price || 0}</span>
        {originalPrice && originalPrice > product.price && (
          <>
            <span className="original-price">${originalPrice}</span>
            <span className="discount-badge">-{discount}%</span>
          </>
        )}
      </div>
      
    </div>
  );
};

export default ProductCard;
