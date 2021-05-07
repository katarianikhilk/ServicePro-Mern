const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Review = require('../models/ReviewSchema');


const serviceSchema = new mongoose.Schema({
        name: {type: String,required: true},
        price: {type: Number, required: true},
        description: {type: String},
        date: {type: Date,default: Date.now},
        service: {type:String},
        owner: {type: Schema.Types.ObjectId, ref: 'users'}, 
        location: {
            type: {
              type: String, // Don't do `{ location: { type: String } }`
              enum: ['Point'], // 'location.type' must be 'Point'
              required: true
            },
            coordinates: {
              type: [Number],
              required: true
            }
          }
    
    })

  
serviceSchema.index({ location: "2dsphere" });
module.exports = mongoose.model('service',serviceSchema);