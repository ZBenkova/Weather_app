import { useState } from "react";

function Weather() {
  const [weather, setWeather] = useState("Sunny ☀️");

  function changeWeather() {
    if (weather === "Sunny ☀️") {
      setWeather("Rainy 🌧️");
    } else {
      setWeather("Sunny ☀️");
    }
  }

  return (
    <div className="card">
      <h2>Weather in Olomučany</h2>
      <p>Today it’s {weather}</p>
      <button onClick={changeWeather}>Change Weather</button>
    </div>
  );
}

export default Weather;
