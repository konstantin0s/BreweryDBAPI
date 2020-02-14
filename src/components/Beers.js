import React, { Component } from 'react'
import Beer from './Beer';
import SearchByName from "./SearchByName";
import Pagination from './Pagination'
import axios from 'axios';
require('dotenv');

const API_KEY = process.env.REACT_APP_API_KEY;

class Beers extends Component {
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

  performSearch = (query) => {
    this.setState(state => ({ ...state, isLoading: true }));

    axios
      .get(
        `${process.env.REACT_APP_CORS_PROXY_URL}https://sandbox-api.brewerydb.com/v2/search?key=${API_KEY}&type=beer&q=${query}&page=${this.state.pagination.currentPage}`)
      .then(res => {
        const brewerys = res.data.data;
        
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

    const {brewerys, searchText, isLoading} = this.state;

    console.log(brewerys);
    if (!brewerys == "" || !brewerys == "undefined") {
      return (
        <div className="byCity">
          <SearchByName onSearch={this.performSearch} />

          <Pagination
            className={this.state.isLoading ? " hidden" : ""}
            total={this.state.pagination.total}
            current={this.state.pagination.currentPage}
            onChange={this.paginate}
            pageSize={this.state.pagination.itemsPerPage}
          />

          {isLoading ? <p>Loading</p> : null}

          {brewerys.map(beer => (
      
            <Beer key={beer.id} beer={beer} />
            ))
        }

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
          <SearchByName onSearch={this.performSearch} />
    

          <p>Loading...</p>


   
        </div>
      );
    }
  }

}

export default Beers;