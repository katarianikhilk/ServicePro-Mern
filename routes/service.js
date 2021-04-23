const express = require("express");
const app = express.Router();
const dataRepo = require('../data/ServiceData');




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

app.post('/', (req, res) => {
    console.log(req.body.name);
    dataRepo.create(req.body.name, req.body.price, req.body.description, req.body.service, req.body.uid, req.body.lat, req.body.long).then((review) => {
    res.json(review);
    }).catch((error) => console.log(error));
    });

app.post('/update', (req, res) => {
    console.log(req.body.service);
    dataRepo.update(res, req.body.id, req.body.name, req.body.price, req.body.description, req.body.service);
});
    


app.post("/byid/:id", async(req, res) => {

    dataRepo.update(res, req.params.id,req.body.name, req.body.price, req.body.description, req.body.service);
});

app.get('/byid/:id',(req, res) => {
    console.log(req.params.id);
    dataRepo.findByServiceID(req.params.id).then((service)=>{
        res.json( service);

    }).catch((error)=>console.log(error));
});

app.get('/myservices/:id',(req, res) => {
    console.log("sdfg");
    console.log(req.params.id);
    dataRepo.findByOwner(req.params.id).then((service)=>{
        res.json( service);




    }).catch((error)=>console.log(error));
});

module.exports = app