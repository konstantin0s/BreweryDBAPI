import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header" style={headerStyle}>
        <h1>HouseOfBeer</h1>
        <Link className="link" style={linkStyle} to="/">
          Beers
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} className="link" to="/location">
          By location
        </Link>
      </header>

      <div className="footer-bottom">
     
          <p className="text-center"> 2020 Copyright © Beers </p>
       
      </div>
    </div>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  marginRight: "20px",
  marginLeft: "20px"
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Header;
