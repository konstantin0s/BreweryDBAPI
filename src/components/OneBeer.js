import React from "react";
import axios from 'axios';
import Footer from "./Footer";
import './css/onebeer.css';
require('dotenv');

const API_KEY = process.env.REACT_APP_API_KEY;

class OneBeer extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        beer: [],
        isLoading: true
      };
    }

    
    performSearch = () => {
        this.setState(state => ({ ...state, isLoading: true }));
    
        axios
          .get(
            `${process.env.REACT_APP_CORS_PROXY_URL}https://sandbox-api.brewerydb.com/v2/beer/${this.props.id}/?key=${API_KEY}`)
          .then(res => {
            const beer = res.data.data;
            console.log(beer);
            this.setState({
              beer: beer,

              isLoading: false,
         
            });
    
          })
          .catch(err => console.log(err));
      };


    componentDidMount() {
      this.performSearch();
      }

    render() {
    
        const { beer } = this.state;

        return (
            <div className="containerx">
            <ul className="ulist">
              <li className="list-item oneb"
               key={beer.id}>
                 
                <div className="inner-list">
                <h2>
                  Beer: {' '}
                  {beer.name ? beer.name : "No name available"}
                </h2>
              <h6>
                  Organic: {' '}
                  {beer.isOrganic ? beer.isOrganic : "No Organicx available"}
              </h6>
                <p>
                Description: {' '}
                  {beer.description ? beer.description : "No description available"}
                </p>
          
                </div>

              </li>
            </ul>

            <Footer />
            
          </div>
        );
    }
}

export default OneBeer;
