
import React, { useEffect, useState } from "react";
import  {useHistory} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import {  CardBody } from "reactstrap";


//API login url
const API_URL = "https://localhost:443";
const url = `${API_URL}/user/register`;


/**
 * This is the main function which does the registration functionality, 
 * First does a post request to register users with api. 
 * Then displays appropriate error messages when needed. It also displays the messages
 * for the registration UI page.
 */
export default function Register() {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    /**
    * @param {event} event
    * This function sends a post request to the api for registration, then 
    * checks the returned query for errors.
    * If there is error, the message will appear to the user on the screen and it will 
    * notify the user of the error message. 
    */
    const registrationProcess = (event) => {
        event.preventDefault();

        /**
         * This arrow function is an object which declares what the body, method, 
         * are to the api.
         */
        const sendPassEmailApi = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ email: email, password: password })
        };
        
        fetch(url, sendPassEmailApi)
        .then((res) => res.json())
        .then((apiResponse) => {
            //If user is registere nottify him to login
          if(apiResponse.error){
              console.log("User already exists")
            alert(apiResponse.message);

           }
           //Then go to the authenticated page where users will be able to get see price history
           if(apiResponse.success){
               console.log("New user Created")
             //alert("You're registered!"); //notify the user they're registered in
             return history.push('/Login');
           }
        })
        .catch(err => {alert(err.message+" Please try again! ")}); //This also catches error such as bad request
    }

    return(
        <div className="container" style={{height:"692px"}}>
            {/* Displays instructional messages on the screen */}
            <RegistrationNotesComponent />

            {/* This is card which holds the input and lables for the registration page */}
            <CardBody className="container" color="red">

            <form 
            onSubmit={registrationProcess} 
            style={{width: "0px", height: "0px"}}
            >
              
              {/* This is the input and label for the email on the registration page. */}
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
              onChange={event => {
                setPassword(event.target.value);
              }} />
              
              <p>&nbsp;</p>
    
              {/* This is the input and label for the submit which is
               used as button on the registration page. */}
              <input 
              style={{color: "red", padding: "20px", fontSize: "30px", 
              fontStyle: "bold"}} 
              type="submit" 
              value="Register" />
    
            </form>
          </CardBody>
        </div>
      );
      //End of return Statement
};


/**
 * This component is for the notes on the registration page.
 */
function RegistrationNotesComponent() {
  return (
    <div>
      <h2>Registration Page</h2>
      <h3>Please register in here by typing your email and password and 
        then pressing the Register Button below. </h3>
    </div>
  ); 
}
