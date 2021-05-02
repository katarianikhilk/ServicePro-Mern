import React from "react";
import { Link } from "react-router-dom";
import './base.css';

function Home() {
  return (
    <div className="home">
      <header class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="/logo1.png"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span href="home.js" class="ml-3 text-xl">
              ServicePro
            </span>
          </a>
          <nav >
            <a href="/" class="mr-5 hover:text-white">
              Laptop
            </a>
            <a href="/About" class="mr-5 hover:text-white">
              Smartphones
            </a>
            <a href="/Contact" class="mr-5 hover:text-white">
              Smart-watches
            </a>
            <a href="/" class="mr-5 hover:text-white">
              Domestic-Appliances
            </a>
          </nav>

          <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          <a href="/login" class="mr-5 hover:text-white">
              Log In
            </a>
            
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://source.unsplash.com/720x600/?laptop,technology"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Want to Replace Your Old Product
              <br class="hidden lg:inline-block" />
              Make it new with ServicePro
            </h1>
            <p class="mb-8 leading-relaxed">
              We provide the best variety of services on variety of electronic
              products. Find the best deals and best services with ServicePro.
            </p>
            <div class="flex justify-center">
              
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <a href="/register" class="mr-5 hover:text-white">
              Sign up
            </a>
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                
                <a href="/login" class="mr-5 hover:text-white">
                Log In
              </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-400 body-font bg-gray-900">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Choose the Product
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="/laptop.jpeg"
                  alt="content"
                />
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Laptops
                </h2>
                <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                  Search
                </button>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="/smartphone.jpeg"
                  alt="content"
                />
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Smartphones
                </h2>
                <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                  Search
                </button>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="/domestic.jpeg"
                  alt="content"
                />
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Domestic Appliances
                </h2>
                <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                  Search
                </button>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="/smartwatch.jpeg"
                  alt="content"
                />
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Smartwatches
                </h2>
                <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              What we provide for you.
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Best service centers with fully experienced and skilled staff.
              Give you a variety of product repairing services with many popular
              brands.
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Authentic Process</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                  Popular brands & Services
                </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                  No middle man machenism
                </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                  Home Servicing Facility
                </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Flexible hours Time</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                  Experienced & skilled Staff
                </span>
              </div>
            </div>
          </div>
          <button class="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
          <a href="/register" class="mr-5 hover:text-white">
            Register Now
            </a>
            
          </button>
        </div>
      </section>

      <footer class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                Popular Brands
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">APPLE</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">ASUS</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">HP</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">DELL</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                Products Range
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">Smartphone</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Laptops/Desktop</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Watches</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">
                    Domestic Appliances
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                Local Service Providers
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">Udaipur</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Kakinada</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Anna Nagar</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Jamshedpur</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    for="footer-field"
                    class="leading-7 text-sm text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    class="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-blue-900 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Subscribe
                </button>
              </div>
              <p class="text-gray-500 text-sm mt-2 md:text-left text-center">
                Get all Updates from us <br class="lg:block hidden" />& Track
                your order
              </p>
            </div>
          </div>
        </div>
        <div class="bg-gray-800 bg-opacity-75">
          <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">ServicePro</span>
            </a>
            <p class="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
              © 2021 ServicePro —
              <a
                href="https://twitter.com/knyttneve"
                class="text-gray-500 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                & Team
              </a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a href="/About" class="mr-5 hover:text-white">
                <Link to="./About">Know More About us</Link>
              </a>
              <a href="/DashOwner" class="mr-5 hover:text-white">
                <Link to="./DashOwner">Owner</Link>
              </a>
              <a href="/DashUser" class="mr-5 hover:text-white">
                <Link to="./DashUser">User</Link>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
