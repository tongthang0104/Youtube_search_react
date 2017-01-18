import { combineReducers } from 'redux';
import videos from './videos_reducer';
import selectedVideo from './selected_video_reducer';

const rootReducer = combineReducers({
  videos,
  selectedVideo,
});

export default rootReducer;
