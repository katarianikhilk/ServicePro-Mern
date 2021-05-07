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
import serviceResult from "./components/ShopListing";
import Home from "./home";
import About from "./About";
import Contact from "./Contact";
import AddShop from "./AddShop";
import Test from "./Test";
// import DashUser from "./components/dashboard/DashUser";
import { Link } from "react-router-dom";
import Search from './Search';
import DetailView from './DetailView';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
           
            
            <Navbar />
            <Switch>
              <Route exact path="/test" component={Test} />
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/result" component={serviceResult} />
              <Route exact path="/addshop" component={AddShop} />
              <Route path="/search/:lat/:lng/:name" component={Search}/>
              <Route path="/service/:_id" component={DetailView}/>
            
                
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
                
              
              
              <PrivateRoute exact path="/dashowner" component={Dashboard1} />


            </Switch>
            
            
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;

