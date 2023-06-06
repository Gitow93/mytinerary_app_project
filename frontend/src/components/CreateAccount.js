import React from "react";
import homeIcon from "../images/home_icon.png";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <>
      <p>Create Account</p>
      <footer>
        <Link to="/">
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

export default CreateAccount;
