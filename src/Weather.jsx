import React from "react";
import "./Weather.css";
import FormatDate from "./FormatDate";
import MainTemperature from "./MainTemperature";

export default function Weather(props) {
  if (props.weatherData) {
    const temp = props.weatherData.main.temp;
    const description = props.weatherData.weather[0].description;
    const wind = props.weatherData.wind.speed;
    const humidity = props.weatherData.main.humidity;
    let date = new Date(props.weatherData.dt * 1000);
    return (
      <>
        <div className="Weather">
          <FormatDate date={date} />
          <div className="grid-container">
            <div className="col">
              <h2> {props.weatherData.name}</h2>
              <MainTemperature ctemp={temp} />
            </div>
            <div className="col">
              <img
                alt="weather icon"
                height={200}
                src={`https://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`}
              />
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
