import axios from 'axios';

const API_KEY = 'AIzaSyD7Xl86Te-hNLwihjMMxBUrDmz3C4CtJTo';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const SELECT_VIDEO = 'SELECT_VIDEO';

export function fetchVideos(searchTerm) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video`;
  const request = axios.get(url);

  return {
    type: FETCH_VIDEOS,
    payload: request,
  };
}

export function selectVideo(video) {
  return {
    type: SELECT_VIDEO,
    payload: video,
  };
}
