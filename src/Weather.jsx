import React from "react";

export default function Weather(props) {
  if (props.weatherData) {
    const temp = props.weatherData.main.temp;
    const description = props.weatherData.weather[0].description;
    const wind = props.weatherData.wind.speed;
    const humidity = props.weatherData.main.humidity;

    return (
      <>
        <h2>Selected city is {props.weatherData.name}</h2>
        <div className="Weather">
          <ul>
            <li>Temperature: {Math.round(temp)}℃</li>
            <li>Description: {description}</li>
            <li>Wind: {Math.round(wind)} mph</li>
            <li>Humidity: {humidity} %</li>
          </ul>
        </div>
      </>
    );
  }

  return null;
}
