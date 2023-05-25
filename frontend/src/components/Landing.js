import React from "react";
import logo from "../images/MYtineraryLogo.png";
import "../utils/landing.css";
import searchImage from "../images/search_image.png";
import homeIcon from "../images/home_icon.png";
import { Link } from "react-router-dom";

const Landing = () => {
  const userMenu = [
    {
      name: "Create Account",
      link: "/createaccount",
    },
    {
      name: "Log In",
      link: "/login",
    },
  ];
  return (
    <>
      <header>
        <img
          className="logo"
          src={logo}
          alt={logo}
          style={{ height: "80px" }}
        />
      </header>
      <body>
        <h1 className="title">
          Find your perfect trip, designed by insiders who know and love their
          cities.
        </h1>
        <div className="browser_container">
          <p className="browser_text">Start browsing</p>
          <img
            className="browser_icon"
            src={searchImage}
            alt={searchImage}
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <div className="user_container">
          <h2>Want to build your own MYtinerary?</h2>
          <div className="account_container">
            {userMenu.map((menuItem, index) => (
              <Link key={index} to={menuItem.link}>
                <li>{menuItem.name}</li>
              </Link>
            ))}
          </div>
        </div>
      </body>
      <footer>
        <img
          src={homeIcon}
          alt={homeIcon}
          style={{ width: "50px", height: "50px" }}
        />
      </footer>
    </>
  );
};

export default Landing;
