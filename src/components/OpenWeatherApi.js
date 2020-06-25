import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OpenWeather.css";
import Weather from "./Weather";

//Author: Scott Silver
//Purpose: Display Currency associated with fetch.
//Methods: GET Currency

const WeatherGET = (props) => {
  const [myWeather, setMyWeather] = useState({});

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

  var convertDeg = function(deg){
    if (deg>11.25 && deg<33.75){
      return "NNE";
    }else if (deg>33.75 && deg<56.25){
      return "ENE";
    }else if (deg>56.25 && deg<78.75){
      return "E";
    }else if (deg>78.75 && deg<101.25){
      return "ESE";
    }else if (deg>101.25 && deg<123.75){
      return "ESE";
    }else if (deg>123.75 && deg<146.25){
      return "SE";
    }else if (deg>146.25 && deg<168.75){
      return "SSE";
    }else if (deg>168.75 && deg<191.25){
      return "S";
    }else if (deg>191.25 && deg<213.75){
      return "SSW";
    }else if (deg>213.75 && deg<236.25){
      return "SW";
    }else if (deg>236.25 && deg<258.75){
      return "WSW";
    }else if (deg>258.75 && deg<281.25){
      return "W";
    }else if (deg>281.25 && deg<303.75){
      return "WNW";
    }else if (deg>303.75 && deg<326.25){
      return "NW";
    }else if (deg>326.25 && deg<348.75){
      return "NNW";
    }else{
      return "N";
    }
}

  useEffect(() => {
    getMyWeather("37207");
  }, []);

  if (myWeather.main) {
    console.log(myWeather.weather[0].icon, "hello");
  }

  return (
    <>
    <h3>Search your weather in the United States by zip code </h3>
      <Weather getZipcode={getZipcode} {...props} />
      <div className="myWeather-Div">
        {myWeather.main ? (
          <div className="container">
            <div className="row">
              <table>
                <thead>
                  <tr>
                    <th><h3>{myWeather.name}</h3></th>
                    <th>
                      {Math.round(
                        ((myWeather.main.temp - 273.15) * 9) / 5 + 32
                      )}
                      ° F
                    </th>
                    <br/>
                    <th></th>
                    <th className="thead-sunrise">Sunrise: {new Date(myWeather.sys.sunrise * 1000).toLocaleTimeString()}</th>
                    <th className="thead-sunrise"> Sunset: {new Date(myWeather.sys.sunset * 1000).toLocaleTimeString()}</th>
                  </tr>
                </thead>
                <tbody className="table">
                  <tr className="weather-info"><td>
                      <img
                        src={`http://openweathermap.org/img/wn/${myWeather.weather[0].icon}@2x.png`}
                        />
                    </td>
                  <td id="align-bottom">
                    {myWeather.weather[0].description}
                    </td>
                        <td id="align-bottom">Feels like: {Math.round((myWeather.main.feels_like - 273.15) * 9 /5 +32)}</td>
                        <td></td>
                    <td className="thead-sunrise" id="align-bottom">
                        <br />
                        High:{" "}
                        {Math.round(
                          ((myWeather.main.temp_max - 273.15) * 9) / 5 + 32
                        )}
                        °
                      </td>
                      <td className="thead-sunrise" id="align-bottom">
                        Low:{" "}
                        {Math.round(
                          ((myWeather.main.temp_min - 273.15) * 9) / 5 + 32
                        )}
                        °
                      </td>
                  </tr>
                  <tr>
                     <td>Wind is {convertDeg(myWeather.wind.direction)} at {myWeather.wind.speed} mph  </td>
                     <td></td>
                     <td>Humidity is {myWeather.main.humidity}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>There is no weather information for this zipcode</p>
        )}
      </div>
    </>
  );
};

export default WeatherGET;
