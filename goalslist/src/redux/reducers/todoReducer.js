import { ADD_TODO } from '../actions/actionTypes';

const initialState = {
    goals: [
      {id: '123', goal: "Learn React/Redux", startDate:"2019-08-20", endDate:"2019-08-23"},
    ],
    newValue: ''
  };

  export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          newValue: action.newValue
        };
      default:
        return state;
    }
  };