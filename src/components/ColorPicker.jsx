import React from "react";
import "../styles/ColorPicker.css";

const ColorPicker = ({ hexCode, setHexCode }) => {
  return (
    <div className="color-picker-container">
      <input
        type="color"
        value={hexCode}
        onChange={(e) => setHexCode(e.target.value)}
        className="color-picker"
      />
      <span className="color-value">{hexCode}</span>
    </div>
  );
};

export default ColorPicker;
