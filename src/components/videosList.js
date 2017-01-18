import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoDetail from '../containers/videoDetail';

class VideoList extends Component {

  render() {
    const videoItems = this.props.videos.map(video => {
      return (
        <VideoDetail
          video={video}
          key={video.etag}
        />
      );
    });

    return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos,
  };
}

export default connect(mapStateToProps, null)(VideoList);
