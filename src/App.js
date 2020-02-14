import React, { Component } from "react";
import Brewerys from "./components/Brewerys";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Beers from "./components/Beers";
import "./App.css";
import axios from "axios";
import Pagination from "./components/Pagination";
// import SearchByName from './components/SearchByName';
require('dotenv')

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brewerys: [],
      searchText: [],
      isLoading: true,
      pagination: {
        total: 0,
        currentPage: 1,
        itemsPerPage: 15
      }
    };
  }

  performSearch = (query) => {
    this.setState(state => ({ ...state, isLoading: true }));

    axios
      .get(
        `${process.env.REACT_APP_CORS_PROXY_URL}https://sandbox-api.brewerydb.com/v2/beers/?key=${API_KEY}&by_name=${query}&page=${this.state.pagination.currentPage}`
      )
      .then(res => {
        const brewerys = res.data.data;
        this.setState({
          brewerys: brewerys,
          loading: false,
          pagination: {
            currentPage: res.data.currentPage,
            itemsPerPage: this.state.pagination.itemsPerPage,
            total: res.data.totalResults
          }
        });

        localStorage.setItem(
          `${query}`,
          JSON.stringify(this.state.brewerys) )

      })
      .catch(err => console.log(err));

   
  };

  // componentDidMount = () => {
  //   this.performSearch();
  // };


  
  paginate = (page, itemsPerPage) => {
    this.setState(
      state => {
        state.pagination.currentPage = page;
        state.pagination.itemsPerPage = itemsPerPage;

        return state;
      },
      () => {
        this.performSearch();
      }
    );
  };

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
