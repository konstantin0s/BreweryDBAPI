import React, { Component } from 'react';
import axios from 'axios';
import Brewery from './Brewery';
import SearchBrewery from './SearchBrewery';

var myKey = '659d5c6b8f3d2447f090119e48202fdb';

 class Brewerys extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          brewerys: [],
          isLoading: true,
          pagination: {
            total: 0,
            currentPage: 1,
            itemsPerPage: 50
          }
        };
      }

          componentDidMount() {
              this.performSearch();
            
          }
    
    // performSearch = (query = 'ryan') => {
    //     axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${myKey}&limit=5`)
    //         .then(res => {
    //           const giphy = res.data;
    //           this.setState({ giphy: giphy.data,
    //             loading: false
    //         });
    //         })
    //         .catch(err => console.log(err));
    // }

    performSearch = (query = 'Buzz') => {
        this.setState(state => ({ ...state, isLoading: true }));

        axios.get(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers/?key=${myKey}`)
        .then(res => {
          const beers = res.data.data;
          this.setState({ brewerys: beers,
            loading: false,
            pagination: {
                currentPage: res.data.currentPage,
                itemsPerPage: this.state.pagination.itemsPerPage,
                total: res.data.totalResults
            }
        });
        })
        .catch(err => console.log(err));
    }

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
                <div>
                    <SearchBrewery onSearch={this.performSearch} />
{/*     
                    {
                (this.state.loading) ? <p>Loading</p> : null
              }  */}
    
                 {/* {brewerys.map((brewery) => (
     
                        <Brewery key={brewery.id} brewery={brewery} />
                    ))}
             */}

{this.state.brewerys.map(brewery => {
                return   <Brewery key={brewery.id} brewery={brewery} />
              })}

                </div>
            )
        }
    }

export default Brewerys;