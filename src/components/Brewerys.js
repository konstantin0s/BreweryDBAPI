import React, { Component } from 'react'
import Brewery from './Brewery';
import './css/brewerys.css';
import Pagination from './Pagination';
import Footer from "./Footer";
import axios from 'axios';
require('dotenv');

const API_KEY = process.env.REACT_APP_API_KEY;

class Brewerysexample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      brewerys: [],
      isLoading: true,
      pagination: {
        total: 0,
        currentPage: 1,
        itemsPerPage: 25
      }
    };
  }

searchingFor = term => {
    return (x) =>  {
      return x.locality.includes(term) || !term;
    }
  }
  

  performSearch = (page) => {
    this.setState(state => ({ ...state, isLoading: true }));

    axios
      .get(
        `${process.env.REACT_APP_CORS_PROXY_URL}https://sandbox-api.brewerydb.com/v2/locations/?key=${API_KEY}`,
        {
          params: {
            p: page
          }
         }
        )
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
        this.performSearch(this.state.pagination.currentPage);
      }
    );
  };



 jsUcfirst = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

  componentDidMount() {
    this.performSearch();
}

onSearchChange = e => {
  this.setState({
    searchText: this.jsUcfirst(e.target.value),
    term: this.jsUcfirst(e.target.value)
  });
};

handleSubmit = e => {
  e.preventDefault();
  this.performSearch(this.query.value);
  e.currentTarget.reset();
  this.setState({ searchText: "" });
};


  render() {

    const {brewerys, isLoading, term} = this.state;

      if (Array.isArray(brewerys)) {
      return (
        <div className="byCity">
          <div className="byCitysearch">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div className="active-cyan-3 active-cyan-4 mb-4 mt-4">
            <input
              className="form-control"
              onChange={this.onSearchChange}
              type="text"
              ref={input => (this.query = input)}
              placeholder="Enter City Name"
              aria-label="Search"
            />
          </div>

          <button
            type="submit"
            id="submit"
            className="input-group-text cyan lighten-2">
            <i className="fa fa-fw fa-search text-dark" aria-hidden="true"></i>
          </button>
        </form>

                  <Pagination
            className={this.state.isLoading ? " hidden" : ""}
            total={this.state.pagination.total}
            current={this.state.pagination.currentPage}
            onChange={this.paginate}
            pageSize={this.state.pagination.itemsPerPage}
          />

          {
          isLoading ? <p>Loading</p> :
        brewerys.filter(this.searchingFor(term)).map((brewery) => (
          
          <Brewery key={brewery.id} id={brewery.breweryId} brewery={brewery} />
    
          
        ))
         }

<Pagination
            className={this.state.isLoading ? " hidden" : ""}
            total={this.state.pagination.total}
            current={this.state.pagination.currentPage}
            onChange={this.paginate}
            pageSize={this.state.pagination.itemsPerPage}
          />
      <Footer />

   
      </div>


    </div>
      );
    } else {
      return (
        <div>
    

          <p>Loading...</p>


   
        </div>
      );
    }
  }

}

export default Brewerysexample;