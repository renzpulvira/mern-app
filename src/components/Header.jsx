import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="compo-header">
      <div className="container">
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
