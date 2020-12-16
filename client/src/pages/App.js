import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Componenets
import Header from "../components/Header";
import Footer from "../components/Footer";

//Pages
import Home from "./Home";
import StockList from "./Stocklist";
import Register from "./Register";
import About from "./About";
import Login from "./Login";
import Stock from "./Stock";
import Authed from "./Authed"

//This function routes the home page buttons, for example if you press on any of the buttons they will take you to the right page.
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/stocklist">
            <StockList />
          </Route>

          <Route path="/register"> 
             <Register />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/login" > 
            <Login /> 
          </Route>
          
          <Route path="/stock/:symbol">
            <Stock />
          </Route>

          <Route path="/Authed/:{symbol}">
            <Authed />
          </Route>
 
        </Switch>
        
        <Footer />
      </div>
    </Router>
  );
}
export default App;

