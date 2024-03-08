import React, { useState } from "react";
import axios from "axios";

import "./Signup.css";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/register/",
        {
          email,
          password,
          firstName,
          lastName,
        }
      );
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };
  return (
    <div>
      <form action="submit" method="post" onSubmit={handleSubmit}>
        <div className="signupcontainer">
          <input
            type="text"
            placeholder="First Name"
            className="inputBox"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="inputBox"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="inputBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="inputBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="commonButton">SIGN UP</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
