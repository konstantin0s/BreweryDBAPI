import React, { Component } from "react";
import Pagination from "./Pagination";

class SearchBrewery extends Component {
  state = {
    searchText: ""
  };

  onSearchChange = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
    this.setState({ searchText: "" });
  };

  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div className="active-cyan-3 active-cyan-4 mb-4 mt-4">
            <input
              className="form-control"
              onChange={this.onSearchChange}
              type="search"
              ref={input => (this.query = input)}
              placeholder="Search By City (in US)"
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
      </div>
    );
  }
}

export default SearchBrewery;
