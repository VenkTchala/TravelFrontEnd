import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useStore } from "../store";

const Header = () => {
  const [userName, setUserName] = useState("");

  const { state, dispatch } = useStore();

  return (
    <div>
      <div className="headerContainer">
        <h1>
          <NavLink style={{ color: "white" }} to="/">
            Travel
          </NavLink>
        </h1>
        <div className="userSection">
          {state.loginState && (
            <p> {state.user.user.firstName + " " + state.user.user.lastName}</p>
          )}
          <NavLink to="/login">
            <p>login</p>
          </NavLink>
          <NavLink className="active" to="/signup">
            <p>signup</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
