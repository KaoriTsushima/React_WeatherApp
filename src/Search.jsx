import React, { useState } from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "281450ec88936f4fa8ee9864682b49a0";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(function (response) {
      setWeatherData(response.data);
    });
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="type city" onChange={updateCity} />
        <button type="submit">Search</button>
      </form>

      <Weather weatherData={weatherData} />
      <hr />
      <Forecast />
    </div>
  );
}
