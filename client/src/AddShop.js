import React , { useState , useEffect} from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODI5YWYxYjM2NDEwMzEzYzc5MzUyNiIsIm5hbWUiOiJOaWtoaWwgS2F0YXJpYSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MTkxODE5OTUsImV4cCI6MTY1MDczODkyMX0.ZGjdQ5wOJeSnVv7XYaloaVvdQVvieCmqqdnLIDtGvAU";

function AddShop({match}) {
  const [newUser, setNewUser] = useState(
    {   ownername: '',
        email: '',
        mobno: '',
        address: '',
        name: '',
        price: '',
        description: '',
        service: '',
        uid: match.params.id,
        latt: '',
        long: '',
    }

);
useEffect(()=>{
  location();
}, []);



const location = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setNewUser({...newUser, latt: position.coords.latitude, long: position.coords.longitude});


        
        
      });
}

const handleSubmit = (e) => {
    e.preventDefault();
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
            setNewUser({
              ownername: '',
              email: '',
              mobno: '',
              address: '',
              name: '',
              price: '',
              description: '',
              service: '',
              uid: '607455a6d7c4d43680c0df35',
              latt: '',
              long: '',
            });
         })
         .catch(err => {
            console.log(err);
         });
}

const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value});

}

  return (
    <div className="AddShop">
     
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Add Your Service Center Here
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Increase your Business with us.
            </p>
          </div>

          <form onSubmit={handleSubmit} encType='multipart/form-data'>
              <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <div class="flex flex-wrap -m-2">
                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label for="name" class="leading-7 text-sm text-gray-600">
                        Owner Name
                      </label>
                      <input
                        type="text"
                        id="Owner-name"
                        name="ownername"
                        value={newUser.ownername}
                        onChange={handleChange}
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label for="name" class="leading-7 text-sm text-gray-600">
                        Service center name
                      </label>
                      <input
                        type="text"
                        id="Owner-name"
                        name="name"
                        value={newUser.name}
                        onChange={handleChange}
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label for="name" class="leading-7 text-sm text-gray-600">
                        Email
                      </label>
                      <input
                        type="text"
                        id="Owner-name"
                        name="email"
                        value={newUser.email}
                        onChange={handleChange}
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label for="name" class="leading-7 text-sm text-gray-600">
                        Contact Number
                      </label>
                      <input
                        type="text"
                        id="Owner-name"
                        name="mobno"
                        value={newUser.mobno}
                        onChange={handleChange}
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label for="name" class="leading-7 text-sm text-gray-600">
                        Service
                      </label>
                      <input
                        type="text"
                        id="Owner-name"
                        name="service"
                        value={newUser.service}
                        onChange={handleChange}
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label for="name" class="leading-7 text-sm text-gray-600">
                        Charge/hr
                      </label>
                      <input
                        type="text"
                        id="Owner-name"
                        name="price"
                        value={newUser.price}
                        onChange={handleChange}
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="relative">
                      <label for="number" class="leading-7 text-sm text-gray-600">
                        Service Description
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="description"
                        value={newUser.description}
                        onChange={handleChange}
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>


                  
                  
                  
                  <div class="p-2 w-full">
                    <div class="relative">
                      <label for="number" class="leading-7 text-sm text-gray-600">
                        Shop Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={newUser.address}
                        onChange={handleChange}
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label for="number" class="leading-7 text-sm text-gray-600">
                        Longitude
                      </label>
                      <input
                        type="text"
                        id="number"
                        name="long"
                        value={newUser.long}
                        onChange={handleChange}
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

                      />
                    </div>
                  </div>
                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label for="number" class="leading-7 text-sm text-gray-600">
                        Lattitude
                      </label>
                      <input
                        type="number"
                        id="number"
                        name="number"
                        name="latt"
                        value={newUser.latt}
                        onChange={handleChange}
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <button 
                    type="submit"
                    class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Submit & Register
                    </button>
                  </div>
                </div>
              </div>




          </form>

          {/* <button onClick={location} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              click me
              </button> */}
          






        </div>
      </section>
    </div>
  );
}

export default AddShop;
