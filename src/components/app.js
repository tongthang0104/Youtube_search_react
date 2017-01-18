import React from 'react';
import SearchBar from '../containers/searchbar';
import Video from '../containers/video';
import VideoList from './videosList';

export default function () {
  return (
    <div>
      <SearchBar />
      <Video />
      <VideoList />
    </div>
  );
}
