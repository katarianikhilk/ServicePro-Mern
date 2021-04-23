const Review = require('../models/ReviewSchema');
class ReviewData {

    constructor(model) {
    this.model = model;
    }
    create(n, s, d, id) {     
        console.log(n, s, d, id);

    const newReview = { name:n, star:s, description: d , service:id };
    const review = new this.model(newReview);
    return review.save();
    }
    findAll() {
        return this.model.find();
    }
    findByServiceID(id){
        return this.model.find({service:id});

    }
        //find todo by the id
    findById(id) {
    return this.model.findById(id);
    }
    updateStatusById(id, object) {
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $set: { done:
        object.done } });
    }
}
module.exports = new ReviewData(Review);