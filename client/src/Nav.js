import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add">Add Products</Link>
        </li>
        <li>
          <Link to="/update">update Page</Link>
        </li>
        <li>
          <Link to="/logout">logout Page</Link>
        </li>
        <li>
          <Link to="/profile">profile Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
