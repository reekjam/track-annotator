import { combineReducers } from 'redux';
import albumReducer from './albumReducer';
import artistReducer from './artistReducer';
import authReducer from './authReducer';
import notificationReducer from './notificationReducer';
import searchReducer from './searchReducer';
import trackReducer from './trackReducer';
import userReducer from './userReducer';

export default combineReducers({
  album: albumReducer,
  artist: artistReducer,
  authentication: authReducer,
  notification: notificationReducer,
  search: searchReducer,
  track: trackReducer,
  user: userReducer
});
