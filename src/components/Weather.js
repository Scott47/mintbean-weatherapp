import React, { useState } from "react";

export default function Weather(props) {
  const [zipcode, setZipcode] = useState("");

  const handleSubmit = (evt) => {
      evt.preventDefault();
      props.getZipcode(zipcode)
  }

  ///add button that calls props.getZipcode
  return (
    <form onSubmit={handleSubmit}>
      <label>
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


