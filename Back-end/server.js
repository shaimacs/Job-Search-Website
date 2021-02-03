// Require necessary NPM packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');
//Don't forget to install cors (npm i cors)
const cors = require("cors");
const path = require('path');


// Require Route Files
const jobs = require('./route/jobs');
const companies = require('./route/companies');
const users = require('./route/users');

// Require DB Configuration File
const db_url = require('./db');

// Instantiate Express Application Object


//must change your port to this for deployment else it wont work
const PORT = process.env.PORT;

// Establish Database Connection
mongoose.connect(process.env.MongoDBURL, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Mongo');
});



//serves all our static files from the build directory.


//Make sure to add to your whitelist any website or APIs that connect to your backend.
var whitelist = [`http://localhost:${PORT}`, "https://job-search-website.herokuapp.com"];

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      var message =
        "The CORS policy for this application does not allow access from origin " +
        origin;
      callback(new Error(message), false);
    }
  },
};

app.use(cors(corsOptions));






/*** Middleware ***/

// Add `bodyParser` middleware which will parse JSON requests
// into JS objects before they reach the route files.
//
// The method `.use` sets up middleware for the Express application
app.use(express.json());

const reactPort = 5000;
// Set CORS headers on response from this API using the `cors` NPM package.
// app.use(
//   cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` })
// );
// setting permissions
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
//   );
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

/*** Routes ***/

// Mount imported Routers ok


// const friendsRouter = require('./routes/seller');
// app.use('/seller', sellerRouter);
// const friendsRouter = require('./routes/seller');
// app.use('/api/seller', sellerRouter);
app.use('/api/jobs',jobs);
app.use('/api/companies',companies);
app.use('/api/users',users);

app.use(express.static(path.join(__dirname, "build")));

// After all routes
// This code essentially serves the index.html file on any unknown routes.
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT);

/*** Routes ***/
// Define PORT for the API to run on
// const PORT = process.env.PORT || 5000;

// // Start the server to listen for requests on a given port
// app.listen(PORT, () => {
//   console.log(`Jobs => http://localhost:${PORT}`);
// });

// const PORT = process.env.PORT || 3001

// app.listen(PORT, () => {
//   console.log(`✅ PORT: ${PORT} 🌟`)
// })

