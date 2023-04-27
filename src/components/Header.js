import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "./common/useOnline";
const loggedInUser = () => {
  // API call to check authentication
  return false;
};
const Logo = () => (
  <a href="/">
    <img
      alt="logo"
      src="https://10619-2.s.cdn12.com/rests/original/109_511243776.jpg"
      className="logo"
    ></img>
  </a>
);

export const HeaderComponent = () => {
  const isOnline = useOnline();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header" style={{ backgroundColor: "white" }}>
      <Logo />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li><Link to="instamart">Instamart</Link></li>
          <li>Cart</li>
        </ul>
      </div>
      <h1>{isOnline ? "Online 🟢 " : "Offline 🔴"}</h1>
      {
        isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )
      }

    </div >
  );
};
