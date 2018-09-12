import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HeaderApp extends Component {
  render() {
    return (
      <div className="HeaderApp">
      <img src="logo.jpg" />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/userpage">Profil</Link>
          <Link to="/search">Recherche</Link>
        </nav>
      </div>
    );
  }
}

export default HeaderApp;
