import React from "react";

const ColorPicker = ({ hexCode, setHexCode }) => {
  return (
    <input
      type="color"
      value={hexCode}
      onChange={(e) => setHexCode(e.target.value)}
    />
  );
};

export default ColorPicker;
