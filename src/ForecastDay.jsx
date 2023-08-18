import React from "react";
import "./ForecastDay.css";
export default function ForecastDay(props) {
  const maxTemp = `${Math.round(props.dailyForecast.temp.max)} ℃`;
  const minTemp = `${Math.round(props.dailyForecast.temp.min)} ℃`;
  const icon = props.dailyForecast.weather[0].icon;

  function day() {
    let date = new Date(props.dailyForecast.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <img
        alt="weather icon"
        height={100}
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <div className="Forecast-temperatures">
        <span className="Forecast-temperature-max">{maxTemp}</span>
        <span> / </span>
        <span className="Forecast-temperature-min">{minTemp}</span>
      </div>
    </div>
  );
}
