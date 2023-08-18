import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import { WiCloud, WiDaySunny, WiRain } from "weather-icons-react";

export default function Forecast(props) {
  console.log(props);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (props.coordinates) {
      load();
    }
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response);
    setForecast(response.daily);
  }

  function load() {
    console.log(props);
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiKey = "281450ec88936f4fa8ee9864682b49a0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (forecast) {
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
  } else {
    return null;
  }
}
