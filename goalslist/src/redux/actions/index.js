import { ADD_TODO } from './actionTypes';

export const addTodoValue = value => (
  {
    type: ADD_TODO,
    goals: value
  });