import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Dashboard1 from "./components/dashboard/Dashboard1";
import serviceResult from "./components/serviceList";
import Home from "./home";
import About from "./About";
import Contact from "./Contact";
// import DashUser from "./components/dashboard/DashUser";
import { Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <Navbar /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/result" component={serviceResult} />
            <Switch>
              
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              
            </Switch>
            <Switch>
              <PrivateRoute exact path="/dashowner" component={Dashboard1} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;

