import React from "react";
import axios from 'axios';
require('dotenv');

const API_KEY = process.env.REACT_APP_API_KEY;

class OneBrewery extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        brewery: [],
        thisId: '',
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
            console.log(brewery);
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
    
        const { brewery } = this.state;
        console.log(this.state.brewery);
        console.log(this.state.thisId);
        if (Array.isArray(this.state.brewery)) {

        return (

      
    <div className="container">
      <ul className="ulist">
      {this.state.brewery.map(onebrewery => (
        <li className="list-item"
         key={onebrewery.id}>
          <h2>
            Brewery Name: {' '}</h2>
           <h4> {onebrewery.name ? onebrewery.name : "No name available"}</h4>
        
          <h3>
            City: {' '}  </h3>
          <h4>  {onebrewery.locality
              ? onebrewery.locality
              : "No Locality available"}</h4>
         

          <h4>
            Type: {' '} </h4>
        <h5>    {onebrewery.locationType
              ? onebrewery.locationType
              : "No type"}</h5>
         
          <p>
            Region: {' '}
            {onebrewery.region ? onebrewery.region : "Without Region"}
          </p>
        </li>
              ))}
      </ul>

    </div>
        );
        }
          
    }
}

export default OneBrewery;
