import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './OpenWeather.css'
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
      <Weather getZipcode={getZipcode} {...props} />
      <div className="myWeather-Div">
        {myWeather.main ? (
          <div className="container">
            <table>
                <th>{myWeather.name}</th>
              <tr>
              <p>
                  {Math.round(((myWeather.main.temp - 273.15) * 9) / 5 + 32)}°
                  Fahrenheit
                </p>
                <td className="table">
                <img
                  src={`http://openweathermap.org/img/wn/${myWeather.weather[0].icon}@2x.png`}
                />
                <br />
                  {myWeather.weather[0].description}


                </td>
                <td>
                    <table className="weather-info">
                    <tr>
     			    </tr>
                    <tr>
     				<td>High: {Math.round(
                        ((myWeather.main.temp_max - 273.15) * 9) / 5 + 32
                      )}
                      °</td>
     				<td>Low: {Math.round(
                        ((myWeather.main.temp_min - 273.15) * 9) / 5 + 32
                      )}
                      °</td>
     			    </tr>
                 </table>
                </td>
              </tr>
            </table>
          </div>
        ) : (
          <p>There is no weather information for this zipcode</p>
        )}
      </div>
    </>
  );
};

export default WeatherGET;
