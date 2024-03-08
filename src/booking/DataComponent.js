import React from "react";
import axios from "axios";

import { useStore } from "../store";

import { useNavigate } from "react-router-dom";

const DataComponent = ({ data }) => {
  const { state, dispatch } = useStore();

  let navigate = useNavigate();

  if (!data || !data.offer) {
    return <div>No data available</div>;
  }

  const handleSubmit = async (e) => {
    await bookTicket();
  };

  const bookTicket = async () => {
    try {
      if (state.loginState) {
        console.log(state.user.token);
        const response = await axios.post(
          `http://localhost:8000/offers/bookticket?id=${data.id}`,
          {
            id: data.id,
          },
          {
            headers: {
              Authorization: `Bearer ${state.user.token}`,
            },
          }
        );
      } else {
        navigate("/login");
      }
    } catch (error) {}
  };

  return (
    <div
      className="fligh_data"
      style={{
        backgroundColor: "lightblue",
        fontSize: "20px",
        width: "1300px",
        padding: "10px",
      }}
    >
      <div>
        <p>{data.date}</p>
      </div>
      <div>
        <p> From : {" " + data.offer.origin} </p>
        <p> {data.offer.originCity}</p>
      </div>
      <div>
        <p>Destination : {" " + data.offer.destination}</p>
        <p>{data.offer.destinationCity}</p>
      </div>
      <p>airline : {" " + data.offer.airline}</p>
      <p>available Seats : {" " + data.offer.available}</p>
      <p>connections : {" " + data.offer.connections}</p>
      <p>Price : {" " + data.offer.price + " /-"}</p>
      <p>RemaniningSeats : {" " + data.remainingSeats}</p>

      <div className="book">
        <button
          style={{
            backgroundColor: "orange",
            padding: "10px",
            fontSize: "20px",
            marginTop: "20px",
          }}
          onClick={handleSubmit}
        >
          {" "}
          book ticket
        </button>
      </div>
    </div>
  );
};

export default DataComponent;
