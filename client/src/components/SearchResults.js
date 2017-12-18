import React from 'react';
import { Link } from 'react-router-dom';
import Artist from '../components/Artist';
import Track from '../components/Track';

export default class SearchResults extends React.Component {
  render() {
    return this.props.results.map((result) => {
      return (
        this.props.type == 'artist' ?
          <Artist artistId={result.id} name={result.name} /> :
          <Track trackId={result.id} name={result.name} />
      )
    })
  }
}
