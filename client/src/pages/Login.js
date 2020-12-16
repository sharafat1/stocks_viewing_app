import { Switch, Route,Link, Redirect } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import  {useHistory} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Badge, CardBody } from "reactstrap";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";



//API login url
const API_URL = "http://localhost:443";
const url = `${API_URL}/user/login`;

//the token part which can be stored in localsotrage
const token = localStorage.getItem("token");

//the header for authenticated requests
const headers = {
  accept: "aplication/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`
}

/**
 * This is the main function which does the login functionality, 
 * First does a post request to check information and for verification purposes. 
 * Then displays appropriate error messages when needed. It also displays the messages
 * for the login page.
 */
export default function Login() {
  let history = useHistory();
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const login = false;

  /**
  * @param {event} event
  * This function sends a post request to the api for login, then 
  * checks the returned query for errors.
  * If there is error, the message will appear to the user on the screen and it will 
  * notify the user of the error message. 
  */
  const logginProcess = (event) => {
    event.preventDefault();

    const sendPassEmailApi =  {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email : email, password : password })
    };

   fetch(url, sendPassEmailApi)
   .then((res) => res.json())
   .then((apiResponse) => {
    
    //if there is error notify the user
     if(apiResponse.error){
       alert(apiResponse.message);
      }
      //If there is not error, save the token in the local memory
      else{
        localStorage.getItem("token", apiResponse.token);
        console.log("This is response from api"+apiResponse.token);
        // login = true;
        history.push('/stocklist/'); //go to the restricted page
      }
      }
    ).catch(err => {alert("Something went wrong: "+err.message+" Please try again! ")}); //This also catches error such as bad request
  }
  
  return(
    <div className="container" style={{height: "692px"}} >
      
      {/* Displays instructional messages on the screen */}
      <Notes />

      {/* This is card which holds the input and lables for the registration page */}
      <CardBody className="container" color="red">

        <form 
        onSubmit={logginProcess} 
        style={{width: "0px", height: "0px"}}
        >
                    
          {/* This is the input and label for the email on the login page. */}
          <label style={{padding: "2px"}}>Email:</label>
          <input
          id="email" 
          type="text"
          placeholder="Type your email here"  
          key="email" 
          name="email" 
          size="40"  
          onChange={(event) => {
          setEmail(event.target.value);}} />

          {/* This is the input and label for the password on the registration page. */}
          <label style={{padding: "2px"}}>Password:</label>
          <input 
          size="40"
          type="password" 
          id="password" 
          placeholder="Type your password here"
          key="password" 
          name="password" 
          required onChange={event => {
            setPassword(event.target.value);
          }} />
              
          <p>&nbsp;</p>
          {/* This is the input and label for the submit which is
           used as button on the registration page. */}
          <input 
          style={{color: "red", padding: "20px", fontSize: "30px", 
          fontStyle: "bold"}} 
          type="submit" 
          value="Login" />

        </form>
      </CardBody>
    </div>
  );
  //End of return Statement
}


/**
 * This component is for the notes on the Login page.
 */
function Notes(){
  return(
    <div>
      <h1>Log in Page</h1>
      <h3>Please Log in here by typing your email and password and 
        then pressing the Login Button below.
      </h3>
    </div>
  );
}

