import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className="home-ul">
      <li className="home-ll">
        {/* Home link */}
        <Link to="/mainhome" className="active home-a">
          <h1>Home</h1>
        </Link>
      </li>
      <li className="home-ll">
        {/* Add User link */}
        <Link to="/adduser" className="home-a">
          <h1>Add User</h1>
        </Link>
      </li>
      <li className="home-ll">
        {/* User Details link */}
        <Link to="/userdetails" className="home-a">
          <h1>User Details</h1>
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
