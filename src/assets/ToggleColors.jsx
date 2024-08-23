import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function ToggleColors() {
  const [color, setColor] = useState("blue");
  const click = (color) => {
    setColor((prev) => (prev === "blue" ? "yellow" : "blue"));
  };
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <div>
      <div className="App">
        <button
          onClick={() => {
            click("yellow");
          }}
        >
          Change Color
        </button>
      </div>
    </div>
  );
}

export default ToggleColors;
