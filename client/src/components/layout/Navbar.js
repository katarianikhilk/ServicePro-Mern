import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <header class="text-gray-400 bg-gray-900 body-font">
        <div class="bg-gray-800 bg-opacity-75">
          <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a
              href="/"
              class="flex title-font font-medium items-center md:justify-start justify-center text-white"
            >
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
              <span class="ml-3 text-xl">Service</span>
              <Link to="/">Pro</Link>
            </a>
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
              <a href="/Contact" class="mr-5 hover:text-white">
                <Link to="./Contact">Contact</Link>
              </a>
              <a href="/ShopListing" class="mr-5 hover:text-white">
                <Link to="./ShopListing">ShopListing</Link>
              </a>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
