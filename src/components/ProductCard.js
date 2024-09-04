import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <a
        href={"https://www.myntra.com/" + product.landingPageUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={product.searchImage} alt={product.productName} />
        <div className="product-info">
          <h3>{product.productName}</h3>
          <p>{product.brand}</p>
          <p>
            Rating: {product.rating} ({product.ratingCount} reviews)
          </p>
          <p>
            Price: ₹{product.price}{" "}
            <span style={{ textDecoration: "line-through" }}>
              ₹{product.mrp}
            </span>
          </p>
          <p>{product.discountDisplayLabel}</p>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
