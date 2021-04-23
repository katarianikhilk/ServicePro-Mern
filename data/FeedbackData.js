const Feedback = require('../models/FeedbackSchema');
class FeedbackData {

    constructor(model) {
    this.model = model;
    }
    create(n, d, id) {     
        console.log(n, d, id);

    const newReview = { name:n, description: d , service:id };
    const review = new this.model(newReview);
    return review.save();
    }
    findAll() {
        return this.model.find();
    }
    findByServiceID(id){
        return this.model.find({sid:id});

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
module.exports = new FeedbackData(Feedback);