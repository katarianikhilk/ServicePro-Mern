const Service = require('../models/ServiceSchema');
class ServiceData {

    constructor(model) {
    this.model = model;
    }
    create(name, price, d, s, uid, lat,long, photo) {     
        console.log(name, price, d, s, uid);
        
        const denver = { type: 'Point', coordinates: [lat, long] };

    const newService = { name:name, price:price, description: d,service:s, owner: uid, location:denver, photo: photo};
    const service= new this.model(newService);
    return service.save();
    }

    // createfake(){
    //     var service = new Service({
    //         name: "{type: String,required: true}",
    //         price: 5225,
    //         description: "{type: String, required: true}",
    //         service: "{type:String, required: true}",
    //         location: {
    //          type: "Point",
    //          coordinates: [ -110.8571443, 32.4586858 ]
    //         },
    //        });
    //       return service.save();
    // }
    findAll(long, latt, service) {
        return this.model.find({
            service : service,
            location: {
             $near: {
              $maxDistance: 10,
              $geometry: {
               type: "Point",
               coordinates: [long, latt]
              }
             }
            }
           })
    }
        //find todo by the id
    findByServiceID(id) {
        return this.model.findOne({_id: id})
    }
   
    findByOwner(id){
        return this.model.find({owner:id});
    }
    update(res, id, name, price, d, s ){
        Service.findOne({_id:id}).then(function(record){
            // add a book to the books collection
            record.name = name;
            record.price = price;
            record.description = d;
            record.service = s;
            return record.save().then((service) => {
                res.json(service);
                }).catch((error) => console.log(error));

            }).catch((e)=> console.log(e));    
    }
    updateStatusById(id, object) {
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $set: { done:
        object.done } });
    }

    
}
module.exports = new ServiceData(Service);