import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateSearchResults } from '../actions/searchActions';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';

class SearchFormContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SearchForm handleSubmitCallback={this.props.updateSearchResults}/>
        <SearchResults results={this.props.results} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.search.results
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateSearchResults
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormContainer)
