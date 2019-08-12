import { ADD_TODO } from './actionTypes';

export const clickButton = value => ({
    type: ADD_TODO,
    newValue: value
  });