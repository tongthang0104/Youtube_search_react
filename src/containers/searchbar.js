import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../action/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.fetchVideos = _.debounce((term) => { this.props.fetchVideos(term); }, 300);
    this.fetchVideos('dota');
  }

  onInputChange(term) {
    this.setState({ term });
    this.fetchVideos(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder="Enter your search here"
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  fetchVideos: PropTypes.func,
};

export default connect(null, { fetchVideos })(SearchBar);
