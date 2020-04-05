import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OneBrewery from "./components/OneBrewery";
import OneBeer from "./components/OneBeer";
import Brewerys from "./components/Brewerys";
import Beers from './components/Beers';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {

  render() {

    return (
      <Router>
        <div className="the-app">
          <Header />
      
          <Switch>

          <Route exact path="/" />
      
   <Route exact path="/beers" component={Beers} />
<Route exact path="/location" component={Brewerys} />

<Route
        path="/brewery/:id" 
        render={request => {
          const id = request.match.params.id;
          // console.log(id);
          return <OneBrewery id={id} />;
        }}
      />

<Route 
        path="/beer/:id" 
        render={request => {
          const id = request.match.params.id;
          // console.log(id);
          return <OneBeer id={id} />;
        }}
      />
    
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
