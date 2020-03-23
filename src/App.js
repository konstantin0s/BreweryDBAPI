import React, { Component } from "react";
// import Brewerys from "./components/Brewerys";
import Brewerysexample from "./components/Brewerysexample";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
// import Beers from "./components/Beers";
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

    
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
