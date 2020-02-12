import React, { Component } from "react";
import Brewerys from "./components/Brewerys";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Beers from "./components/Beers";
import "./App.css";
import axios from "axios";
import Pagination from "./components/Pagination";

var myKey = "a5a1e63036b53d65b4ff10eb7cd8e58c";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brewerys: [],
      isLoading: true,
      pagination: {
        total: 0,
        currentPage: 1,
        itemsPerPage: 15
      }
    };
  }

  performSearch = (query = "alabama") => {
    this.setState(state => ({ ...state, isLoading: true }));

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers/?key=${myKey}&page=${this.state.pagination.currentPage}`
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
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.performSearch();
  };

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
    console.log(this.state.brewerys);
    return (
      <Router>
        <div className="the-app">
          <Header />

          <Pagination
            className={this.state.isLoading ? " hidden" : ""}
            total={this.state.pagination.total}
            current={this.state.pagination.currentPage}
            onChange={this.paginate}
            pageSize={this.state.pagination.itemsPerPage}
          />

          <Switch>
            <Route exact path="/location" component={Brewerys} />

            <div>
              {this.state.brewerys.map(beers => {
                return <Beers key={beers.id} beers={beers} />;
              })}
            </div>
          </Switch>

          <Pagination
            className={this.state.isLoading ? " hidden" : ""}
            total={this.state.pagination.total}
            current={this.state.pagination.currentPage}
            onChange={this.paginate}
            pageSize={this.state.pagination.itemsPerPage}
          />
        </div>
      </Router>
    );
  }
}

export default App;
