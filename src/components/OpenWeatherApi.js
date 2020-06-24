import React, { useEffect, useState } from "react";

//Author: Scott Silver
//Purpose: Display Currency associated with fetch.
//Methods: GET Currency

const WeatherGET = (props) => {
  const [myWeather, setMyWeather] = useState({ weather_current: {} });

  const getMyWeather = () => {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Nashville,us&APPID=f8beefed0e999fac612802ea1139522d",
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
    getMyWeather();
  }, []);

  console.log(myWeather.main, "hello");
  return (

    <div className="myWeather-Div">
      {/* <p>The temperature is ${myWeather} </p> */}

    </div>
  );
};

export default WeatherGET;
