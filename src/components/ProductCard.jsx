import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={
            product.searchImage ? product.searchImage : product.images[0].src
          }
          alt={product.productName}
          className="product-image"
        />
        <div className="color-match">
          <div className="color-indicator">
            <span
              className="color-dot"
              style={{ backgroundColor: product.dominant_color }}
            ></span>
            <span className="match-score">
              {product.color_match_score}% match
            </span>
          </div>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.productName}</h3>
        <div className="brand-source">
          <span className="brand">{product.brand}</span>
          <span className="source-tag">{product.source}</span>
        </div>
        <div className="rating">
          <span className="stars">
            {"★".repeat(Math.round(product.rating || 0))}
          </span>
          <span className="review-count">
            {product.ratingCount ? `(${product.ratingCount})` : ""}
          </span>
        </div>
        <div className="price-section">
          <span className="current-price">₹{product.price}</span>
          {product.mrp > product.price && (
            <span className="original-price">₹{product.mrp}</span>
          )}
          {product.discountDisplayLabel && (
            <span className="discount">{product.discountDisplayLabel}</span>
          )}
        </div>
      </div>

      <a
        href={
          product.landingPageUrl
            ? `https://www.myntra.com/${product.landingPageUrl}`
            : `https://www2.hm.com/en_in/productpage.${product.productId}.html`
        }
        target="_blank"
        rel="noopener noreferrer"
        className="view-button"
      >
        View Details
      </a>
    </div>
  );
};

export default ProductCard;
