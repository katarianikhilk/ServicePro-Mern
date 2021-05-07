import React,{useState, useEffect}  from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Review from './Review';
axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODI5YWYxYjM2NDEwMzEzYzc5MzUyNiIsIm5hbWUiOiJOaWtoaWwgS2F0YXJpYSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MTkxODE5OTUsImV4cCI6MTY1MDczODkyMX0.ZGjdQ5wOJeSnVv7XYaloaVvdQVvieCmqqdnLIDtGvAU";


function ItemDetail({match}) {
    useEffect(()=>{
        fetchItem();
    }, []);
  
    const [item, setItem] = useState({});
    const [reviews, setReviews] = useState([]);
    const fetchItem = async () => {
        // const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        // // console.log(data);

        // const item = await data.json();
        // console.log(item.data);
        // console.log(match.params.lat)
        // console.log(match.params.lng)
        // console.log(match.params.name)
        // console.log( match.params.lat+"&lng="+match.params.lng+"&service="+match.params.name);

        // setItem(item.data)
        // http://localhost:5000/service/?lat=27.023803599999997&lng=74.21793260000001&service=AC
        // service/byid?id=608fb58b147fe20dc01f8814
        console.log()
        axios.get(`/service/byid?id=${match.params._id}`).then(res=>{
            console.log(res.data);
            // this.setState({list:res.data}) ;
            setItem(res.data)
          });

          // http://localhost:5000/review?id=6082799baa826752c860e8ef
          // `/review?id=${match.params._id}`
          axios.get("/review?id=6082799baa826752c860e8ef").then(res=>{
            console.log(res.data);
            // this.setState({list:res.data}) ;
            setReviews(res.data)
          });
    }
  return (
    <div>
            <div className="ShyaamShop">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                    {item.ownername}
                  </h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">
                    {item.name}
                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <h3 class="text-gray-500 mb-3">
                  Service:- {item.service}
                </h3>
              <h3 class="text-gray-500 mb-3">Description:- {item.description}</h3>
                <h3 class="text-gray-500 mb-3">Price:- {item.price} /hr</h3>
                
                
                <h3 class="text-gray-500 mb-3">
                  Address:- {item.address}
                </h3>
                <h3 class="text-gray-500 mb-3">Distance:- 1.7km</h3>
                <p class="mb-4">Owner:- {item.owner}</p>
              </div>
            </div>
            <div class="flex justify-center">
            <Link to={`/ReqService/${item._id}`}>
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Request Service
              </button>
            </Link>
              
              <Link to={`/AddReview/${item._id}`}>
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Add Review
                </button>

              </Link>
              
            </div>
          </div>
          <div class="flex mb-4">
              <span class="flex items-center">
              <h3 class="text-gray-900 text-3xl title-font font-medium mb-1">
            Reviews and Ratings by customers
          </h3>
              </span>
            </div>

          {reviews.map(review =>(<Review review= {review}/>))}
          

          <a class="text-indigo-500 align-center inline-flex items-center mt-4">
            Load more reviews
            <svg
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>

        </div>
      </section>
    </div>
    </div>

  );
}

export default ItemDetail;
