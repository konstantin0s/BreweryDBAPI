import React, { Component } from "react";
import Brewery from "./Brewery";
import SearchBrewery from "./SearchBrewery";
import Pagination from './Pagination';
import axios from "axios";
require('dotenv');


const API_KEY = process.env.REACT_APP_API_KEY;

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
        `${process.env.REACT_APP_CORS_PROXY_URL}https://sandbox-api.brewerydb.com/v2/locations/?key=${API_KEY}&country=us&locality=${query}&sort=asc&page=${this.state.pagination.currentPage}`
      )
      .then(res => {
        const brewerys = res.data.data;
        console.log(res.data.data);
        console.log(this.state.pagination.currentPage);
        this.setState({
          brewerys: brewerys,
          isLoading: false,
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
    console.log(this.state.pagination)
      if (Array.isArray(this.state.brewerys)) {
      return (
        <div className="byCity">
          <SearchBrewery onSearch={this.performSearch} />

          <Pagination
            className={this.state.isLoading ? " hidden" : ""}
            total={this.state.pagination.total}
            current={this.state.pagination.currentPage}
            onChange={this.paginate}
            pageSize={this.state.pagination.itemsPerPage}
          />


          {/* {this.state.isLoading ? <p>Loading</p> : null} */}

          {this.state.brewerys.map(brewery => (
            <Brewery key={brewery.id} brewery={brewery} />
          ))}

<Pagination
            className={this.state.isLoading ? " hidden" : ""}
            total={this.state.pagination.total}
            current={this.state.pagination.currentPage}
            onChange={this.paginate}
            pageSize={this.state.pagination.itemsPerPage}
          />

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
