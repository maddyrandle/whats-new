import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super();
    this.state = {
      searchInput: ''
    }
  }

  setSearchInput = (e) => {
    this.setState({ searchInput: e.target.value })
  }



  render () {
    return (
      <form className="search-form">
        <input
        className="search-input"
        type="text"
        name="searchInput"
        placeholder="search news articles"
        onChange={ (e) => this.setSearchInput(e) }
        />
        <button className="search-button" onClick={  (e) => this.props.getFilteredNews(e, this.state.searchInput) }>search</button>
      </form>
    )
  }
}

export default SearchForm;
