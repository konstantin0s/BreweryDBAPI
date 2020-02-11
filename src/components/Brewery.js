import React from 'react';


 function Brewery(props) {

    return (
        <div>
                               <li key={props.brewery.id}>
{/* <img src={props.gif.images.downsized.url} /> */}
                <h3>Name: 
                {props.brewery.name ? props.brewery.name : 'No name available'}
                </h3>
                {/* <h5>Type: {props.brewery.description}</h5> */}
                {/* <p>{props.brewery.ingredients}</p> */}
                    </li>
        </div>
    )
}


export default Brewery;