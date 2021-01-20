import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/";
import Default from "./components/Default";
import Modal from './components/Modal';
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
