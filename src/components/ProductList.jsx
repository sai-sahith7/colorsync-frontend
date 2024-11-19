import React from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))
      ) : (
        <div className="no-products">
          <div className="empty-state">
            <span className="empty-icon">🔍</span>
            <p>No products found. Try another keyword or color.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
