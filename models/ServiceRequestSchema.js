const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const serviceRequestSchema = new mongoose.Schema({
    
    name: {type: String,required: true},
    brand: {type: String, required: true},
    model:  {type: String, required: true},
    athome: {type: Boolean, required: true},
    description: {type: String, required: true},
    date: {type: Date,default: Date.now},
    uid: {type: Schema.Types.ObjectId, ref: 'users', required: true},
    sid:{type: Schema.Types.ObjectId, ref: 'service', required: true},
    status: {type: String, required: true}


})
module.exports = mongoose.model('serviceRequest',serviceRequestSchema);