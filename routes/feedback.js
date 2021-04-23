const express = require("express");
const app = express.Router();
const dataRepo = require('../data/FeedbackData');





app.get('/',(req, res) => {
    const id = req.query.id;
    console.log(id);

    dataRepo.findByServiceID(id).then((reviews)=>{
        res.json( reviews);

    }).catch((error)=>console.log(error));
});

app.post('/', (req, res) => {
    console.log(req.body.name);
    dataRepo.create(req.body.name, req.body.description, req.body.service).then((review) => {
    res.json(review);
    }).catch((error) => console.log(error));
    });

// app.post("/:id", async(req, res) => {
//     const todo = { done: req.body.done };
//     await dataRepo.updateStatusById(req.params.id.substring(1),
//     todo).then(
    
//     res.redirect("/todos")
//     ).catch((error) => console.log(error));
//     });



module.exports = app