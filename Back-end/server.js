// Require necessary NPM packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


// Require Route Files
const jobs = require('./route/jobs');
const users = require('./route/users');
// const articlesRouter = require('./routes/articles');

// Require DB Configuration File
const db_url = require('./db');

// Establish Database Connection
mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Mongo');
});

// Instantiate Express Application Object
const app = express();

/*** Middleware ***/

// Add bodyParser middleware which will parse JSON requests
// into JS objects before they reach the route files.
//
// The method .use sets up middleware for the Express application
app.use(express.json());

const reactPort = 5000;
// Set CORS headers on response from this API using the cors NPM package.
app.use(
  cors({ origin: process.env.CLIENT_ORIGIN || http://localhost:${reactPort} })
);

/*** Routes ***/

// Mount imported Routers

app.use(jobs);
app.use(users);
// app.use('/articles',articlesRouter);

/*** Routes ***/
// Define PORT for the API to run on
const PORT = process.env.PORT || 5000;

// Start the server to listen for requests on a given port
app.listen(PORT, () => {
  console.log(Jobs => http://localhost:${PORT});
});

/*
  C.R.U.D - Actions Table

  Create          CREATE
  Read
    Read All      INDEX
    Read By ID    SHOW
  Update          UPDATE
  Delete          DESTROY
*/
