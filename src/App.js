import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CategoriesList from './CategoriesList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <CategoriesList />
      </div>
    );
  }
}

export default App;
