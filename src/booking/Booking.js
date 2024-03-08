import React, { useEffect, useState } from "react";
import axios from "axios";
import DataComponent from "./DataComponent";
import Landing from "../header/Landing";

const Booking = (props) => {
  const [jsonData, setJsonData] = useState([]);

  return (
    <div>
      <div className="bookingContainer">
        <Landing />
        {/* {jsonData.map((item) => (
          <DataComponent key={item.id} data={item} />
        ))} */}
      </div>
    </div>
  );
};

export default Booking;
