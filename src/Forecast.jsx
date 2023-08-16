import React from "react";
import "./Forecast.css";
import { WiCloud, WiDaySunny, WiRain } from "weather-icons-react";

export default function Forecast() {
  let forecasts = [
    {
      day: "Day1",
      icon: <WiDaySunny size={50} color="orange" />,
      temp: "High:20℃ Low: 10℃",
    },
    {
      day: "Day2",
      icon: <WiCloud size={50} color="gray" />,
      temp: "High:20℃ Low: 10℃",
    },
    {
      day: "Day3",
      icon: <WiRain size={50} color="blue" />,
      temp: "High:20℃ Low: 10℃",
    },
    {
      day: "Day4",
      icon: <WiRain size={50} color="blue" />,
      temp: "High:20℃ Low: 10℃",
    },
    {
      day: "Day5",
      icon: <WiRain size={50} color="blue" />,
      temp: "High:20℃ Low: 10℃",
    },
  ];
  return (
    <div className="Forecast">
      <div className="grid-forecast-container">
        {forecasts.map(function (forecast, index) {
          return (
            <div key={index}>
              <h3>{forecast.day}</h3>
              <p>{forecast.icon}</p>
              <p> {forecast.temp}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
