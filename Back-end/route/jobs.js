// Require necessary NPM packages
const express = require('express');
const Jobs = require('../model/schemas')

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();
 
 //get all jobs
router.get('/jobs', (req, res) => {
    Jobs.Job.find({})
      // Return all Articles as an Array
      .then((allJobs) => {
        res.status(200).json({ jobs: allJobs });
      })
      // Catch any errors that might occur
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  });


// Export the Router so we can use it in the server.js file
module.exports = router;
