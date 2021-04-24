const express = require("express");
const app = express.Router();
const dataRepo = require('../data/FeedbackData');
const jwt = require('jsonwebtoken');





app.get('/',verifyToken,(req, res) => {

    jwt.verify(req.token, 'secret', (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
            const id = req.query.id;
            console.log(id);

            dataRepo.findByServiceID(id).then((reviews)=>{
                res.json( reviews);

            }).catch((error)=>console.log(error));
          
        }
      });
    
});

app.post('/',verifyToken, (req, res) => {
    jwt.verify(req.token, 'secret', (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
            console.log(req.body.name);
            dataRepo.create(req.body.name, req.body.description, req.body.service).then((review) => {
            res.json(review);
            }).catch((error) => console.log(error));
          
        }
      });
});

// app.post("/:id", async(req, res) => {
//     const todo = { done: req.body.done };
//     await dataRepo.updateStatusById(req.params.id.substring(1),
//     todo).then(
    
//     res.redirect("/todos")
//     ).catch((error) => console.log(error));
//     });

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