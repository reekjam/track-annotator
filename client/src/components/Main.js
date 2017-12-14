import React from 'react';
import SearchResults from './SearchResults';

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      results: [],
      searchValue: '',
      type: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    this.setState({
      type: e.target.value
    });
  }

  handleChange(e) {
    this.setState({
      searchValue: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { searchValue, type } = this.state;
    const username = sessionStorage.getItem('username');
    fetch(`/api/v1/search?q=${encodeURI(searchValue)}&type=${encodeURI(type)}`, {accept: 'application/json'})
    .then((response) => {
      return response.json();
    })
    .then(({data}) => {
      const typeKey = `${type}s`;
      const { items } = data[typeKey];
      return items;
    })
    .then((items) => {
      this.setState({
        results: items
      })
    })
  }

  render() {
    const { results, searchValue } = this.state;

    return (
      <div>
        <div className='search'>
          <form onSubmit={this.handleSubmit}>
            <input type='text' onChange={this.handleChange} value={searchValue} />

            <label htmlFor='artist'>Artist</label>
            <input type='radio' id='artist' name='type' onClick={this.handleClick} value='artist' />

            <label htmlFor='track'>Track</label>
            <input type='radio' id='track' name='type' onClick={this.handleClick} value='track' />

            <button type='submit'>Search</button>
          </form>
        </div>

        <SearchResults results={results} />
      </div>
    );
  }
}
