import React from "react";

 const Beers = (props) => {
  return (
    <div className="container">
      <ul className="ulist">
        <li className="list-item"
         key={props.beers.id}>
          <h2>
            Name: {' '}

            {props.beers.name ? props.beers.name : "No name available"}
          </h2>
     
        </li>
      </ul>
      
    </div>
  );
}

export default Beers;
