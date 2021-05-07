import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODI5YWYxYjM2NDEwMzEzYzc5MzUyNiIsIm5hbWUiOiJOaWtoaWwgS2F0YXJpYSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MTkxODE5OTUsImV4cCI6MTY1MDczODkyMX0.ZGjdQ5wOJeSnVv7XYaloaVvdQVvieCmqqdnLIDtGvAU";


const User = () => {
    const [newUser, setNewUser] = useState(
        {
            name: '',
            price: '',
            description: '',
            service: '',
            uid: '',
            latt: '',
            long: '',
        }
    
    );



    const location = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setNewUser({...newUser, latt: position.coords.latitude, long: position.coords.longitude});


            
            
          });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        console.log(newUser);
        const data = qs.stringify({
            price:newUser.price,
            name:newUser.name,
            description:newUser.description, 
            service:newUser.service,

            uid:newUser.uid,
            lat:newUser.latt,
            long:newUser.long
          });
          const headers = {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          };
        // req.body.name, req.body.price, req.body.description, req.body.service, req.body.uid, req.body.lat, req.body.long
        // axios.post('https://example.com', form, { headers: form.getHeaders() })
        axios.post('http://localhost:5000/service', data,
        headers)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
            
            <input 
                type="text"
                placeholder="name"
                name="name"
                value={newUser.name}
                onChange={handleChange}
            />
            // req.body.name, req.body.price, req.body.description, req.body.service, req.body.uid, req.body.lat, req.body.long
            <input 
                type="text"
                placeholder="price"
                name="price"
                value={newUser.price}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="description"
                name="description"
                value={newUser.description}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="service"
                name="service"
                value={newUser.service}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="uid"
                name="uid"
                value={newUser.uid}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="lat"
                name="latt"
                value={newUser.latt}
                onChange={handleChange}
            />
            
            <input 
                type="text"
                placeholder="long"
                name="long"
                value={newUser.long}
                onChange={handleChange}
            />
            
           



            

            

            <input 
                type="submit"
            />
        </form>
        <button onClick={location} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              click me
              </button>
            <br></br>

        </div>
        
    );
}

export default User;