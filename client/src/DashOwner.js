
import { logoutUser } from "./actions/authActions";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";



class DashOwner extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return(
      <div className="DashOwner">
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
            <span class="ml-3 text-xl">ServicePro</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" class="mr-5 hover:text-white">
              Home
            </a>
            <a href="/About" class="mr-5 hover:text-white">
              About Us
            </a>
            <a href="/Contact" class="mr-5 hover:text-white">
              Contact Us
            </a>
          </nav>
          <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          {/* <button onClick={this.onLogoutClick} class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Log Out
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            > */}
              {/* <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
      </header>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Welcome, Shop Owner
            </h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Neptune Service Center
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Agustya Damor
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    I want to repair my LENOVO-ZP. It's screen isn't working
                    properly.
                  </p>
                  <p class="leading-relaxed text-base">
                    Locality- Udaipur 313803.
                  </p>
                  <button class="inline-flex text-white bg-indigo-500 border-2 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                    Accept
                  </button>
                  <button class="inline-flex text-white bg-indigo-500 border-2 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                    Reject
                  </button>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Khushi Talweja
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    My Nokia-480 smartphone is dropped in water. It is not
                    working now.
                  </p>
                  <p class="leading-relaxed text-base">
                    Locality- Shakti Nagar 313502.
                  </p>
                  <button class="inline-flex text-white bg-indigo-500 border-2 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                    Accept
                  </button>
                  <button class="inline-flex text-white bg-indigo-500 border-2 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                    Reject
                  </button>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Bhavesh Kumar
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    My Samsung-GALAXY smartphone stopped working suddenly.
                  </p>
                  <p class="leading-relaxed text-base">
                    Locality- Bus Stand 313401.
                  </p>
                  <button class="inline-flex text-white bg-indigo-500 border-2 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                    Accept
                  </button>
                  <button class="inline-flex text-white bg-indigo-500 border-2 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                    Reject
                  </button>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Lalu Yadav
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    My Telephone is not working.
                  </p>
                  <p class="leading-relaxed text-base">
                    Locality- Ullas Nagar 322101.
                  </p>
                  <button class="inline-flex text-white bg-indigo-500 border-2 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                    Accept
                  </button>
                  <button class="inline-flex text-white bg-indigo-500 border-2 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2021 ServicePro —
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
}

DashOwner.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(DashOwner);


