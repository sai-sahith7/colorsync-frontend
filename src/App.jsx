import React, { useState } from "react";
import ColorPicker from "./components/ColorPicker";
import ProductList from "./components/ProductList";
import Loader from "./components/Loader";
import "./styles/App.css";

const App = () => {
  const [keyword, setKeyword] = useState("");
  const [hexCode, setHexCode] = useState("#000000");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    if (!keyword.trim()) {
      setError("Please enter a search keyword");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const modifiedColor = hexCode.slice(1);
      const response = await fetch(
        `https://a7bd-2409-40f4-35-f6db-a1f5-b407-1687-c307.ngrok-free.app/search?keyword=${keyword}&color=${modifiedColor}`
      );
      const data = await response.json();
      setProducts(data.products);
      console.log(data.products);
    } catch (err) {
      setError("Failed to fetch products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="background-animation"></div>
      <header className="header">
        <h1 className="title">ColorSync Product Finder</h1>
        <div className="subtitle">
          Discover products in your favorite colors
        </div>
      </header>

      <div className="container">
        <div className="search-container">
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter product keyword..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="search-input"
            />
            <ColorPicker hexCode={hexCode} setHexCode={setHexCode} />
            <button onClick={fetchProducts} className="search-button">
              <span className="button-text">Search</span>
              <span className="button-icon">→</span>
            </button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </div>

        {loading ? (
          <Loader />
        ) : (
          products.length > 0 && <ProductList products={products} />
        )}
      </div>
    </div>
  );
};

export default App;
