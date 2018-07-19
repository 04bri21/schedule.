import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;