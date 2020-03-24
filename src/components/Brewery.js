import React from "react";
import { Link } from "react-router-dom";
import './css/brewery.css';

const Brewery = (props) => {

  return (
  
    <div className="container">
      <ul className="ulist">
      <Link className="list-item linkz" id={props.brewery.id} to={`/brewery/${props.brewery.id}`}
         key={props.brewery.id}>
      <div className="inner-list">
      <h2>
            Beer: {' '}
            {props.brewery.brewery.nameShortDisplay ? props.brewery.brewery.nameShortDisplay : "No name available"}
          </h2>
          <h3>
            City: {' '}
            {props.brewery.locality
              ? props.brewery.locality
              : "No Locality available"}
          </h3>

          <h4>
            Type: {' '}
            {props.brewery.locationType
              ? props.brewery.locationType
              : "No type"}
          </h4>
          <p>
            Region: {' '}
            {props.brewery.region ? props.brewery.region : "Without region"}
          </p>
      </div>
        </Link>
      </ul>
      
    </div>
  );
}

export default Brewery;
