const express = require("express");
const app = express.Router();
const dataRepo = require('../data/ServiceRequestData');




app.get('/',(req, res) => {

    dataRepo.findAll(req.query.long, req.query.latt, req.query.service).then((reviews)=>{
        res.json( reviews);

    }).catch((error)=>console.log(error));
});


app.get('/search',(req, res) => {
    const  service = req.query.service

    dataRepo.search(service).then((reviews)=>{
        res.json( reviews);

    }).catch((error)=>console.log(error));
});

app.post('/update', (req, res) => {
    console.log(req.body.name);

    dataRepo.updateStatusById(req.body.id, req.body.status).then((review) => {
    res.json(review);
    }).catch((error) => console.log(error));
    });


app.post('/', (req, res) => {
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
    
    });



app.get('/byuid/:id',(req, res) => {
    console.log(req.params.id);
    dataRepo.findByUserID(req.params.id).then((service)=>{
        res.json( service);

    }).catch((error)=>console.log(error));
});

app.get('/bysid/:id',(req, res) => {
    console.log("sdfg");
    console.log(req.params.id);
    dataRepo.findByServiceID(req.params.id).then((service)=>{
        res.json( service);




    }).catch((error)=>console.log(error));
});

module.exports = app