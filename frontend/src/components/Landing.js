import React from "react";
import logo from "../images/MYtineraryLogo.png";
import "../containers/landing.css";
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
      <>
        <h1 className="title">
          Find your perfect trip, designed by insiders who know and love their
          cities.
        </h1>
        <div className="browser_container">
          <p className="browser_text">Start browsing</p>
          <Link to="/cities">
            <img
              className="browser_icon"
              src={searchImage}
              alt={searchImage}
              style={{ width: "200px", height: "200px" }}
            />
          </Link>
        </div>
        <div className="user_container">
          <h2>
            Want to <span className="emphasis">build your own</span> MYtinerary?
          </h2>
          <div className="account_container">
            {userMenu.map((menuItem, index) => (
              <Link key={index} to={menuItem.link}>
                <li>{menuItem.name}</li>
              </Link>
            ))}
          </div>
        </div>
      </>
      <footer>
        <Link to="/" className="home__icon">
          <img
            src={homeIcon}
            alt={homeIcon}
            style={{ width: "50px", height: "50px" }}
          />
        </Link>
      </footer>
    </>
  );
};

export default Landing;
