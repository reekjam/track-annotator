import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  updateSearchResults,
  updateSearchType,
 } from '../actions/searchActions';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';

class SearchFormContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SearchForm
          handleClickCallback={this.props.updateSearchType}
          handleSubmitCallback={this.props.updateSearchResults}
          token={this.props.token}
          type={this.props.type}
          />
        <ul>
          <SearchResults
            results={this.props.results}
            type={this.props.type}
            />
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.search.results,
    type: state.search.type,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateSearchResults,
    updateSearchType,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormContainer)
