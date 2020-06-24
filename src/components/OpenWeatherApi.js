import React, { useEffect, useState } from "react";
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
    getMyWeather('37207');
  }, []);

  if (myWeather.main) {
    console.log(myWeather.weather[0].icon, "hello");
  }
  return (
    <>
      <Weather getZipcode={getZipcode} {...props} />
      <div className="myWeather-Div">
        {myWeather.main ? (
            <div>
          <p>The temperature for {myWeather.name} is {Math.round((myWeather.main.temp - 273.15) * 9/5 + 32)}° Fahrenheit</p>
          <img src={`http://openweathermap.org/img/wn/${myWeather.weather[0].icon}@2x.png`}/>
          {/* <img src="http://openweathermap.org/img/wn/10d@2x.png"/> */}
          </div>

        ) : (
          <p>There is no weather information for this zipcode</p>
        )}

      </div>
    </>
  );
};

export default WeatherGET;
