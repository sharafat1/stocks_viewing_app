import React from "react";
import { Link } from "react-router-dom";

/**
 * This is the Nav list of buttons which will be appearing at the top of the home page in the headers.
 */
export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link key="home" to="/"><b>Home</b></Link>
        </li>

        <li>
          <Link key="stocklist" to="/stocklist"><b>Stock List</b></Link>
        </li>

        <li>
          <Link key="about" to="/about"><b>About</b></Link>
        </li>

        <li>
          <Link key="register" to="/register"><b>Register</b></Link>
        </li>

        <li>
          <Link key="login" to="/login"><b>Log in</b></Link>
        </li>

        <li>
          <Link key="quote" to="/authed"><b>Restricted Price History</b></Link>
        </li>

      </ul>
    </nav>
  );
}
