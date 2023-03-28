import React, { useState } from "react";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header" style={{ backgroundColor: "white" }}>
      <Logo />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}

    </div>
  );
};
