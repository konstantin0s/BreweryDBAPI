import React, { Component } from "react";
import Brewerys from "./components/Brewerys";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Beers from "./components/Beers";
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

    
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
