import React from "react";

const Brewery = (props) => {
  return (
    <div className="container">
      <ul className="ulist">
        <li className="list-item"
         key={props.brewery.id}>
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
        </li>
      </ul>
      
    </div>
  );
}

export default Brewery;
