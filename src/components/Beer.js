import React from "react";
import { Link } from "react-router-dom";

const Beer = (props) => {
  return (
    <div className="container">
      <ul className="ulist">
      <Link className="list-item linkz" id={props.beer.id} to={`/beer/${props.beer.id}`}
         key={props.beer.id}>
            {console.log('props id', props.beer.beerId)}
            {console.log('just id', props.beer.id)}
          <h2>
            Name: {' '}
            {props.beer.name ? props.beer.name : "No name available"}
          </h2>
    
        </Link>
      </ul>
      
    </div>
  );
}

export default Beer;
