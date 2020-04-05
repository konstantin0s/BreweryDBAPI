import React from "react";
import axios from 'axios';
import Footer from "./Footer";
import Loader from "./Loader";
import './css/onebrewery.css';
require('dotenv');

const API_KEY = process.env.REACT_APP_API_KEY;

class OneBrewery extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        brewery: [],
        isLoading: true
      };
    }

    
    performSearch = () => {
        this.setState(state => ({ ...state, isLoading: true }));
    
        axios
          .get(
            `${process.env.REACT_APP_CORS_PROXY_URL}https://sandbox-api.brewerydb.com/v2/brewery/q6vJUK/locations/?key=${API_KEY}`)
          .then(res => {
            const brewery = res.data.data;
            // console.log(brewery);
            this.setState({
              brewery: brewery,

              isLoading: false,
         
            });
    
          })
          .catch(err => console.log(err));
      };


    componentDidMount() {
      this.performSearch();
      }

    render() {
      const {brewery, isLoading} = this.state;
        if (Array.isArray(brewery)) {

        return (

      
    <div className="containery">
      <ul className="ulist">

        
      {
      
      isLoading ?   <Loader /> :

      brewery.map(onebrewery => (
        <li className="list-item onebrew"
         key={onebrewery.id}>
           
           <div className="inner-list">
        <div className="namex">
        <h3>Brewery Name: {' '}</h3>
           <p> {onebrewery.name ? onebrewery.name : "No name available"}</p>
        </div>
        
        <div className="cityx">
          <h4>
            City: {' '}  </h4>
          <p>  {onebrewery.locality
              ? onebrewery.locality
              : "No Locality available"}</p> 
          </div>

          <div className="typex">
          <h5>
            Type: {' '} </h5>
        <p>    {onebrewery.locationType
              ? onebrewery.locationType
              : "No type"}</p>
         </div>

         <div className="regionx">
          <p>
            Region: {' '} {' '}
            {onebrewery.region ? onebrewery.region : "Without Region"}
          </p>
          </div>

        </div>

        </li>
              ))}
      </ul>

<Footer />
    </div>
        );
        }
          
    }
}

export default OneBrewery;
