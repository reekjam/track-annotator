import React from 'react';

export default class SearchResults extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.results !== nextProps.results;
  }

  render() {
    return (
      this.props.results.map(result => {
        return (
          <p key={result.id}>{result.name}</p>
        );
      })
    )
  }
}
