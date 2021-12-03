import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App </h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://eloquent-elion-c58bd0.netlify.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Nathalie Rognon{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/natkilima/react-weather-app-dec"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
