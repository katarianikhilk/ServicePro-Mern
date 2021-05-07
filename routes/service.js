const express = require("express");
const app = express.Router();
const dataRepo = require('../data/ServiceData');
const jwt = require('jsonwebtoken');



app.get('/',(req, res) => {


    dataRepo.findAll(req.query.lat,req.query.lng, req.query.service).then((reviews)=>{
        res.json( reviews);

    }).catch((error)=>console.log(error));
});


app.post('/', verifyToken,(req, res) => {

    jwt.verify(req.token, 'secret', (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
          console.log(req.token);
          console.log(req.body)
            dataRepo.create(req.body.name, req.body.price, req.body.description, req.body.service, req.body.uid, req.body.lat, req.body.long).then((review) => {
                res.json(review);
                }).catch((error) => console.log(error));
        }
      });
   
    
    });

app.put('/', verifyToken,(req, res) => {
    jwt.verify(req.token, 'secret', (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
            console.log(req.body.service);
            dataRepo.update(res, req.body.id, req.body.name, req.body.price, req.body.description, req.body.service);
        }
      });

});
    



app.get('/byid',(req, res) => {
    console.log(req.query.id);
    dataRepo.findByServiceID(req.query.id).then((service)=>{
        res.json( service);

    }).catch((error)=>console.log(error));
});

app.get('/myservices/:id',verifyToken,(req, res) => {

    jwt.verify(req.token, 'secret', (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
            console.log("sdfg");
            console.log(req.params.id);
            dataRepo.findByOwner(req.params.id).then((service)=>{
                res.json( service);




            }).catch((error)=>console.log(error));
          
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