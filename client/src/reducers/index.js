import { combineReducers } from 'redux';
import authReducer from './authReducer';
import searchReducer from './searchReducer';
import userReducer from './userReducer';

export default combineReducers({
  authentication: authReducer,
  search: searchReducer,
  user: userReducer
});
