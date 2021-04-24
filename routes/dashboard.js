const express = require("express");
const app = express.Router();
const dataRepo = require('../data/ServiceRequestData');
const jwt = require('jsonwebtoken');




app.get('/',verifyToken,(req, res) => {
    jwt.verify(req.token, 'secret', (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
            dataRepo.findAll(req.query.long, req.query.latt, req.query.service).then((reviews)=>{
                res.json( reviews);
        
            }).catch((error)=>console.log(error));
         
        }
      });


});


app.get('/search',verifyToken,(req, res) => {

    jwt.verify(req.token, 'secret', (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
            const  service = req.query.service

            dataRepo.search(service).then((reviews)=>{
                res.json( reviews);
        
            }).catch((error)=>console.log(error));
         
        }
      });

});

app.post('/update',verifyToken, (req, res) => {


    jwt.verify(req.token, 'secret', (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
            console.log(req.body.name);


            dataRepo.updateStatusById(req.body.id, req.body.status).then((review) => {
            res.json(review);
            }).catch((error) => console.log(error));
        }
      });
    
    });


app.post('/', verifyToken,(req, res) => {


    jwt.verify(req.token, 'secret', (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
            console.log(req.body.name);
    
            if(req.body.athome =="1"){
                dataRepo.create(req.body.name, req.body.brand, req.body.model, true, req.body.description, req.body.uid, req.body.sid, req.body.status).then((review) => {
                    res.json(review);
                    }).catch((error) => console.log(error));
            }else{
                dataRepo.create(req.body.name, req.body.brand, req.body.model, false, req.body.description, req.body.uid, req.body.sid, req.body.status).then((review) => {
                    res.json(review);
                    }).catch((error) => console.log(error));
            }
         
        }
      });
    
    
    });



app.get('/byuid/:id',verifyToken,(req, res) => {


    jwt.verify(req.token, 'secret', (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
            console.log(req.params.id);
            dataRepo.findByUserID(req.params.id).then((service)=>{
                res.json( service);
        
            }).catch((error)=>console.log(error));
         
        }
      });

});

app.get('/bysid/:id',verifyToken,(req, res) => {


    jwt.verify(req.token, 'secret', (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
            console.log("sdfg");
            console.log(req.params.id);
            dataRepo.findByServiceID(req.params.id).then((service)=>{
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