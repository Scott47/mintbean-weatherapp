import React, { useState } from "react";

export default function Weather(props) {
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (evt) => {
      evt.preventDefault();
      if (city != null) {
        props.getMyCity(city)
      }
      else {
        props.getZipcode(zipcode)
      }
  }
//   const handleCitySubmit = (evt) => {
//       evt.preventDefault();
//       props.getMyCity(city)
//   }

  ///add button that calls props.getZipcode
  return (
    <form onSubmit={handleSubmit}>
         <label>
        City:
        <input
        //   onSubmit={handleCitySubmit}
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
      <label>&emsp;
        Zipcode:
        <input

          type="text"
          value={zipcode}
          onChange={e => setZipcode(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />

    </form>
  );
}


