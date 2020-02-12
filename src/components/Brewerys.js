import React, { Component } from "react";
import axios from "axios";
import Brewery from "./Brewery";
import SearchBrewery from "./SearchBrewery";
import Pagination from './Pagination';

//my key api
var myKey = "a5a1e63036b53d65b4ff10eb7cd8e58c";

class Brewerys extends Component {
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
        `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/locations/?key=${myKey}&country=us&locality=${query}&sort=asc`
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
    if (!this.state.brewerys == "" || !this.state.brewerys == "undefined") {
      return (
        <div>
          <SearchBrewery onSearch={this.performSearch} />


          {this.state.loading ? <p>Loading</p> : null}

          {this.state.brewerys.map(brewery => (
            <Brewery key={brewery.id} brewery={brewery} />
          ))}

        </div>
      );
    } else {
      return (
        <div>
          <SearchBrewery onSearch={this.performSearch} />

          <p>Loading...</p>
        </div>
      );
    }
  }
}

export default Brewerys;
