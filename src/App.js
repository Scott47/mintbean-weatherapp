import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherGET from './components/OpenWeatherApi'

function App() {
  return (
    <header>
    <div className="App">
      <WeatherGET />

    </div>
    </header>
  );
}

export default App;
