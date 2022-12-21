import React, { useState } from "react";

const HexColor = () => {
  const [color, setColor] = useState("");

  return (
    <>
      <div>
        <h1>Hex color code maker</h1>
        <p>
          Choose color panel from the color panel and get the hex value of that.
        </p>
        <label htmlFor="color">
          <input
            type="color"
            id="color"
            name="color"
            placeholder="choose your color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <h2>{color}</h2>
      </div>
    </>
  );
};

export default HexColor;
