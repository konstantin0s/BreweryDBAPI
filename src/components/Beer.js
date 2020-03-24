import React from "react";
import { Link } from "react-router-dom";
import './css/beer.css';

const Beer = (props) => {
  return (
    <div className="container">
      <ul className="ulist">
      <Link className="list-item linkz" id={props.beer.id} to={`/beer/${props.beer.id}`}
         key={props.beer.id}>
     
     <div className="inner-list">
     <h2>
            Name: {' '}
            {props.beer.name ? props.beer.name : "No name available"}
          </h2>
     </div>
    
        </Link>
      </ul>
      
    </div>
  );
}

export default Beer;
