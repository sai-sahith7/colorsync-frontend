import React, { useState } from "react";
import ColorPicker from "./components/ColorPicker";
import ProductList from "./components/ProductList";

const App = () => {
  const [keyword, setKeyword] = useState("");
  const [hexCode, setHexCode] = useState("#000000");
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const modifiedColor = hexCode.slice(1);
    const response = await fetch(
      `http://localhost:8000/myntra?keyword=${keyword}&color=${modifiedColor}`
    );
    const data = await response.json();
    setProducts(data.products);
  };

  return (
    <div>
      <header>
        <h1>ColorSync Product Finder</h1>
      </header>
      <div className="container">
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter keyword..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <ColorPicker hexCode={hexCode} setHexCode={setHexCode} />
          <button onClick={fetchProducts}>Search</button>
        </div>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default App;
