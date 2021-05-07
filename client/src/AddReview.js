import React , { useState , useEffect} from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODI5YWYxYjM2NDEwMzEzYzc5MzUyNiIsIm5hbWUiOiJOaWtoaWwgS2F0YXJpYSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MTkxODE5OTUsImV4cCI6MTY1MDczODkyMX0.ZGjdQ5wOJeSnVv7XYaloaVvdQVvieCmqqdnLIDtGvAU";


function AddReview({match}) {
  const [review, setReview] = useState(
    {  name: '',
      star:'',
      description: '',
      service: match.params.service,
      email: ''
    }

);


const handleSubmit = (e) => {
    e.preventDefault();
    console.log(review);
    const data = qs.stringify({
      name: review.name,
      star: review.star,
      description: review.description, 
      service: review.service, 
      email: review.email

        
      });
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      };
    // req.body.name, req.body.price, req.body.description, req.body.service, req.body.uid, req.body.lat, req.body.long
    // axios.post('https://example.com', form, { headers: form.getHeaders() })
    
    
    axios.post('http://localhost:5000/review', data,
    headers)
         .then(res => {
            console.log(res);
            setReview({
              name: '',
              star:'',
              description: '',
              service: match.params.service, 
              email:''
            });
         })
         .catch(err => {
            console.log(err);
         });
}

const handleChange = (e) => {
    setReview({...review, [e.target.name]: e.target.value});

}

  return (
    <div className="AddReview">
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Add Review
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Give your valuable feedback directly to us.
            </p>
          </div>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Full Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    name="name"
                    value={review.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                  ></input>
                  <p class="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Email
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={review.email}
                    onChange={handleChange}
                  ></input>
                  <p class="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Review about services
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    name="description"
                    value={review.discription}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>


          </form>

        </div>
      </section>
    </div>
  );
}

export default AddReview;
