import React from 'react';
import { search } from '../helpers/spotify';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    this.props.handleClickCallback(e.target.value);
  }

  handleChange(e) {
    this.setState({
      searchValue: e.target.value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { searchValue } = this.state;
    const { token, type } = this.props;

    const items = await search(token, searchValue, type);
    this.props.handleSubmitCallback(items);
  }

  render() {
    const { searchValue } = this.state;
    const { type } = this.props;

    return (
      <div className='search'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} value={searchValue} />

          <label htmlFor='artist'>Artist</label>
          <input
            defaultChecked={type === 'artist'}
            type='radio'
            id='artist'
            name='type'
            onClick={this.handleClick}
            value='artist'
            />

          <label htmlFor='track'>Track</label>
          <input
            defaultChecked={type === 'track'}
            type='radio'
            id='track'
            name='type'
            onClick={this.handleClick}
            value='track'
            />

          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}
