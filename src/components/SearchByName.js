import React, { Component } from "react";
import Beer from './Beer';

class SearchBrewery extends Component {
  constructor(props) {
    super(props);
  this.state = {
    searchText: ""
    };
}

  onSearchChange = e => {
    this.setState({
      searchText: e.target.value,
      term: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
    this.setState({ searchText: "" });
  };


  render() {
    console.log(this.state.searchText)
    console.log(this.state.brewerys)
    return (
      <div className="byCity">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div className="active-cyan-3 active-cyan-4 mb-4 mt-4">
            <input
              className="form-control"
              onChange={this.onSearchChange}
              type="search"
              ref={input => (this.query = input)}
              placeholder="Search By Name"
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

        {this.state.brewerys.filter(searchingFor(this.state.term)).map((beer) => 
          <Beer key={beer.id} beer={beer} />
        )} 
   
      </div>
    );
  }
}

export default SearchBrewery;
