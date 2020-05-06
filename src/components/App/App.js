import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer'
import local from '../../data/local';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <div className="app">
        YOUR CODE GOES HERE!
        <NewsContainer local={ this.state.local }/>
        // passing down my state as props with "local"
      </div>
    );
  }
}

export default App;
