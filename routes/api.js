const express = require("express");
const app = express.Router();
const jwt = require('jsonwebtoken');





app.get('/', verifyToken,(req, res) => {
    jwt.verify(req.token, 'secret', (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
          res.json({
            message: 'Post created...',
            authData
          });
        }
      });
});

function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  
  }

module.exports = app