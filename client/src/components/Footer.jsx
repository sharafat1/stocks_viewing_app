import React from "react";

/**
 * This is the footer of the web page and it can be updated.
 * It also has an email button
 */
export default function Footer() {
  return (
    <footer>
      <span>
        American Stock Viewer or ASV
        <br />
        Copyright &copy; 2020 Powered by Swagger API
        <br />
        For help email us <a href="mailto:Americanstockviewer.com.au" style={{color: 'white'}}>here</a>
        
      </span>
    </footer>
  );
}
