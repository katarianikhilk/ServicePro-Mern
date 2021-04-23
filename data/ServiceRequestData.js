const ServiceReq = require('../models/ServiceRequestSchema');
class ServiceRequestData {
    // name: {type: String,required: true},
    // star: {type: String, required: true},
    // brand: {type: String, required: true},
    // model:  {type: String, required: true},
    // athome: {type: boolean, required: true},
    // description: {type: String, required: true},
    // date: {type: Date,default: Date.now},
    // uid: {type: Schema.Types.ObjectId, ref: 'users', required: true},
    // sid:{type: Schema.Types.ObjectId, ref: 'service', required: true},
    // status: {type: String, required: true}

    constructor(model) {
    this.model = model;
    }
    create(name, brand, model, athome, description, uid, sid, status) {     
        
        
        

        const newServiceReq = { name:name,brand:brand, model:model, athome:athome, description:description, uid:uid, sid:sid, status:status };
        const serviceReq= new this.model(newServiceReq);
        return serviceReq.save();
    }

   
        //find todo by the id
    findByUserID(id) {
        return this.model.find({uid: id})
    }
    search(service){
        return this.model.find({service : service});
    }
    findByServiceID(id) {
        return this.model.find({sid:id});
    }
    
    updateStatusById(id, status) {
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $set: { status:
        status } });
    }

    
}
module.exports = new ServiceRequestData(ServiceReq);