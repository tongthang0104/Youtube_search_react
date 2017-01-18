import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../action';

class VideoDetail extends Component  {

  render() {
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    return (
      <li onClick={() => this.props.selectVideo(this.props.video)} className="list-group-item">
        <div className="video-list-media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} alt={this.props.video.snippet.title} />
          </div>

          <div className="media-body">
            <div className="media-heading">{this.props.video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
  }
}

VideoDetail.propTypes = {
  video: PropTypes.object,
};

export default connect(null, { selectVideo })(VideoDetail);
