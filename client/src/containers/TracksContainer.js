import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tracks from '../components/Tracks';

class TracksContainer extends React.Component {
  render() {
    return (
      <Tracks
        artistId={this.props.match.params.id}
      />
    )
  };
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {

}
export default connect(mapStateToProps, mapDispatchToProps)(TracksContainer);
