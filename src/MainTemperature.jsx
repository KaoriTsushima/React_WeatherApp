import React, { useState } from "react";
import "./MainTemperature.css";
export default function MainTemperature(props) {
  const [unit, setUnit] = useState("ctemp");
  function showFtemp(event) {
    event.preventDefault();
    setUnit("ftemp");
  }
  function showCtemp(event) {
    event.preventDefault();
    setUnit("ctemp");
  }
  function fTempConversion() {
    return (props.ctemp * 9) / 5 + 32;
  }

  if (unit === "ctemp") {
    return (
      <div className="MainTemperature">
        <h3>
          {Math.round(props.ctemp)}
          <span className="unit">
            ℃ /
            <a href="/" onClick={showFtemp}>
              F
            </a>
          </span>
        </h3>
      </div>
    );
  } else {
    return (
      <div className="MainTemperature">
        <h3>
          {Math.round(fTempConversion())}
          <p className="unit">
            <a href="/" onClick={showCtemp}>
              ℃{" "}
            </a>
            / F
          </p>
        </h3>
      </div>
    );
  }
}
