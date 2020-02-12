import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="header" style={headerStyle}>
            <h1>HouseOfBeer</h1>
            <Link className="link" style={linkStyle}
            to="/" >Home</Link> | <Link 
            style={linkStyle} className="link"
            to="/beers" >Beers</Link> 
        </header>
    );
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    marginRight: '20px',
    marginLeft: '20px'
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;