import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import  {useHistory} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Badge } from "reactstrap";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import logginProcess from "./Login"
import checkingA from "./Login"

/**
 * This is the about of the web page and it can be updated.
 * This has user friendly information, if the user needs help they can contact the ASV team
 * It also has an email button
 */
export default function About() {
  return(
    <div className="container" style={{height: "692px"}}>
      <h2>This is the About page contains information about <br/>how 
      to use the site, contact details, office opening hours.</h2>

      <p>American Stock Viewer provides help and support any time.
      </p>

      <ul>
        <li> <h3>Contact details</h3>
        <ul>
          <li>
            Email: <a href="mailto:Americanstockviewer.com.au">Americanstockviewer.com.au</a>
          </li>

          <li>
            Phone no: 0123456789
          </li>

        </ul>
        </li>
        
        <li>
        <h3>Office Opening Hourse</h3>
        <ul>
          <li>Monday 09:00 - 16:00</li>
          <li>Tuesday 09:00 - 16:00</li>
          <li>Wednesday 09:00 - 16:00</li>
          <li>Thursday 09:00 - 16:00</li>
          <li>Friday 09:00 - 16:00</li>
          <li>Saturday 09:00 - 16:00</li>
          <li>Sunday Closed</li>
          <li>Public holidays Close</li>
        </ul>
      </li>

      <p><b>Please only contact us during office hours!</b></p>
      
    {/* Send an email for help */}
      <button style={{color: 'blue'}} ><a href="mailto:Americanstockviewer.com.au">Email us</a></button>
      </ul>
    </div>
  ); 
}
