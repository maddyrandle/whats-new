import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      entertainment,
      health,
      science,
      technology,
      currentPage: local
    }
  }

  updateState = (page) => {
    this.setState({ currentPage: this.state[page] });
  }

  render () {
    return (
      <main className="app">
        <section className="header">
          <h1>What's <span>New?</span></h1>
          <form className="search-form">
            <input className="search-input"/>
            <button className="search-button">search</button>
          </form>
        </section>
        <section className="menu">
          <Menu updateState={ this.updateState }/>
        </section>
        <section className="articles">
          <NewsContainer articles={ this.state.currentPage }/>
        </section>
      </main>
    );
  }
}

export default App;
