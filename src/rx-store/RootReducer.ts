import { combineReducers } from 'redux';
import taskReducer from 'rx-reducers/TaskReducer';

const rootReducer = combineReducers({
  taskReducer
});

export default rootReducer;