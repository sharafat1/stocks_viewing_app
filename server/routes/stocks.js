/* This is the modules, packages, and libraries that are needed for this route*/
const { json } = require("express");
var express = require("express")
const jwt = require('jsonwebtoken');
var router = express.Router()


/* ---------------------Start the stocks query-----------------------*/
/* GET Returns all available stocks, optionally 
filtered by industry sector from database */
router.get("/symbols", function (req, res, next) {

  const industry = req.query.industry;

  // Throw error messages when industry value is not entered
  if (Object.keys(req.query).length > 0 && !req.query.industry) {
    res.status(400).json({
      error: true,
      message: "Invalid query parameter: only 'industry' is permitted"
    })
  }

  /* This statement checks if the user entered letters, numbers, and special characters
    togeter they will get an error reminding them that industry contains only letters */
  // if (checkForRandomInput.test(req.query.industry) || Number(req.query.industry)) {
  if (Number(req.query.industry)) {
    res.status(400).json({
      error: true,
      message: "Industry parameter can only contain letters"
    })
  }

  /* If industry is entered return stocks for that industry if not throw appropriate
  error messages */
  if (req.query.industry) {
    req.db.from("stocks")
      .distinct("name", "symbol", "industry")
      .where('industry', 'like', `%${industry}%`)
      .then((rows) => {
        if (rows.length === 0) {
          res.status(404).json({ error: true, message: "Industry sector not found" })
        }
        else { res.status(200).json(rows) } //send results if no errors
      })
      .catch((err) => {
        res.status(500).json({ error: true, message: "Internal Server Error" }) //catch server error
      })
  }

  else {
    // Return all stocks if the user doesn't want to search by industry 
    req.db.from("stocks")
      .distinct("name", "symbol", "industry")
      .then((rows) => {
        res.status(200).json(rows); //send results if no errors
      })
      .catch((error) => { //catch server error
        res.status(500).json({
          error: true,
          message: error
        })
      })
  }
})
/* --------------------End of stocks/symbols query------------------------*/

/* ---------------------Start the stocks by symbol query----------------- */
/* GET Returns the latest entry for a particular stock searched 
  by symbol (1-5 upper case letters). from database */
router.get("/:symbol", function (req, res, next) {
  const symbolData = req.params.symbol;

  if (Object.keys(req.query).length > 0 && !req.query.symbol) {
    res.status(400).json({
      error: true,
      message: "Bad Request"
    })
  }

  req.db
    .from("stocks")
    .select("*").orderBy("timestamp", 'desc')
    .where("symbol", "=", symbolData)
    .then((rows) => {

      /* check if the query contains number, small letters, or more than five capital letters 
      throw error and tell the user they can only enter 1 - 5 Capital letters for the symbol */
      if ( /.[0-9].*/.test(symbolData) || /[a-z].*/.test(symbolData) || symbolData.length > 5) {
        res.status(400).json({
          error: true,
          message: "Stock symbol incorrect format - must be 1-5 capital letters"
        });
      }
      else if (rows.length === 0) { //return error as the symbol will not be in database
        res.status(404).json({
          error: true,
          message: "No entry for symbol in stocks database"
        });
      }
      else { //If there is no errors then display the results
        // console.log(" this is the rows data debug: " + rows.timestamp);
        // res.send(json(rows));
        res.status(200).json(rows[0]);
      }
    })
    .catch((err) => { //If there is 500 error display this message
      res.status(500).json({ error: true, message: "Interanl Server Error OR "+err })
    })
})
/* --------------------End of stocks by symbol query---------------------- */

/* -------------------Start /stocks/authed/:symbol--------------------- */
/* GET Return entries of stock searched by 
symbol, optionally filtered by date. from database */

const authorize = (req, res, next) => {
  const authorization = req.headers.authorization;
  let token = null;

  // Retrieve token
  if (authorization && authorization.split(" ").length >= 2) {
    token = authorization.split(" ")[1];
    console.log("Token: ", token);
  } else {
    res.status(403).json({ error: true, message: "Authorization header not found" });
    return;
  }

  // Verify JWT and check expiration date
  try {
    const secretKey = process.env.SECRET_KEY;
    const decode = jwt.verify(token, secretKey);
    if (decode.exp > Date.now()) {
      res.status(403).json({ error: true, message: "Authorization token has expired" });
      return;
    }
    // Permit user to addvance to route
    next();
  } catch (error) {
    // console.log("Token is not valid", error);
    res.status(500).json({ error: true, message: "Bad Request OR"+error});
  }
}
/* -------------------End of /stocks/authed/:symbol helper ----------------*/

/* -------------------Start /stocks/authed/:symbol--------------------- */
router.get("/authed/:symbol", authorize, function (req, res, next) {

  const from = req.query.from;
  const to = req.query.to;

  //check if the user has typed the from and to dates
  if (from === undefined || to === undefined) {
    res.status(400).json({ error: true, message: "Parameters are allowed 'from' and 'to', example: /stocks/authed/ALL?from=2020-03-15"});
  }

//   req.db.from('stocks').whereBetween('timestamp', [from, to])
//     .select("*")
//     .where('symbol', '=', req.params.symbol)
//     .then((rows) => {
//       if(rows.length === 0) {
//         res.status(404).json({ error: true, message: "No entried available for query syumbol for supplied date range" });
//       }
//       else if (rows === undefined) {
//         res.status(400).json({ error: true, message: "Parameters are allowed 'from' and 'to', example: /stocks/authed/ALL?from=2020-03-15" })
//       }
//       else{
//         res.status(200).json(rows);
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ error: true, message: "Internal Server Error OR "+err })
//     })
// })

req.db.from('stocks').whereBetween('timestamp', [from, to])
.select("*")
.where('symbol', '=', req.params.symbol)
.then((rows) => {
  
    res.status(200).json(rows);
  })
.catch((err) => {
  res.status(500).json({ error: true, message: "Error"+err })
})
})

/* -------------------End /stocks/authed/:symbol--------------------- */


/* -----------------Start of Error after home page handling --------------------------*/
/* This handles errors, if someone tries and types stocks and forget to type other part of the queries available
then they will be given appropraite errors */
router.get("/", function (req, res, next) {
  if (1) {
    res.status(400).json({
      error: true,
      message: "Request on /stocks must include symbol as path parameter, or alternatively you can hit /stocks/symbols to get all symbols"
    })
  } 
})
/* -----------------End of Error after home page handling ----------------------------*/

module.exports = router
