import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
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
    </div>
  );
}
