import React from "react";

function Brewery(props) {
  return (
    <div>
      <ul>
        <li key={props.brewery.id}>
          <h2>
            Name:
            {props.brewery.name ? props.brewery.name : "No name available"}
          </h2>
          <h3>
            City:
            {props.brewery.locality
              ? props.brewery.locality
              : "No Locality available"}
          </h3>

          <h4>
            Type:
            {props.brewery.locationType
              ? props.brewery.locationType
              : "No type"}
          </h4>
          <p>
            Region:
            {props.brewery.region ? props.brewery.region : "Without region"}
          </p>
        </li>
      </ul>
      ;
    </div>
  );
}

export default Brewery;
