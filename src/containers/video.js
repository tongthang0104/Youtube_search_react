import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Video extends Component {

  render() {
    let video = this.props.selectedVideo || this.props.videos[0];
    if (!video) {
      return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} />
        </div>

        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedVideo: state.selectedVideo,
    videos: state.videos,
  };
}

Video.propTypes = {
  selectedVideo: PropTypes.object,
  videos: PropTypes.array,
};

export default connect(mapStateToProps, null)(Video);
