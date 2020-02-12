import React, { Component } from 'react';
import Brewerys from './components/Brewerys';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import './App.css';

 class App extends Component {
  render() {
    return (
      <Router>
        <div>
       <Header />
        <Route exact path="/beers" component={Brewerys} />
  
      </div>
        </Router>
    )
  }
}

export default App;
