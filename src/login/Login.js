import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { useStore } from "../store";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch } = useStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/v1/token/", {
        email,
        password,
      });

      const userString = JSON.stringify(response.data);

      localStorage.setItem("user", userString);

      dispatch({ type: "SET_USER", payload: response.data });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div>
      <div className="loginContainer">
        <form action="submit" method="post" onSubmit={handleSubmit}>
          <input
            type="text"
            className="inputBox"
            placeholder="E mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="inputBox"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="commonButton">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
