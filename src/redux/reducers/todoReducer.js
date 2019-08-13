import { 
  ADD_TODO,
  REMOVE_TODO
 } from '../actions/actionTypes';

const initialState = {
    goals: [],
    newValue: ''
  };

  export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          goals: action.goals
        };
      case REMOVE_TODO:
        return {
          goals: action.goals
        };
      default:
        return state;
    }
  };