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
      className="h-10 px-2"
    ></img>
  </a>
);

export const HeaderComponent = () => {
  const isOnline = useOnline();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header flex bg-pink-50" >
      <div className="flex py-8 w-2/12">  <Logo /></div>

      <div className="nav-items w-5/12">
        <ul className="flex py-10">
          <li className="px-2"><Link to="/">Home</Link></li>
          <li className="px-2"><Link to="about">About</Link></li>
          <li className="px-2"><Link to="contact">Contact</Link></li>
          <li className="px-2"><Link to="instamart">Instamart</Link></li>
          <li className="px-2">Cart</li>
        </ul>
      </div>
      <div> <h1 className="px-2 py-10 ">{isOnline ? "Online 🟢 " : "Offline 🔴"}</h1></div>
      <div className="px-2 py-10 w-1/12 ">  {
        isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )
      }</div>


    </div >
  );
};
