import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer'
import SearchForm from '../SearchForm/SearchForm'
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

  updateState = (category) => {
    this.setState({ currentPage: this.state[category] });
  }

  getFilteredNews = (e, searchInput) => {
    e.preventDefault();

    const filteredNews = this.state.currentPage.filter(article => {
      return article.headline.toLowerCase().includes(searchInput.toLowerCase()) || article.description.toLowerCase().includes(searchInput.toLowerCase())
    })
    this.setState({ currentPage: filteredNews })
  }

  render () {
    return (
      <main className="app">
        <section className="header">
          <h1>What's <span>New?</span></h1>
          <SearchForm getFilteredNews={ this.getFilteredNews }/>
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
