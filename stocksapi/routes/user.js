/* This is the modules, packages, and libraries that are needed for this route*/
var express = require("express")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var router = express.Router()


/* --------------------Start of /register/---------------------- */
/* This middleware registers a person, and handles registrations related errors.
When a user trys and register without password and email. They will be displayed
an error message remninding them that they're not entering password etc. */
router.post("/register", (req, res, next) => {
  // 1. Retrieve email and password from req.body
  const email = req.body.email;
  const password = req.body.password;

  // Verify that the password and email are entered.
  if (!email || !password) {
    res.status(400).json({
      error: true,
      message: 'Request body incomplete - email and password needed'
    })
    return
  }

  // 2. Determine if user already exisits in table
  const queryUsers = req.db.from("users").select("*").where("email", "=", email);
  queryUsers
    .then((users) => {
      if (users.length > 0) {
        res.status(409).json({ error: true, message: "User already exists" });
        return;
      }

      // Insert user into DB when the user is not in database
      const salRounds = 10;
      const hash = bcrypt.hashSync(password, salRounds);
      return req.db.from("users").insert({ email, hash });
    })
    .then(() => {
      //then create the user
      res.status(201).json({ success: true, message: "User created" });
    })
    .catch((error) => { // if something else is wrong throw this error
      res.status(500).json({
        error: true,
        message: error
      })
      return;
    })

})
/* ----------------------End of Registration -------------------------------------*/

/* ----------------------Start of Login ---------------------------------------*/
/* This middleware function logs a person in. If a user is registered   they will be allowed
to login if the user is not registered they will be displayed appropriate errors
messages. This middle ware uses security modules, and frameworks such as bearer, jwt,
morgan, cors, knex etc. */
router.post("/login", function (req, res, next) {
  // 1. Retrieve email and password from req.body
  const email = req.body.email;
  const password = req.body.password;
  // Verify body if it has password and email
  if (!email || !password) {
    res.status(400).json({
      error: true,
      message: "Request body invalid - email and password are required"
    })
    return;
  }
  // 2. Determine if user already exists in table
  const queryUsers = req.db.from("users").select("*").where("email", "=", email);
  queryUsers
    .then((users) => {
      if (users.length == 0) {
        res.status(401).json({ error: true, message: "Incorrect email or password" });
        return;
      }
      // Compare password hashes
      const user = users[0];
      return bcrypt.compare(password, user.hash)
      // console.log("User exists in table");
    })
    .then((match) => {
      if (!match) {
        res.status(401).json({ error: true, message: "Incorrect email or password" });
        return;
      }
      // 2.1.1 If passwords match, return JWT token
      const secretKey = process.env.SECRET_KEY;
      const expires_in = 60 * 60 * 24 // this is 1 day
      const exp = Math.floor(Date.now() / 1000) + expires_in;
      const token = jwt.sign({ email, exp }, secretKey);
      res.status(200).json({ token: token, token_type: "Bearer", expires_in: expires_in });
    }).catch((error) => {
      res.status(500).json({ error: true, message: error })
    })
})

/* ----------------------End of Login ----------------------------------------*/
module.exports = router
