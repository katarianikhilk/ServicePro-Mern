import React,{useState, useEffect}  from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODI5YWYxYjM2NDEwMzEzYzc5MzUyNiIsIm5hbWUiOiJOaWtoaWwgS2F0YXJpYSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MTkxODE5OTUsImV4cCI6MTY1MDczODkyMX0.ZGjdQ5wOJeSnVv7XYaloaVvdQVvieCmqqdnLIDtGvAU";


function Search({match}) {
    useEffect(()=>{
        fetchItem();
    }, []);
  
    const [items, setItems] = useState([]);
    const fetchItem = async () => {

        axios.get(`/service/${"?lat="+ match.params.lat+"&lng="+match.params.lng+"&service="+match.params.name}`).then(res=>{
            console.log(res.data);
            // this.setState({list:res.data}) ;
            setItems(res.data)
          });
    }
  return (
    <div className="ShopListing">
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Available Service Centers for {match.params.name}
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2"></div>
            <div class="p-2 w-full">
            {items.length==0 ? <h1>No Service available in this Area</h1> :<h1></h1>}
            
            {items.map(item =>(
                <Link to={`/service/${item._id}`}>
                                <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://dummyimage.com/200x200"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  {item.name}
                </h2>
                <h3 class="text-gray-500 mb-3">Price:- {item.price} /hr</h3>
                <h3 class="text-gray-500 mb-3">
                  Description:- {item.description}
                </h3>
                <h3 class="text-gray-500 mb-3">
                  Service:- {item.service}
                </h3>
                <h3 class="text-gray-500 mb-3">
                  Address:- Near Shastri Chok, Gandhi Nagar, 3020023
                </h3>
                <h3 class="text-gray-500 mb-3">Distance:- 2km</h3>
                <p class="mb-4">Owner:- 607455a6d7c4d43880c0df35</p>
              </div>
            </div>
          </div>


                </Link>
                


        ))}
              
              
              
            </div>
          </div>
        </div>
      </section>
      <footer class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            ServicePro © 2021 ServicePro —
            <a
              href="https://twitter.com/knyttneve"
              class="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              &Team
            </a>
          </p>
        </div>
      </footer>
    </div>

  );
}

export default Search;
