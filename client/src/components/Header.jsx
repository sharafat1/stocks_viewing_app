import React from "react";

import Nav from "./Nav.js";

/**
 * This is the footer of the web page and it can be updated.
 * It also has an email button
 */
export default function Header() {
  return (
    <header>
      <div id="logo">
        <h2><b>American Stock Viewer - <em>ASV</em></b></h2>
      </div>
      {/* Displayin all the buttons at the top */}
      <Nav />
    </header>
  );
}
