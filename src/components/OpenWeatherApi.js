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
                    <th>{myWeather.name}</th>
                    <th>
                      {Math.round(
                        ((myWeather.main.temp - 273.15) * 9) / 5 + 32
                      )}
                      ° F
                    </th>
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

                    <td id="align-bottom">
                        High:{" "}
                        {Math.round(
                          ((myWeather.main.temp_max - 273.15) * 9) / 5 + 32
                        )}
                        °
                      </td>
                      <td id="align-bottom">
                        Low:{" "}
                        {Math.round(
                          ((myWeather.main.temp_min - 273.15) * 9) / 5 + 32
                        )}
                        °
                      </td>



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
