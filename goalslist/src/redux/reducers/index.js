import { TodoReducer } from './todoReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  ToDo: TodoReducer
});