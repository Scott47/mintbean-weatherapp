import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OpenWeather.css";
import Weather from "./Weather";

//Author: Scott Silver
//Purpose: Display current weather associated.
//Methods: GET Current Weather

const WeatherGET = (props) => {
  const [myWeather, setMyWeather] = useState({});
  const [myCity, setMyCity] = useState({});

  const getZipcode = (zipcode) => {
    getMyWeather(zipcode);
  };

  const getMyWeather = (zipcode) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=f8beefed0e999fac612802ea1139522d`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setMyWeather(data);
      });
  };
  const getMyCity = (city) => {
      fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f8beefed0e999fac612802ea1139522d`,
          {
              method: "GET"
          })
          .then((response) => response.json())
          .then((data) => {
              setMyWeather(data)
          })
  }

  const convertDeg = function (deg) {
    if (deg > 11.25 && deg < 33.75) {
      return "NNE";
    } else if (deg > 33.75 && deg < 56.25) {
      return "ENE";
    } else if (deg > 56.25 && deg < 78.75) {
      return "E";
    } else if (deg > 78.75 && deg < 101.25) {
      return "ESE";
    } else if (deg > 101.25 && deg < 123.75) {
      return "ESE";
    } else if (deg > 123.75 && deg < 146.25) {
      return "SE";
    } else if (deg > 146.25 && deg < 168.75) {
      return "SSE";
    } else if (deg > 168.75 && deg < 191.25) {
      return "S";
    } else if (deg > 191.25 && deg < 213.75) {
      return "SSW";
    } else if (deg > 213.75 && deg < 236.25) {
      return "SW";
    } else if (deg > 236.25 && deg < 258.75) {
      return "WSW";
    } else if (deg > 258.75 && deg < 281.25) {
      return "W";
    } else if (deg > 281.25 && deg < 303.75) {
      return "WNW";
    } else if (deg > 303.75 && deg < 326.25) {
      return "NW";
    } else if (deg > 326.25 && deg < 348.75) {
      return "NNW";
    } else {
      return "N";
    }
  };

  useEffect(() => {
    getMyWeather("37207");
    getMyCity("Nashville")
  }, []);

  return (
    <>
    <section id="background">
      <div class="container">
        <div class="row">
          <div class="col sm">
            <div class="card">
              <h5 class="card-header">
                Search for current weather by city or zipcode
              </h5>
              <div class="card-body">
                <Weather getZipcode={getZipcode} {...props} getMyCity={getMyCity} {...props} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        {myWeather.main ? (
          <div class="row">
            <div class="col sm-6">
              <div class="card">
                <div class="card-header card-header1">
                  <h5 class="">Weather today in {myWeather.name}</h5>
                  <div class="row">
                  <div class="col sm">
                      <h3>{Math.round(
                        ((myWeather.main.temp - 273.15) * 9) / 5 + 32
                      )}
                      ° F
                      <img
                        src={`http://openweathermap.org/img/wn/${myWeather.weather[0].icon}@2x.png`}
                        alt="weather-icon"
                      />
                      </h3>
                      {myWeather.weather[0].description}
                    </div>
                    <div class="col sm-6">
                      <p id="sunrise">
                        {" "}
                        🌅 Sunrise:{" "}
                        {new Date(
                          myWeather.sys.sunrise * 1000
                        ).toLocaleTimeString()}
                      </p>
                      <p id="sunrise">
                        🌇 Sunset:{" "}
                        {new Date(
                          myWeather.sys.sunset * 1000
                        ).toLocaleTimeString()}
                      </p>
                      {/* closes out sunrise/sunset */}
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col sm-4">
                      <strong>🌡 High/Low:</strong>{" "}
                    </div>
                    <div class="col sm-4">
                      {Math.round(
                        ((myWeather.main.temp_max - 273.15) * 9) / 5 + 32
                      )}
                      °/
                      {Math.round(
                        ((myWeather.main.temp_min - 273.15) * 9) / 5 + 32
                      )}
                      °
                    </div>
                    <div class="col sm-4">
                      <strong>💨 Wind:</strong>
                    </div>
                    <div class="col sm-4">
                      {convertDeg(myWeather.wind.direction)} at{" "}
                      {myWeather.wind.speed} mph
                    </div>
                  </div>
                  <div class="row">
                    <div class="col sm-4">
                      💧 <strong>Humidity:</strong>
                    </div>
                    <div class="col sm-4">{myWeather.main.humidity}%</div>
                    <div class="col sm-4">
                      <strong>
                        <img
                          src="https://img.icons8.com/ios/50/000000/atmospheric-pressure.png"
                          alt="air-pressure"
                          id="air"
                        />{" "}
                        Pressure:{" "}
                      </strong>
                    </div>
                    <div class="col sm-4">{myWeather.main.pressure * 0.030.toFixed(2)} in.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>There is no weather information for this zipcode</p>
        )}
      </div>
    </section>
    </>
  );
};

export default WeatherGET;


