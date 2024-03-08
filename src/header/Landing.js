import React, { useState, useEffect } from "react";
import DataComponent from "../booking/DataComponent";

import { useStore } from "../store";

function Landing() {
  const { state, dispatch } = useStore();

  useEffect(() => {
    console.log(state);

    if (!state.loginState) {
      let user = localStorage.getItem("user");
      user = JSON.parse(user);
      console.log(user);
      if (user) {
        dispatch({ type: "SET_USER", payload: user });
      }
    }
  }, []);

  const [flightData, setFlightData] = useState(null);

  const [flightListdata, setFligthListData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const from = formData.get("from");
    const destination = formData.get("destination");
    const departureDate = formData.get("departureDate");
    const code = formData.get("currencyValues");
    addPosts(from, destination, departureDate, code);
  };

  const addPosts = async (from, destination, departureDate, code) => {
    await fetch("http://localhost:8000/offers/filter", {
      method: "Post",
      body: JSON.stringify({
        origin: from,
        destination: destination,
        date: departureDate,
        currencyCode: code,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFligthListData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div>
        <div className="searchbar_container">
          <form method="post" onSubmit={handleSubmit}>
            <label className="label" htmlFor="from">
              From
            </label>
            <select
              name="from"
              className="selection"
              aria-label="from"
              id="from"
            >
              <option value=" London Heathrow Airport">
                London Heathrow Airport
              </option>

              <option
                value="
              Birmingham International Airport
              "
              >
                Birmingham International Airport
              </option>
              <option value="Tokyo Haneda">Tokyo Haneda</option>
              <option value="Paris CDG">Paris CDG</option>
              <option value="John F. Kennedy International Airport">
                John F. Kennedy International Airport
              </option>
              <option value="Beijing Capital International Airport">
                Beijing Capital International Airport
              </option>
              <option value="Dallas–Fort Worth International Airport">
                Dallas–Fort Worth International Airport
              </option>
              <option value="Los Angeles International Airport">
                Los Angeles International Airport
              </option>
              <option value="Indira Gandhi International Airport">
                Indira Gandhi International Airport
              </option>
              <option value="Sydney Airport">Sydney Airport</option>
              <option value="Madrid Barajas">Madrid Barajas</option>
              <option value="Tokyo Narita">Tokyo Narita</option>
              {/* <option value="London Heathrow Airport">
                London Heathrow Airport
              </option>
              <option value="London Gatwick Airport">
                London Gatwick Airport
              </option>
              <option value="London Stansted Airport">
                London Stansted Airport
              </option> */}
            </select>
            <label className="label" htmlFor="destination">
              Destination
            </label>
            <select
              name="destination"
              className="selection"
              aria-label="destination"
              id="destination"
            >
              <option value="London Heathrow Airport">
                London Heathrow Airport
              </option>
              <option value="Birmingham International Airport">
                Birmingham International Airport
              </option>
              <option value="Tokyo Haneda">Tokyo Haneda</option>
              <option value="Paris CDG">Paris CDG</option>
              <option value="John F. Kennedy International Airport">
                John F. Kennedy International Airport
              </option>
              <option value="Beijing Capital International Airport">
                Beijing Capital International Airport
              </option>
              <option value="Dallas–Fort Worth International Airport">
                Dallas–Fort Worth International Airport
              </option>
              <option value="Los Angeles International Airport">
                Los Angeles International Airport
              </option>
              <option value="Indira Gandhi International Airport">
                Indira Gandhi International Airport
              </option>
              <option value="Sydney Airport">Sydney Airport</option>
              <option value="Madrid Barajas">Madrid Barajas</option>
              <option value="Tokyo Narita">Tokyo Narita</option>
              {/* <option value="Paris Charles de Gaulle Airport">
                Paris Charles de Gaulle Airport
              </option>
              <option value="Amsterdam Airport Schiphol">
                Amsterdam Airport Schiphol
              </option>
              <option value="Frankfurt Airport">Frankfurt Airport</option> */}
            </select>
            <label className="label" htmlFor="departureDate">
              Departure date
            </label>
            <input
              id="departureDate"
              className="selection"
              type="date"
              name="departureDate"
            />
            <select
              name="currencyValues"
              className="selection"
              aria-label="currencyValues"
              id="currencyValues"
            >
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
              <option value="BAM">BAM</option>
            </select>
            <button type="submit" className="search_button">
              Search
            </button>
          </form>
        </div>
        {flightData && (
          <div>
            <h2>Flight Information</h2>
            <p>From: {flightData.from}</p>
            <p>To: {flightData.to}</p>
            <p>Departure Date: {flightData.departureDate}</p>
            {/* Add more details as needed */}
          </div>
        )}
      </div>

      {flightListdata.map((item) => (
        <DataComponent key={item.id} data={item} />
      ))}
    </div>
  );
}

export default Landing;
