import { 
  ADD_TODO,
  REMOVE_TODO
 } from './actionTypes';

export const addTodoValue = value => (
  {
    type: ADD_TODO,
    goals: value
  });

export const removeTodoValue = value => ({
  type: REMOVE_TODO,
  goals: value
});

