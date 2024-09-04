import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))
      ) : (
        <p>No products found. Try another keyword or color.</p>
      )}
    </div>
  );
};

export default ProductList;
