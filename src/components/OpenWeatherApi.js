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
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=f8beefed0e999fac612802ea1139522d`,
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
    console.log(myWeather, "hello");
  }
  return (
    <>
      <Weather getZipcode={getZipcode} {...props}></Weather>
      <div className="myWeather-Div">
        {myWeather.main ? (
          <p>The temperature for {myWeather.name}, {myWeather.state} is {myWeather.main.temp}</p>
        ) : (
          <p>You have no money</p>
        )}
      </div>
    </>
  );
};

export default WeatherGET;
