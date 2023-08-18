import React, { useState, useEffect } from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function Forecast(props) {
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (props.coordinates) {
      load();
    }
    // eslint-disable-next-line
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily.slice(0, 5));
  }

  function load() {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiKey = "281450ec88936f4fa8ee9864682b49a0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (forecast) {
    return (
      <div className="Forecast">
        <div className="grid-forecast-container">
          {forecast.map(function (dailyForecast, index) {
            return (
              <div key={index}>
                <ForecastDay dailyForecast={dailyForecast} />
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
