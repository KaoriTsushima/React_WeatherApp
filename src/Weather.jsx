import React from "react";
import "./Weather.css";

export default function Weather(props) {
  if (props.weatherData) {
    const temp = props.weatherData.main.temp;
    const description = props.weatherData.weather[0].description;
    const wind = props.weatherData.wind.speed;
    const humidity = props.weatherData.main.humidity;

    return (
      <>
        <div className="Weather">
          <div className="grid-container">
            <div className="col">
              <h2> {props.weatherData.name}</h2>
              <h3>Temperature: {Math.round(temp)}℃</h3>
            </div>
            <div className="col">
              <p>Description: {description}</p>
              <p>Wind: {Math.round(wind)} mph</p>
              <p>Humidity: {humidity} %</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
}
