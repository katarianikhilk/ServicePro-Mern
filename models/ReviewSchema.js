const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const reviewSchema = new mongoose.Schema({
    
    name: {type: String,required: true},
    star: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date,default: Date.now},
    service:{type: Schema.Types.ObjectId, ref: 'service', required: true}

    })
module.exports = mongoose.model('review',reviewSchema);