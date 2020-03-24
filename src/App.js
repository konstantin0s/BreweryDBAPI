import React, { Component } from "react";
import OneBrewery from "./components/OneBrewery";
import OneBeer from "./components/OneBeer";
import Brewerysexample from "./components/Brewerysexample";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Beersexample from './components/Beersexample';
import "./App.css";

class App extends Component {




  render() {

    return (
      <Router>
        <div className="the-app">
          <Header />
      
          <Switch>

          <Route exact path="/" />

   <Route exact path="/beers" component={Beersexample} />
<Route exact path="/location" component={Brewerysexample} />
{/* <Route exact path="/brewery/:id" component={OneBrewery} /> */}
<Route
        path="/brewery/:id" 
        render={request => {
          const id = request.match.params.id;
          console.log(id);
          return <OneBrewery id={id} />;
        }}
      />

<Route 
        path="/beer/:id" 
        render={request => {
          const id = request.match.params.id;
          console.log(id);
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
