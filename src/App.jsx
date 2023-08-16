import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <footer>
        <em>
          <a
            href="https://github.com/KaoriTsushima/React_WeatherApp"
            target="_blank"
          >
            coded
          </a>{" "}
          by Kaori Tsushima
        </em>
      </footer>
    </div>
  );
}
