import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./login/Signup";
import Login from "./login/Login";
import Booking from "./booking/Booking";
import Header from "./header/Header";
import "./App.css";
import { StoreProvider } from "./store";
import { useStore } from "./store";

function App() {
  return (
    <Router>
      <StoreProvider>
        <div className="mainContainer">
          <Header />
          <div className="heroContainer">
            <Routes>
              <Route path="/" element={<Booking />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </StoreProvider>
    </Router>
  );
}

export default App;
