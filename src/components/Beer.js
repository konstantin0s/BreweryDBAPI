import React from "react";

const Beer = (props) => {
  return (
    <div className="container">
      <ul className="ulist">
        <li className="list-item"
         key={props.beer.id}>
          <h2>
            Name: {' '}
            {props.beer.name ? props.beer.name : "No name available"}
          </h2>
    
        </li>
      </ul>
      
    </div>
  );
}

export default Beer;
