const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const feedbackSchema = new mongoose.Schema({
    
    name: {type: String,required: true},
    description: {type: String, required: true},
    date: {type: Date,default: Date.now},
    sid:{type: Schema.Types.ObjectId, ref: 'service', required: true}

    })
module.exports = mongoose.model('feedback',feedbackSchema);