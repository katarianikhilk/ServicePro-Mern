const express = require("express");
const app = express.Router();





app.get('/',(req, res) => {
    res.json( {ok:200});
});


module.exports = app